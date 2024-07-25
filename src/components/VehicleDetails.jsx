import * as React from "react";
import { Grid, Typography, Box } from "@mui/material";

function VehicleDetails({ make, model, year, color }) {
  return (
    <Box
      sx={{
        flexDirection: "column",
        flex: 0.5,
      }}
    >
      <Typography variant="h6" data-testid="make-model">
        {make} {model}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        data-testid="year-color"
      >
        {year} - {color}
      </Typography>
    </Box>
  );
}

export default VehicleDetails;
