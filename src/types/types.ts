// DashBoard

import { ChangeEvent } from "react";



export type CardType = {
  cardImg: string;
  title: string;
  subtitle: string;
  price: number;
};

export type CustomCircularProgressBarProps = {
  percentage: number;
  size: number;
  strokeWidth: number;
  color: string;
  trackColor: string;
  antiClockwise?: boolean;
};

// customer Page
export type CustomerCardType = {
  svgIcon: string;
  text: string;
  total: string;
  color?: string;
  textClr?: string;
  border?: boolean;
};

// orders Page

export type OrderSalesCardType = {
  icon: string;
  text: string;
  statics: number | string;
  subtext: string; 
};


// Input Feild Type


export type InputProps = {
  value?: string;
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disable?: boolean;
  type?: string;
  label: string;
  placeholder:string;
};
