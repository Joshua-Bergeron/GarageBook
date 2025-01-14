import * as React from "react";
import { Box, Container } from "@mui/material";
import VehicleList from "./VehicleList";
import GarageHeader from "./GarageHeader";
import NavigationBar from "./NavigationBar";

function Garage({ vehicleList }) {
  return (
    <>
      <NavigationBar />
      <Container sx={{ paddingTop: 4 }}>
        <GarageHeader />
        <VehicleList vehicleList={vehicleList} />
      </Container>
    </>
  );
}

export default Garage;
