"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  ChartConfiguration,
  ChartOptions,
} from "chart.js/auto";

type ChartType = Chart<"bar", number[], string>;

export default function BarChart() {
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

        const dataValues = [2900, 3800, 4900, 5030, 6020, 2770, 2100, 2000];
        const config: ChartConfiguration<"bar", number[], string> = {
          type: "bar",
          data: {
            labels: ["Jul","Jun","May"],
            datasets: [
              {
                label: "",
                data: dataValues,
                backgroundColor: [
                  "rgba(154, 85, 255, 1)",
                  "rgba(65, 165, 255, 1)",
                  "rgba(237, 77, 92, 1)",
                ],
                borderColor: "transparent",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y",
            scales: {
              x: {
                beginAtZero: false,
                min: Math.min(...dataValues),
                ticks: {
                  callback: (value: number) => {
                    if (value >= 1000) {
                      return `${(value / 1000).toFixed(0)}k`;
                    }
                    return value.toString(); 
                  },
                },
              },
            },
            plugins: {
              tooltip: {
                enabled: false,
              },
              legend: {
                display: false,
              },
            },
          } as ChartOptions<"bar">,
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
