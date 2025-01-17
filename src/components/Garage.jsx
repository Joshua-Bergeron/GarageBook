"use client";
import * as React from "react";
import { Box, Container } from "@mui/material";
import VehicleList from "./VehicleList";
import GarageHeader from "./GarageHeader";
import NavigationBar from "./NavigationBar";
import NewVehicleForm from "./NewVehicleForm";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function Garage({ vehicleList }) {
  const [showNewVehicleForm, setShowNewVehicleForm] = React.useState(false);

  const handleNewVehicleClick = () => {
    setShowNewVehicleForm(true);
  };

  const handleClose = () => {
    setShowNewVehicleForm(false);
  };

  return (
    <>
      <NavigationBar />
      <Container sx={{ paddingTop: 4 }}>
        <GarageHeader onNewVehicleClick={handleNewVehicleClick} />
        <VehicleList vehicleList={vehicleList} />
      </Container>
      <Dialog
        open={showNewVehicleForm}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Add New Vehicle</DialogTitle>
        <DialogContent>
          <NewVehicleForm onCancel={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Garage;
