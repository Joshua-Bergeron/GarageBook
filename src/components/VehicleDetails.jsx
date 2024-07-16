import * as React from "react";
import { Grid, Typography } from "@mui/material";

function VehicleDetails({ make, model, year, color }) {
  return (
    <Grid item xs={6} sm={4} md={2}>
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
    </Grid>
  );
}

export default VehicleDetails;
