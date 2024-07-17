import * as React from "react";
import VehicleSummaryItem from "./VehicleSummaryItem";
import { List, ListItem, Typography } from "@mui/material";

function VehicleList({ vehicleList }) {
  return (
    <List>
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
        <ListItem>
          <Typography
            color="text.secondary"
            align="center"
            sx={{ width: "100%" }}
          >
            No Vehicles To Display
          </Typography>
        </ListItem>
      )}
    </List>
  );
}

export default VehicleList;
