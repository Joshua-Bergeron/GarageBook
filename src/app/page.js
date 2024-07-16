import VehicleSummaryItem from "@/components/VehicleSummaryItem";
import * as React from "react";

const vehicle = {
  make: "Toyota",
  model: "Corolla",
  year: "2003",
  mileage: 178234,
  color: "White",
  value: "3000",
  lastServiceDate: "05/16/2024",
  lastServiceType: "Oil Change",
};

export default function Home() {
  return <VehicleSummaryItem {...vehicle} />;
}
