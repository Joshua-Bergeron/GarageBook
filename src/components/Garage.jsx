import * as React from "react";
import { Box } from "@mui/material";
import VehicleList from "./VehicleList";
import GarageHeader from "./GarageHeader";
import NavigationBar from "./NavigationBar";
import { useRouter } from "next/navigation";

function Garage({ vehicleList }) {
  const router = useRouter();
  return (
    <>
      <NavigationBar />
      <Box sx={{ ml: 5, mr: 5, mt: 2, pb: 2 }}>
        <GarageHeader />
        <VehicleList vehicleList={vehicleList} />
      </Box>
    </>
  );
}

export default Garage;
