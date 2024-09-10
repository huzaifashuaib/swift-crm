"use client";

import React, { useEffect, useRef } from "react";
import {
  Chart,
  ChartConfiguration,
  ArcElement,
  Tooltip,
  Legend,
  Plugin,
} from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutGraph: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    const canvas = chartRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const centerTextPlugin: Plugin<"doughnut"> = {
          id: "centerTextPlugin",
          beforeDraw(chart) {
            const { ctx, width, height } = chart;
            const text = "100%";
            const fontSize = 24;
            const fontStyle = "bold";
            const fontFamily = "Arial";

            ctx.restore();
            ctx.font = `${fontStyle} ${fontSize}px ${fontFamily}`;
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";

            const textX = width / 2;
            const textY = height / 2;
            ctx.fillStyle = "#000";
            ctx.fillText(text, textX, textY);

            ctx.save();
          },
        };

        const data = {
          labels: ["Social Media", "Direct Search", "Others"],
          datasets: [
            {
              label: "",
              data: [68, 54, 45],
              backgroundColor: ["#41A5FF", "#62912C", "#ED4D5C"],
              borderWidth: 0,
            },
          ],
        };

        const config: ChartConfiguration<"doughnut"> = {
          type: "doughnut",
          data: data,
          options: {
            rotation: 290,
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
              },
            },
            cutout: "50%",
          },
          plugins: [centerTextPlugin],
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
      <canvas
        ref={chartRef}
        className="w-[200.26px] h-[200.26px] md:w-[241.27px] md:h-[241.27px]"
      />
    </div>
  );
};

export default DoughnutGraph;
