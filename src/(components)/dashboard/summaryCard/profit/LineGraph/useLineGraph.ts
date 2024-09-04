"use client";

import { useEffect, useRef, useState } from "react";
import { Chart, ChartConfiguration, ChartOptions } from "chart.js/auto";
import { subMonths, format } from "date-fns";
import { useAppSelector } from "@/redux/store";
import { ORDER_FORMDATA } from "@/types/types";

type ChartType = Chart<"line", number[], string>;
const useLineGraph = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<ChartType | null>(null);
    const { order } = useAppSelector((state) => state.order);
    const [orderData, setOrderData] = useState<ORDER_FORMDATA[]>([]);
  
    const month = new Date().getMonth();
  
    const getMonthLabels = () => {
      const labels = [];
      for (let i = 0; i <= month; i++) {
        labels.push(format(subMonths(new Date(), i), "MMMM"));
      }
      return labels.reverse();
    };
  
    const getMonthlyProfit = () => {
      if (!Array.isArray(orderData)) {
        return [];
      }
  
      const totalBillProfitDateArray = orderData.map((order) => ({
        profit: order.totalProfit || 0,
        date: order.date,
      }));
  
      const profit: number[] = [];
  
      for (let i = 0; i <= month; i++) {
        const monthLabel = format(subMonths(new Date(), i), "MMM");
        const totalProfitForMonth = totalBillProfitDateArray
          .filter((data) => {
            if (!data.date) return false;
            const dataMonth = format(new Date(data.date), "MMM");
            return monthLabel === dataMonth;
          })
          .reduce((acc, curr) => acc + curr.profit, 0);
  
        profit.push(totalProfitForMonth);
      }
  
      return profit.reverse();
    };
  
    useEffect(() => {
      if (Array.isArray(order)) {
        setOrderData(order);
      } else {
        setOrderData([]);
      }
    }, [order]);
  
    useEffect(() => {
      const canvas = chartRef.current;
  
      if (canvas) {
        const ctx = canvas.getContext("2d");
  
        if (ctx) {
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }
  
          const config: ChartConfiguration<"line", number[], string> = {
            type: "line",
            data: {
              labels: getMonthLabels(),
              datasets: [
                {
                  label: "",
                  data: getMonthlyProfit(),
                  fill: true,
                  backgroundColor: "transparent",
                  borderColor: color,
                  borderWidth: 2,
                  tension: 0,
                  borderDash: [],
                  pointBackgroundColor: color,
                  pointBorderColor: color,
                  pointRadius: 1,
                  pointHoverRadius: 5,
                  spanGaps: true,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
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
            } as ChartOptions<"line">,
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
    }, [orderData, color]);
  return {

  }
}

export default useLineGraph