import * as React from "react";
import { useState } from "react";
import { Autocomplete } from "@mui/material";
import { Grid, Button } from "@mui/material";

function MaintenanceForm() {
  function handleSubmit() {
    console.log();
  }

  return (
    <Grid container spacing={3} justifyContent={center}>
      {/* maintenance type -> custom option that user can type in instead
        mileage the car was at
        date of service
        city/state
        upload receipt button?
        any extra notes section
     */}
    </Grid>
  );
}

export default MaintenanceForm;
