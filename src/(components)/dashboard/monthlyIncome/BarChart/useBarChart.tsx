"use client"
import { useEffect, useRef, useState } from "react";
import { Chart, ChartConfiguration, ChartOptions } from "chart.js/auto";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { format, subMonths } from "date-fns";
import { getOrders } from "@/redux/slices/orderSlice";
import { ORDER_FORMDATA } from "@/types/types";

type ChartType = Chart<"bar", number[], string>;
const useBarChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartType | null>(null);
  const dispatch = useAppDispatch();
  const [orderData, setOrderData] = useState<ORDER_FORMDATA[]>([]);
  const [sales, setSales] = useState<number[]>([]);

  const getMonthLabels = () => {
    const labels = [];
    for (let i = 0; i < 3; i++) {
      labels.push(format(subMonths(new Date(), i), "MMM"));
    }
    return labels;
  };

  const getMonthlySales = () => {
    if (!Array.isArray(orderData)) {
      console.error("orderData is not an array:", orderData);
      return [];
    }

    const totalBillProfitDateArray = orderData && orderData?.map((order) => ({
      totalBill: order.totalBill,
      date: order.date,
    }));
    
    const sales: number[] = [];
    
    for (let i = 0; i < 3; i++) {
      const month = format(subMonths(new Date(), i), "MMM");
      const totalSalesForMonth = totalBillProfitDateArray
        .filter((data) => {
          if (!data.date) {
            return false;
          }
          const dataMonth = format(new Date(data.date), "MMM");
          return month === dataMonth;
        })
        .reduce((acc, curr) => acc + (curr.totalBill || 0), 0);

      sales.push(totalSalesForMonth);
    }

    return sales;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultAction = await dispatch(getOrders());
        if (getOrders.fulfilled.match(resultAction)) {
          const orders = resultAction.payload;
          console.log(orders)
          if (Array.isArray(orders)) {
            setOrderData(orders);
          } else {
            console.error("Fetched orders data is not an array:", orders);
            setOrderData([]);
          }
        } else if (getOrders.rejected.match(resultAction)) {
          const errorMessage = resultAction.payload as string;
          console.error("Failed to fetch orders:", errorMessage);
        }
      } catch (error) {
        console.error("Failed to fetch Orders:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const sales = getMonthlySales();
    setSales(sales);
  }, [orderData]);

  useEffect(() => {
    const canvas = chartRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        const config: ChartConfiguration<"bar", number[], string> = {
          type: "bar",
          data: {
            labels: getMonthLabels(),
            datasets: [
              {
                label: "Sales",
                data: sales,
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
                beginAtZero: true,
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
                enabled: true,
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
  }, [sales]);

  return {
    chartRef,
  };
};

export default useBarChart;
