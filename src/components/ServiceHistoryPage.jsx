import React from "react";
import { Container, Typography, Button, Paper } from "@mui/material";
import ServiceHistory from "./ServiceHistory";
import dayjs from "dayjs";
import ServiceSummary from "./ServiceSummary";

export default function ServiceHistoryPage({ vehicle, serviceHistory }) {
  const handleAddMaintenance = () => {
    console.log();
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom align="left">
        {`${vehicle.year} ${vehicle.make} ${vehicle.model} - Service History`}
      </Typography>
      <ServiceSummary
        lastServiceDate={dayjs(
          serviceHistory[serviceHistory.length - 1].serviceDate
        )}
        lastServiceType={serviceHistory[serviceHistory.length - 1].type}
        totalServices={serviceHistory.length}
        mileage={vehicle.mileage}
        licensePlate={vehicle.licensePlate}
      />
      <Button
        variant="contained"
        sx={{
          marginBottom: 2,
          backgroundColor: "#495057",
          "&:hover": {
            backgroundColor: "#808080",
          },
        }}
        onClick={handleAddMaintenance}
        fullWidth
        data-testid="add-button"
      >
        Add Maintenance
      </Button>
      <Paper elevation={4}>
        <ServiceHistory serviceHistory={serviceHistory} />
      </Paper>
    </Container>
  );
}
