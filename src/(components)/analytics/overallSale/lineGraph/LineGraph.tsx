"use client";

import { useEffect, useRef, useState } from "react";
import { Chart, ChartConfiguration } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import { format, subDays, eachDayOfInterval, startOfToday } from "date-fns";
import { useAppDispatch } from "@/redux/store";
import { ORDER_FORMDATA } from "@/types/types";
import { getOrders } from "@/redux/slices/orderSlice";

type ChartType = Chart<"line", (number | null)[], string>;

Chart.register(zoomPlugin);

export default function LineGraph() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartType | null>(null);
  const dispatch = useAppDispatch();
  const [orderData, setOrderData] = useState<ORDER_FORMDATA[]>([]);

  const getPast7DaysLabels = () => {
    const labels: string[] = [];
    const today = startOfToday();
    const start = subDays(today, 6); // 7 days including today
    const dates = eachDayOfInterval({ start, end: today });

    dates.forEach((date) => {
      labels.push(format(date, "d MMM"));
    });

    return labels;
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultAction = await dispatch(getOrders());
        if (getOrders.fulfilled.match(resultAction)) {
          const orders = resultAction.payload;
          setOrderData(Array.isArray(orders) ? orders : []);
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const canvas = chartRef.current;
    if (canvas && orderData.length > 0) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        if (chartInstanceRef.current) chartInstanceRef.current.destroy();

        const config: ChartConfiguration<"line", (number | null)[], string> = {
          type: "line",
          data: {
            labels: getPast7DaysLabels(),
            datasets: [
              {
                label: "Current Week Sales",
                data: getPast7DaysSalesData(),
                // data: getPrevious7DaysSalesData(),

                borderColor: "#9A55FF",
                fill: true,
                tension: 0,
              },
              {
                label: "Previous Week Sales",
                // data: getPast7DaysSalesData(),
                data: getPrevious7DaysSalesData(),

                borderColor: "#41A5FF",
                fill: true,
                tension: 0,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              zoom: {
                zoom: {
                  wheel: { enabled: true },
                  pinch: { enabled: true },
                  mode: "x",
                },
              },
            },
            elements: {
              line: {
                borderColor: "transparent", // No shadow effect
                backgroundColor: "rgba(0,0,0,0)", // No fill shadow
              },
              point: {
                backgroundColor: "transparent", // No shadow
              },
            },
          },
        };

        chartInstanceRef.current = new Chart(ctx, config);
      }
    }
  }, [orderData]);

  return <canvas ref={chartRef} />;
}
