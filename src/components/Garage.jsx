"use client";
import * as React from "react";
import { Box, Container, Modal, Typography, Paper } from "@mui/material";
import VehicleList from "./VehicleList";
import GarageHeader from "./GarageHeader";
import NavigationBar from "./NavigationBar";
import NewVehicleForm from "./NewVehicleForm";

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
      <Modal
        open={showNewVehicleForm}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        BackdropProps={{
          onClick: (event) => event.stopPropagation(),
        }}
      >
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "md",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Add New Vehicle
          </Typography>
          <Box id="modal-description" sx={{ mt: 2 }}>
            <NewVehicleForm onCancel={handleClose} />
          </Box>
        </Paper>
      </Modal>
    </>
  );
}

export default Garage;
