import React from "react";
import { Typography, Card, CardContent, Divider, Box } from "@mui/material";
import milesFormatter from "@/utils/milesFormatter";
import dayjs from "dayjs";

export default function ServiceSummary({
  lastServiceDate,
  lastServiceType,
  totalServices,
  mileage,
  licensePlate,
}) {
  return (
    <Card elevation={2} sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="body1" gutterBottom sx={{ fontWeight: "bold" }}>
          Service Summary
        </Typography>
        <Divider sx={{ marginBottom: 1 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2">{`Last Service Date: ${dayjs(lastServiceDate).format("MM/DD/YYYY")}`}</Typography>
          <Typography variant="body2">{`Last Service Type: ${lastServiceType}`}</Typography>
          <Typography variant="body2">{`Total Services: ${totalServices}`}</Typography>
          <Typography variant="body2">{`Current Mileage: ${milesFormatter(mileage)}`}</Typography>
          <Typography variant="body2">{`License Plate: ${licensePlate}`}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
