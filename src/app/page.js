import VehicleList from "@/components/VehicleList";
import * as React from "react";
import { vehicleList } from "@/mocks/vehicleMocks";

export default function Home() {
  return <VehicleList vehicleList={vehicleList} />;
}
