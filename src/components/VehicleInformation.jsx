import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
  Grid,
} from "@mui/material";
import milesFormatter from "@/utils/milesFormatter";

export default function VehicleInformation({ mileage, licensePlate, vin }) {
  return (
    <Card elevation={2} sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="body1" gutterBottom sx={{ fontWeight: "bold" }}>
          Vehicle Information
        </Typography>
        <Divider sx={{ marginBottom: 1 }} />
        <Box display="flex" justifyContent="flex-start">
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item xs>
              <Typography variant="body2">{`Current Mileage: ${milesFormatter(mileage)}`}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2">{`License Plate: ${licensePlate}`}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2">{`VIN: ${vin}`}</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
