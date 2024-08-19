"use client";

import { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, ChartOptions } from "chart.js/auto";

type ChartType = Chart<'line', number[], string>;

export default function LineChart({color}:{color:string}) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartType | null>(null);

  useEffect(() => {
    const canvas = chartRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }


        const dataValues = [65,59,80,81,56,10,90,77,88,90,99,22];
        const labels = [
          "January","February","March","April","May","June",
          "July","August","September","October","November","December"
        ];

        const config: ChartConfiguration<'line', number[], string> = {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: '',
                data: dataValues,
                fill: true, 
                backgroundColor: 'transparent', 
                borderColor: color, 
                borderWidth: 2, 
                tension: 0,
                borderDash: [],
                pointBackgroundColor: color,
                pointBorderColor: color,
                pointRadius: 1, 
                pointHoverRadius: 5,
                spanGaps: true 
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
                  display: false, 
                },
              },
              y: {
                beginAtZero: true,
                grid: {
                  display: true, 
                },
                ticks: {
                  display: false, 
                },
              },
            },
            plugins: {
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

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
}
