import VehicleList from "@/components/VehicleList";
import * as React from "react";

const vehicleList = [
  {
    make: "Toyota",
    model: "Corolla",
    year: "2003",
    mileage: 178234,
    color: "White",
    lastServiceDate: "05/16/2024",
    lastServiceType: "Oil Change",
  },
  {
    make: "BMW",
    model: "Z4",
    year: "2008",
    mileage: 84772,
    color: "Black",
  },
  {
    make: "Honda",
    model: "Civic Type R",
    year: "2023",
    mileage: 2102,
    color: "Blue",
    lastServiceDate: "07/22/2024",
    lastServiceType: "New Air Filter",
  },
];

export default function Home() {
  return <VehicleList vehicleList={vehicleList} />;
}
