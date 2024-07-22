import * as React from "react";
import VehicleSummaryItem from "./VehicleSummaryItem";
import { List, ListItem, Typography, Stack, Box } from "@mui/material";

function VehicleList({ vehicleList }) {
  return (
    <Stack spacing={2} sx={{ ml: 5, mr: 5, mt: 5 }}>
      {vehicleList && vehicleList.length > 0 ? (
        vehicleList.map((vehicle, index) => {
          return (
            <VehicleSummaryItem
              key={index}
              make={vehicle.make}
              model={vehicle.model}
              year={vehicle.year}
              mileage={vehicle.mileage}
              color={vehicle.color}
              lastServiceDate={vehicle.lastServiceDate}
              lastServiceType={vehicle.lastServiceType}
            />
          );
        })
      ) : (
        <Box>
          <Typography
            color="text.secondary"
            align="center"
            sx={{ width: "100%" }}
          >
            No Vehicles To Display
          </Typography>
        </Box>
      )}
    </Stack>
  );
}

export default VehicleList;
