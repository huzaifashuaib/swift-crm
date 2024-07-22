import React from "react";

import { CustomCircularProgressBarProps } from "@/types/types";

const CustomCircularProgressBar: React.FC<CustomCircularProgressBarProps> = ({
  percentage,
  size,
  strokeWidth,
  color,
  trackColor,
  antiClockwise = false,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = antiClockwise
    ? (percentage / 100) * circumference
    : circumference - (percentage / 100) * circumference;

  return (
    <div className="w-[144px] flex justify-center">
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="square"
          transform={`rotate(-170 ${size / 2} ${size / 2})`} // Rotate the circle
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="24px"
          fill={color}
          fontWeight="700"
        >
          {`${percentage}%`}
        </text>
      </svg>
    </div>
  );
};

export default CustomCircularProgressBar;
