// import React from "react";

// import { CustomCircularProgressBarProps } from "@/types/types";

// const CustomCircularProgressBar: React.FC<CustomCircularProgressBarProps> = ({
//   percentage,
//   size,
//   strokeWidth,
//   color,
//   trackColor,
//   antiClockwise = false,
// }) => {
//   const radius = (size - strokeWidth) / 2;
//   const circumference = 2 * Math.PI * radius;
//   const offset = antiClockwise
//     ? (percentage / 100) * circumference
//     : circumference - (percentage / 100) * circumference;

//   return (
//     <div className="w-[144px] flex justify-center">
//       <svg width={size} height={size}>
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           fill="transparent"
//           stroke={trackColor}
//           strokeWidth={strokeWidth}
//         />
//         <circle
//           cx={size / 2}
//           cy={size / 2}
//           r={radius}
//           fill="transparent"
//           stroke={color}
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={offset}
//           strokeLinecap="square"
//           transform={`rotate(-170 ${size / 2} ${size / 2})`} // Rotate the circle
//           style={{ transition: "stroke-dashoffset 0.5s ease" }}
//         />
//         <text
//           x="50%"
//           y="50%"
//           textAnchor="middle"
//           dy=".3em"
//           fontSize="24px"
//           fill={color}
//           fontWeight="700"
//         >
//           {`${percentage}%`}
//         </text>
//       </svg>
//     </div>
//   );
// };

// export default CustomCircularProgressBar;


import React, { useState, useEffect } from "react";
import { CustomCircularProgressBarProps } from "@/types/types";

const CustomCircularProgressBar: React.FC<CustomCircularProgressBarProps> = ({
  percentage,
  strokeWidth,
  color,
  trackColor,
  antiClockwise = false,
}) => {
  const [size, setSize] = useState(130.56);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSize(101.7);
      } else if (width >= 768) {
        setSize(117.2); 
      } else {
        setSize(130.56);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = antiClockwise
    ? (percentage / 100) * circumference
    : circumference - (percentage / 100) * circumference;

  return (
    <div className="flex justify-center py-[9px] pr-[13px] md:py-0 md:pr-0">
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
          transform={`rotate(-170 ${size / 2} ${size / 2})`} 
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
