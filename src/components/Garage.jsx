import * as React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Stack, Button } from "@mui/material";
import VehicleList from "./VehicleList";
import GarageHeader from "./GarageHeader";

function Garage({ vehicleList }) {
  return (
    <Box>
      <GarageHeader />
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          width: "100%",
          padding: 2,
          backgroundColor: "#ffffff",
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px", // Adjust this value to make the flexbox wider
          }}
        >
          <VehicleList vehicleList={vehicleList} />
        </Box>
      </Box>
    </Box>
  );
}

export default Garage;
