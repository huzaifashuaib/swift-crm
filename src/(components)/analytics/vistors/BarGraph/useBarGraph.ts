import { useEffect, useRef, useState } from "react";
import { Chart, ChartConfiguration, ChartOptions } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";
import { format, parse, subMonths } from "date-fns";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { ORDER_FORMDATA } from "@/types/types";
import { getOrders } from "@/redux/slices/orderSlice";

type ChartType = Chart<'bar', number[], string>;
Chart.register(zoomPlugin);

const useBarGraph = () => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<ChartType | null>(null);
    const { startDate, endDate } = useAppSelector((state) => state.date);
    const dispatch = useAppDispatch();
    const [orderData, setOrderData] = useState<ORDER_FORMDATA[]>([]);
    const [sales, setSales] = useState<number[]>([]);
  
    const getMonthLabels = () => {
      const labels = [];
      const currentMonth = new Date().getMonth();
      for (let i = 0; i <= currentMonth; i++) {
        labels.push(format(subMonths(new Date(), i), "MMM yyyy")); // Format to show month and year
      }
      return labels.reverse();
    };
  
    const getMonthlySales = () => {
      const month = new Date().getMonth();
      if (!Array.isArray(orderData)) {
        return [];
      }
  
      const totalBillProfitDateArray = orderData.map((order) => ({
        totalBill: order.totalBill,
        date: order.date,
      }));
  
      const sales: number[] = [];
  
      for (let i = 0; i <= month; i++) {
        const currentMonth = format(subMonths(new Date(), i), "MMM yyyy");
        const totalSalesForMonth = totalBillProfitDateArray
          .filter((data) => {
            if (!data.date) {
              return false;
            }
            const dataMonth = format(new Date(data.date), "MMM yyyy");
            return currentMonth === dataMonth;
          })
          .reduce((acc, curr) => acc + (curr.totalBill || 0), 0);
  
        sales.push(totalSalesForMonth);
      }
  
      return sales.reverse();
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const resultAction = await dispatch(getOrders());
          if (getOrders.fulfilled.match(resultAction)) {
            const orders = resultAction.payload;
            if (Array.isArray(orders)) {
              setOrderData(orders);
            } else {
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
  
          const allDates = getMonthLabels();
          const allDataValues = sales; 
  
          const filterDataByDate = () => {
            if (!startDate) {
              return { filteredLabels: allDates, filteredData: allDataValues }; 
            }
  
            const startMonth = format(new Date(startDate), "MMM yyyy");
            const endMonth = endDate ? format(new Date(endDate), "MMM yyyy") : allDates[allDates.length - 1]; 
  
            const filtered = allDates.reduce(
              (acc, date, index) => {
                const currentDate = parse(date, "MMM yyyy", new Date());
                const isWithinRange = currentDate >= parse(startMonth, "MMM yyyy", new Date()) &&
                                      currentDate <= parse(endMonth, "MMM yyyy", new Date());
                if (isWithinRange) {
                  acc.filteredLabels.push(date);
                  acc.filteredData.push(allDataValues[index]);
                }
                return acc;
              },
              { filteredLabels: [] as string[], filteredData: [] as number[] }
            );
  
            if (filtered.filteredData.length === 0) {
              filtered.filteredLabels.push(allDates[0]);
              filtered.filteredData.push(allDataValues[0]);
            }
  
            return filtered;
          };
  
          const { filteredLabels, filteredData } = filterDataByDate();
  
          const maxValue = Math.max(...filteredData);
  
          const config: ChartConfiguration<'bar', number[], string> = {
            type: 'bar',
            data: {
              labels: filteredLabels,
              datasets: [
                {
                  label: 'Sales Data',
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
                  },
                },
                y: {
                  beginAtZero: true,
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
                    stepSize: 2000,
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
                  titleAlign: "center",
                  bodyAlign: "center",
                  callbacks: {
                    label: (tooltipItem) => {
                      const value = tooltipItem.raw as number;
                      const isMaxValue = value === maxValue;
                      return `Value: ${value}${isMaxValue ? ' (Highest)' : ''}`;
                    },
                  },
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
    }, [startDate, endDate, sales]);
  return {
 chartRef
  }
}

export default useBarGraph