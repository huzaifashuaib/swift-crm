"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartConfiguration,
} from "chart.js";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const HorizontalBarGraph: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<"bar"> | null>(null);
  const [startDate, setStartDate] = useState<string>("2024-01-01");
  const [endDate, setEndDate] = useState<string>("2024-12-31");

  const allCountries = [
    "United States",
    "France",
    "Japan",
    "Canada",
    "Brazil",
    "Australia",
  ];
  const allDates = [
    "2024-01-01",
    "2024-02-01",
    "2024-03-01",
    "2024-04-01",
    "2024-05-01",
    "2024-06-01",
  ];
  const allDataValues = [1500, 200, 300, 400, 500, 1000];

  useEffect(() => {
    const canvas = chartRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        // Filter data by date range
        const filterDataByDate = () => {
          const start = new Date(startDate).getTime();
          const end = new Date(endDate).getTime();

          const filteredLabels: string[] = [];
          const filteredData: number[] = [];

          allDates.forEach((date, index) => {
            const dateValue = new Date(date).getTime();
            if (dateValue >= start && dateValue <= end) {
              filteredLabels.push(allCountries[index]);
              filteredData.push(allDataValues[index]);
            }
          });

          // Ensure there's at least one data point
          if (filteredData.length === 0) {
            filteredLabels.push(allCountries[0]);
            filteredData.push(allDataValues[0]);
          }

          return { filteredLabels, filteredData };
        };

        const { filteredLabels, filteredData } = filterDataByDate();
        const maxValue = Math.max(...filteredData);

        const backgroundColors = filteredData.map((value) =>
          value === maxValue ? "#41A5FF" : "#BADAFF"
        );

        const data = {
          labels: filteredLabels,
          datasets: [
            {
              label: "",
              data: filteredData,
              backgroundColor: backgroundColors,
              borderWidth: 1,
            },
          ],
        };

        // Chart configuration
        const config: ChartConfiguration<"bar"> = {
          type: "bar",
          data: data,
          options: {
            indexAxis: "y",
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
                grid: {
                  display: false,
                },
                ticks: {
                  maxTicksLimit: 15,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
              },
            },
          },
        };

        // Create a new chart instance
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
      <div className="relative w-full h-full">
        <canvas ref={chartRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default HorizontalBarGraph;
