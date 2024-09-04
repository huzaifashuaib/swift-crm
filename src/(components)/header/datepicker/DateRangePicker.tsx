"use client";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { setDateRange } from '@/redux/slices/dateRangeSlice';
import 'react-datepicker/dist/react-datepicker.css';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useAppSelector } from '@/redux/store';

const DateRange: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { startDate, endDate } = useAppSelector((state) => state.date);

  const handleChange = (dates: [Date | null, Date | null] | null) => {
    if (dates) {
      const [start, end] = dates;
      dispatch(setDateRange({
        startDate: start ? start.toISOString().split('T')[0] : null,
        endDate: end ? end.toISOString().split('T')[0] : null,
      }));
      setIsOpen(!isOpen);
    }
  };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  

  const displayDate = () => {
    if (startDate && endDate) {
      return `${format(new Date(startDate), "d MMM")} - ${format(new Date(endDate), "d MMM yyyy")}`;
    } else if (startDate) {
      return format(new Date(startDate), "d MMMM yyyy");
    } else {
      return format(new Date(), "d MMMM yyyy");
    }
  };



  return (
    <div className="datepicker-container relative">
      <button className="bg-btnColor py-[4.98px] px-[9.96px] rounded-[3.32px] text-white"  onClick={handleClick}>
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
          selected={startDate ? new Date(startDate) : undefined}
          onChange={(dates: [Date | null, Date | null] | null) => handleChange(dates)}
          startDate={startDate ? new Date(startDate) : undefined}
          endDate={endDate ? new Date(endDate) : undefined}
          selectsRange
          inline
        />
      </div>)}
    </div>
  );
};

export default DateRange;





