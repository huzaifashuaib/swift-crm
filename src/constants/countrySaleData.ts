import { CountryDataType } from "@/types/types";
import { svgIcon } from "./svgIcon";

const { france, countryFlag, canada, brazil } = svgIcon;

export const countryData:CountryDataType[] = [
  {
    countryImage: countryFlag,
    countryName: "United States",
    profit: "20,000",
    percentage: "5.6",
  },
  {
    countryImage: france,
    countryName: "United States",
    profit: "15,000",
    percentage: "5.6",
  },
  {
    countryImage: canada,
    countryName: "Canada",
    profit: "10,234",
    percentage: "1.6",
  },
  {
    countryImage: brazil,
    countryName: "Brazil",
    profit: "10,233",
    percentage: "4.8",
  },
];
