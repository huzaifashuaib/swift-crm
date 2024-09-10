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

// Input Feild Type

export type InputProps = {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disable?: boolean;
  type?: string;
  label: string;
  placeholder: string;
  name: string;
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
  purchasePrice?: number;
  imgUrl?: string;
  publicId?: string;
};

export type PRODUCT = FORMDATA;

export type PRODUCT_INITALSTATE = {
  product: FORMDATA[];
  cart: FORMDATA[];
  loading: boolean;
  error: string | null;
};

export type ORDER_FORMDATA = {
  id?: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phoneNumber: string;
  postCode: string;
  products?: FORMDATA[];
  totalBill?: number;
  status?: string;
  date?: string;
  totalProfit?: number;
};

export type ORDER_INITALSTATE = {
  order: [] | ORDER_FORMDATA[];
  loading: boolean;
  error: string | null;
};

// Customer Page

export type CustomerStatus = {
  customerUrl: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  customerStatus: string;
};

export type CustomerCardType = {
  svgIcon: string;
  text: string;
  total: string;
  color?: string;
  bgClr?: string;
  border?: boolean;
};

// Orders page

export type OrderSalesCardType = {
  icon: string;
  text: string;
  statics: number | string;
  subtext: string;
};

export type ProductDataType = {
  productImage: string;
  productName: string;
  productSub: string;
  pcs: string;
  date: string;
  status: string;
  price: string;
};

export type CountryDataType = {
  countryImage: string;
  countryName: string;
  profit: string;
  percentage: string;
};

//  analystic page

export type AnalysticDataType = {
  customerImage: string;
  customerName: string;
  customerDetail: string;
  customerPrice: string;
};

// document page

export type documentDataType = {
  name: string;
  type: string;
  author: string;
  version: string;
  status: string;
  uploadedDate: string;
  pdfimg: string;
  CustomerIcon: string;
};

// signUp

export type UserSignupDataType = {
  name: string;
  email: string;
  password: string;
};

// update Profile

export type UpdateProfileDataType = {
  userName: string;
  email: string;
  imgUrl: string;
  publicId: string;
};


// update Password
export type UpdatePasswordDataType={
  password:string,
  newPassword:string
}