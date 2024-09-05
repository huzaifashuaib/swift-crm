"use client";

import useBarGraph from "./useBarGraph";

export default function BarGraph() {
  const { chartRef } = useBarGraph();

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full">
        <canvas ref={chartRef} className="w-full h-full" />
      </div>
    </div>
  );
}
