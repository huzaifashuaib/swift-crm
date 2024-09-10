"use client"

import useLineGraph from "./useLineGraph";

export default function LineGraph() {
const {chartRef}=useLineGraph()

  return <canvas ref={chartRef} />;
}
