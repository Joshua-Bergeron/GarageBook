import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { carMakes, carModels, carColors } from "@/mocks/vehicleData";
import { Button, Grid } from "@mui/material";

function NewVehicleForm() {
  const years = Array.from(new Array(75), (val, index) =>
    (new Date().getFullYear() - index).toString()
  );

  const [formData, setFormData] = useState({
    make: null,
    model: null,
    year: null,
    mileage: "",
    licensePlate: "",
    color: null,
  });

  const handleChange = (field) => (event, value) => {
    setFormData({
      ...formData,
      [field]: value !== undefined ? value : event.target.value,
    });
  };

  function handleSubmit() {
    console.log();
  }

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          disablePortal
          id="make-combo-box"
          data-testid="make-combo-box"
          options={carMakes}
          isOptionEqualToValue={(option, value) => option.value === value}
          value={formData.make}
          onChange={handleChange("make")}
          renderInput={(params) => (
            <TextField {...params} label="Make" required fullWidth />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          disablePortal
          id="model-combo-box"
          data-testid="model-combo-box"
          options={carModels}
          value={formData.model}
          onChange={handleChange("model")}
          renderInput={(params) => (
            <TextField {...params} label="Model" required fullWidth />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          disablePortal
          id="year-combo-box"
          data-testid="year-combo-box"
          options={years}
          value={formData.year}
          onChange={handleChange("year")}
          renderInput={(params) => (
            <TextField {...params} label="Year" required fullWidth />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Mileage"
          data-testid="mileage-field"
          value={formData.mileage}
          onChange={handleChange("mileage")}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="License Plate"
          data-testid="license-field"
          value={formData.licensePlate}
          onChange={handleChange("licensePlate")}
          required
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          disablePortal
          id="color-combo-box"
          data-testid="color-combo-box"
          options={carColors}
          value={formData.color}
          onChange={handleChange("color")}
          renderInput={(params) => (
            <TextField {...params} label="Color" required fullWidth />
          )}
        />
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Button
          variant="contained"
          sx={{ width: 300 }}
          onClick={handleSubmit}
          data-testid="submit-button"
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default NewVehicleForm;