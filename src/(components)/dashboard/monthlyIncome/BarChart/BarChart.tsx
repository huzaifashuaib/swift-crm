"use client";

import useBarChart from "./useBarChart";

export default function BarChart() {
  const {chartRef}=useBarChart()
  
  return (
    <div className="w-full h-full">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
}
