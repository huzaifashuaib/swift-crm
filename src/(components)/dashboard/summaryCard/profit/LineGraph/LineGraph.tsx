"use client"

import useLineGraph from "./useLineGraph";

export default function LineChart() {
 const {chartRef}=useLineGraph()
  return (
    <div className="w-full  h-full">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
}
