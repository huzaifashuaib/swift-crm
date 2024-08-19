"use client";

import { useEffect, useRef, useState } from "react";
import { Chart, ChartConfiguration, ChartOptions } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import { format, parseISO } from "date-fns";

type ChartType = Chart<'bar', number[], string>;

Chart.register(zoomPlugin);

export default function BarGraph() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartType | null>(null);
  const [startDate, setStartDate] = useState<string>("2024-02-01");
  const [endDate, setEndDate] = useState<string>("2024-09-01");

  useEffect(() => {
    const canvas = chartRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const allDataValues = [1000, 4700, 8400, 12100, 15800, 19500, 16500];
        const allDates = ["2024-02-01", "2024-03-01", "2024-04-01", "2024-05-01", "2024-06-01", "2024-08-01", "2024-09-01"];

        const filterDataByDate = () => {
          const start = new Date(startDate).getTime();
          const end = new Date(endDate).getTime();
          
          const filteredLabels: string[] = [];
          const filteredData: number[] = [];

          allDates.forEach((date, index) => {
            const dateValue = new Date(date).getTime();
            if (dateValue >= start && dateValue <= end) {
              filteredLabels.push(date);
              filteredData.push(allDataValues[index]);
            }
          });

          // Ensure there's at least one data point
          if (filteredData.length === 0) {
            filteredLabels.push(allDates[0]);
            filteredData.push(allDataValues[0]);
          }

          return { filteredLabels, filteredData };
        };

        const { filteredLabels, filteredData } = filterDataByDate();
        const maxValue = Math.max(...filteredData);

        const formattedLabels = filteredLabels.map(date => format(parseISO(date), "d MMM"));

        const config: ChartConfiguration<'bar', number[], string> = {
          type: 'bar',
          data: {
            labels: formattedLabels, // Use formatted labels here
            datasets: [
              {
                label: 'Dataset 1',
                data: filteredData,
                backgroundColor: filteredData.map(value => 
                  value === maxValue ? "#62912C" : "#C9F19C"
                ),
                borderColor: filteredData.map(value => 
                  value === maxValue ? "#62912C" : "#C9F19C"
                ),
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  minRotation: 0,
                  maxRotation: 0,
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
                titleAlign:"center",
                bodyAlign:"center",
                callbacks: {
                  label: (tooltipItem) => {
                    const value = tooltipItem.raw as number;
                    const isMaxValue = value === maxValue;
                    return `Value: ${value}${isMaxValue ? ' (Highest)' : ''}`;
                  }
                }
              },
              legend: {
                display: false,
              },
            },
          } as ChartOptions<'bar'>,
        };

        chartInstanceRef.current = new Chart(ctx, config);
      } else {
        console.error("Unable to get canvas context.");
      }
    } else {
      console.error("Canvas element not found.");
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
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
      <div className="relative w-full h-full">
        <canvas ref={chartRef} className="w-full h-full" />
      </div>
    </div>
  );
}
