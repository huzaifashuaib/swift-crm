"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Example: React.FC = () => {
  const [dateRange, setDateRange] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, endDate] = dateRange;

  const handleChange = (dates: any) => {
    if (dates) {
      setDateRange(dates);
      setIsOpen(false);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const displayDate = () => {
    const date = new Date();
    const formattedDate = format(date, "d MMMM, yyyy");

    if (startDate && endDate) {
      return `${format(startDate, "d")} - ${format(endDate, "d")} ${format(
        endDate,
        "MMMM,"
      )} ${format(endDate, "YYY")}`;
    } else if (startDate) {
      return `${format(startDate, "d MMMM yyyy")}`;
    } else {
      return formattedDate;
    }
  };

  return (
    <>
      <div className="datepicker-container relative">
        <button
          className="bg-btnColor py-[4.98px] px-[9.96px] rounded-[3.32px] text-white"
          onClick={handleClick}
        >
          <div className="flex items-center gap-[3.32px]">
          <div>{displayDate()}</div>
          <div>
            <IoMdArrowDropdown />
          </div>
          </div>
        </button>
        {isOpen && (
          <div className="datepicker-wrapper absolute right-0 top-[40px] z-30">
            <DatePicker
              selected={startDate}
              onChange={(dates: [Date | null, Date | null] | null) =>
                handleChange(dates)
              }
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Example;
