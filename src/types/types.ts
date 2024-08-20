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
  placeholder: string;
};

export type AUTH_USER = {
  name: string;
  email: string;
  password: string;
};

export type INITALSTATE = {
  user: AUTH_USER | USER | null;
  loading: boolean;
  error: string | null;
};

export type RESTPASS = {
  newPassword: string;
  token: string;
};
export type FORGETPASS = {
  email: string;
};

export type USER = {
  userName: string;
  email: string;
  imgUrl: string;
  publicId: string;
};

export type UPDATE_USER_PASS = {
  password: string;
  newPassword: string;
};

export type FORMDATA = {
  id?: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
};

export type PRODUCT=FORMDATA

export type PRODUCT_INITALSTATE = {
 product:[],
 loading: boolean;
 error: string | null;
};
