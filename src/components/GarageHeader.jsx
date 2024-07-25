import * as React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

// add on button click handlers

function GarageHeader() {
  function handleExportClick() {
    console.log();
  }

  function handleNewVehicleClick() {
    console.log();
  }

  return (
    <Stack direction="row" width="100%" mb={2} alignItems="center">
      <Typography variant="h4" align="left" sx={{ flexGrow: 1 }}>
        My Garage
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
          color="primary"
          sx={{ mr: 1 }}
          data-testid="export-button"
          onClick={handleExportClick}
        >
          Export PDF
        </Button>
        <Button
          variant="contained"
          data-testid="new-vehicle-button"
          onClick={handleNewVehicleClick}
        >
          Add New Vehicle
        </Button>
      </Box>
    </Stack>
  );
}

export default GarageHeader;
