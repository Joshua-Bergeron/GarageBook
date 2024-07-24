import * as React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Button } from "@mui/material";
import VehicleList from "./VehicleList";
import GarageHeader from "./GarageHeader";

function Garage({ vehicleList }) {
  return (
    <Box sx={{ ml: 5, mr: 5, mt: 2, pb: 2 }}>
      <GarageHeader />
      <VehicleList vehicleList={vehicleList} />
    </Box>
  );
}

export default Garage;
