"use client";
import { useEffect, useRef, useState } from "react";
import { Chart, ChartConfiguration, ChartOptions } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import { format, parseISO } from "date-fns"; 
type ChartType = Chart<'line', (number | null)[], string>;

Chart.register(zoomPlugin);

export default function LineGraph() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartType | null>(null);

  const [startDate, setStartDate] = useState<string>("2024-02-01");
  const [endDate, setEndDate] = useState<string>("2024-09-01");


  const allDataValues = [1000, 4700, 8400, 12100, 15800, 19500, 16500];
  const allDataValues2 = [1500, 3700, 5400, 13100, 12800, 18500, 12000];
  const allDates = ["2024-02-01", "2024-03-01", "2024-04-01", "2024-05-01", "2024-06-01", "2024-08-01", "2024-09-01"];

  useEffect(() => {
    const filterDataByDate = () => {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();

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
                label: '',
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
                label: '',
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

      
        const handleResize = () => {
          if (chartInstanceRef.current) {
            chartInstanceRef.current.resize();
          }
        };

        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
            chartInstanceRef.current = null;
          }
        };
      } else {
        console.error("Unable to get canvas context.");
      }
    } else {
      console.error("Canvas element not found.");
    }
  }, [startDate, endDate]);

  return (
    <div className="w-full h-full">
      {/* <div className="flex space-x-4 mb-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 rounded"
        />
      </div> */}
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
}
