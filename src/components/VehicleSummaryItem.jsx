"use client";
import * as React from "react";
import {
  ListItem,
  Typography,
  Avatar,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import milesFormatter from "@/utils/milesFormatter";
import VehicleDetails from "./VehicleDetails";

const VehicleSummaryItem = ({
  make = "Unknown",
  model = "Unknown",
  year = "Unknown",
  mileage = 0,
  color = "Unknown",
  lastServiceDate,
  lastServiceType,
}) => {
  function handleAddMaintenanceClick() {
    console.log();
  }

  function handleSettingsClick() {
    console.log();
  }

  return (
    <ListItem
      sx={{
        width: "100%",
        borderBottom: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <Grid container spacing={2} alignItems="center" direction="row">
        <Grid item>
          <Avatar sx={{ width: 60, height: 60, fontSize: "1.5rem" }}>
            {make.charAt(0)}
          </Avatar>
        </Grid>

        <VehicleDetails make={make} model={model} year={year} color={color} />

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" data-testid="mileage">
            Mileage: {milesFormatter(mileage)} miles
          </Typography>
          {lastServiceDate && lastServiceType && (
            <Typography variant="body2" data-testid="last-service">
              Last Service: {lastServiceDate} - {lastServiceType}
            </Typography>
          )}
        </Grid>

        <Grid item xs={10} sm={11} md={3}>
          <Button
            variant="contained"
            fullWidth
            data-testid="maintenance-button"
            onClick={handleAddMaintenanceClick}
          >
            Add Maintenance
          </Button>
        </Grid>

        <Grid item xs={1} sm={1} md={1}>
          <IconButton
            aria-label="delete"
            data-testid="settings-button"
            onClick={handleSettingsClick}
          >
            <SettingsIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default VehicleSummaryItem;
