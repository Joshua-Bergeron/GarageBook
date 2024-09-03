import React from "react";
import { Typography, Card, CardContent, Divider, Box } from "@mui/material";
import milesFormatter from "@/utils/milesFormatter";
import dayjs from "dayjs";

export default function VehicleInformation({
  make,
  model,
  year,
  mileage,
  licensePlate,
  vin,
}) {
  return (
    <Card elevation={2} sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="body1" gutterBottom sx={{ fontWeight: "bold" }}>
          Vehicle Information
        </Typography>
        <Divider sx={{ marginBottom: 1 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2">{`Current Mileage: ${milesFormatter(mileage)}`}</Typography>
          <Typography variant="body2">{`License Plate: ${licensePlate}`}</Typography>
          <Typography variant="body2">{`VIN: ${vin}`}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
