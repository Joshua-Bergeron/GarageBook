"use client";
import * as React from "react";
import {
  Typography,
  Avatar,
  IconButton,
  Button,
  Grid,
  Paper,
  Box,
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
    <Paper
      sx={{
        p: 2,
        backgroundColor: "#E8E8E8",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        gap: 3,
      }}
    >
      <Avatar sx={{ width: 60, height: 60, fontSize: "1.5rem" }}>
        {make.charAt(0)}
      </Avatar>

      <VehicleDetails make={make} model={model} year={year} color={color} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flex: 2,
          gap: 1,
        }}
      >
        <Typography variant="body2" data-testid="mileage">
          Mileage: {milesFormatter(mileage)} miles
        </Typography>
        {lastServiceDate && lastServiceType && (
          <Typography variant="body2" data-testid="last-service">
            Last Service: {lastServiceDate} - {lastServiceType}
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          flex: 1,
        }}
      >
        <Button
          variant="contained"
          fullWidth
          data-testid="maintenance-button"
          onClick={handleAddMaintenanceClick}
        >
          Add Maintenance
        </Button>

        <IconButton
          aria-label="settings"
          data-testid="settings-button"
          onClick={handleSettingsClick}
        >
          <SettingsIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default VehicleSummaryItem;
