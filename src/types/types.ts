// DashBoard

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

// customer
export type CustomerCardType = {
  svgIcon: string;
  text: string;
  total: string;
  color?: string;
  textClr?: string;
  border?: boolean;
};

// orders

export type OrderSalesCardType = {
  icon: string;
  text: string;
  statics: number | string;
  subtext: string; 
};
