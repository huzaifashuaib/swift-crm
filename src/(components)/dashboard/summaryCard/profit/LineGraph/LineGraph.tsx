"use client"

export default function LineChart() {
 
  return (
    <div className="w-full h-full">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
}
