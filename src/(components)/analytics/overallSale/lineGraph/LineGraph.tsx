"use client";

import { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, ChartOptions } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import { format, parseISO } from "date-fns";
import { useAppSelector } from "@/redux/store";

type ChartType = Chart<'line', (number | null)[], string>;

Chart.register(zoomPlugin);

export default function LineGraph() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartType | null>(null);
  const { startDate, endDate } = useAppSelector((state) => state.date);
  const data = useAppSelector((state) => state.order);
  console.log(data);

  const allDataValues = [1000, 4700, 8400, 12100, 15800, 19500, 16500];
  const allDataValues2 = [1500, 3700, 5400, 13100, 12800, 18500, 12000];
  const allDates = ["2024-02-01", "2024-03-01", "2024-04-01", "2024-05-01", "2024-06-01", "2024-08-01", "2024-09-01"];

  useEffect(() => {
    const filterDataByDate = () => {
      const start = startDate ? new Date(startDate).getTime() : -Infinity;
      const end = endDate ? new Date(endDate).getTime() : Infinity;

      const filteredLabels: string[] = [];
      const filteredData: (number | null)[] = [];
      const filteredData2: (number | null)[] = [];

      allDates.forEach((date, index) => {
        const dateValue = new Date(date).getTime();
        if (dateValue >= start && dateValue <= end) {
          filteredLabels.push(date);
          filteredData.push(allDataValues[index]);
          filteredData2.push(allDataValues2[index]);
        }
      });

      console.log('Filtered Data:', { filteredLabels, filteredData, filteredData2 });
      return { filteredLabels, filteredData, filteredData2 };
    };

    const { filteredLabels, filteredData, filteredData2 } = filterDataByDate();

    const canvas = chartRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const config: ChartConfiguration<'line', (number | null)[], string> = {
          type: 'line',
          data: {
            labels: filteredLabels, 
            datasets: [
              {
                label: 'Dataset 1',
                data: filteredData,
                fill: true,
                backgroundColor: 'transparent',
                borderColor: "#9A55FF",
                borderWidth: 3,
                tension: 0,
                pointBackgroundColor: "#9A55FF",
                pointBorderColor: "#9A55FF",
                pointRadius: 3,
                pointHoverRadius: 5,
                spanGaps: true,
              },
              {
                label: 'Dataset 2',
                data: filteredData2,
                fill: true,
                backgroundColor: 'transparent',
                borderColor: "#41A5FF",
                borderWidth: 3,
                tension: 0,
                pointBackgroundColor: "#41A5FF",
                pointBorderColor: "#41A5FF",
                pointRadius: 3,
                pointHoverRadius: 5,
                spanGaps: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              x: {
                beginAtZero: true,
                grid: {
                  display: true,
                },
                ticks: {
                  minRotation: 0,
                  maxRotation: 0,
                  callback: function (value, index) {
                    return format(parseISO(filteredLabels[index]), "d MMM");
                  }
                }
              },
              y: {
                beginAtZero: true,
                min: 0,
                grid: {
                  display: true,
                },
                ticks: {
                  callback: (value: number) => {
                    if (value >= 1000) {
                      return `${(value / 1000).toFixed(0)}k`;
                    }
                    return value.toString();
                  },
                  stepSize: 5000,
                },
              },
            },
            plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'x',
                },
                zoom: {
                  wheel: {
                    enabled: true,
                  },
                  pinch: {
                    enabled: true,
                  },
                  mode: 'x',
                },
              },
              tooltip: {
                enabled: true,
              },
              legend: {
                display: false,
              },
            },
          } as ChartOptions<'line'>,
        };

        chartInstanceRef.current = new Chart(ctx, config);
      } else {
        console.error("Unable to get canvas context.");
      }
    } else {
      console.error("Canvas element not found.");
    }
  }, [startDate, endDate]);

  useEffect(() => {
    const handleResize = () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.resize();
      }
    };

    // Add resize listener only on the client side
    if (typeof window !== "undefined") {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
          chartInstanceRef.current = null;
        }
      };
    }
  }, []); // Empty dependency array ensures this effect runs once after initial render

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
}
