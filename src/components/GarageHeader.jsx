"use client";
import * as React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

function GarageHeader() {
  function handleExportClick() {
    console.log();
  }

  function handleNewVehicleClick() {
    console.log();
  }

  return (
    <Stack direction="row" width="100%" mb={2} alignItems="center">
      <Typography variant="h5" align="left" sx={{ flexGrow: 1 }}>
        MY GARAGE
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{
            mr: 1,
            color: "#3c4463",
          }}
          data-testid="export-button"
          onClick={handleExportClick}
        >
          Export PDF
        </Button>
        <Button
          variant="contained"
          data-testid="new-vehicle-button"
          onClick={handleNewVehicleClick}
          sx={{
            mr: 1,
            backgroundColor: "#3c4463",
          }}
        >
          Add New Vehicle
        </Button>
      </Box>
    </Stack>
  );
}

export default GarageHeader;
