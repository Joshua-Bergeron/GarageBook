import * as React from "react";
import { useState, useMemo } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { carMakes, carModels, carColors } from "@/mocks/vehicleData";
import { Button, Grid } from "@mui/material";
import { calculateYears } from "@/utils/calculateYears";

function NewVehicleForm() {
  const years = useMemo(() => calculateYears(), []);

  const [vehicleData, setVehicleData] = useState({
    make: null,
    model: null,
    year: null,
    mileage: "",
    licensePlate: "",
    color: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = (data) => {
    const errors = {};
    if (!data.make) errors.make = "Make is required";
    if (!data.model) errors.model = "Model is required";
    if (!data.year) errors.year = "Year is required";
    if (!data.mileage || isNaN(data.mileage))
      errors.mileage = "Mileage is required. No commas.";
    if (!data.licensePlate) errors.licensePlate = "License Plate is required";
    if (!data.color) errors.color = "Color is required";
    return errors;
  };

  const handleChange = (field) => (event, value) => {
    setVehicleData({
      ...vehicleData,
      [field]: value !== undefined ? value : event.target.value,
    });
    if (formErrors[field]) {
      const newErrors = { ...formErrors };
      delete newErrors[field];
      setFormErrors(newErrors);
    }
  };

  function handleSubmit() {
    console.log("");
    const validationErrors = validateForm(vehicleData);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(vehicleData);
    }
  }

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          disablePortal
          id="make-combo-box"
          data-testid="make-combo-box"
          options={carMakes}
          isOptionEqualToValue={(option, value) =>
            option === value || value === null
          }
          value={vehicleData.make}
          onChange={handleChange("make")}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Make"
              required
              fullWidth
              error={!!formErrors.make}
              helperText={formErrors.make}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          disablePortal
          id="model-combo-box"
          data-testid="model-combo-box"
          options={carModels}
          value={vehicleData.model}
          onChange={handleChange("model")}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Model"
              required
              fullWidth
              error={!!formErrors.model}
              helperText={formErrors.model}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          disablePortal
          id="year-combo-box"
          data-testid="year-combo-box"
          options={years}
          value={vehicleData.year}
          onChange={handleChange("year")}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Year"
              required
              fullWidth
              error={!!formErrors.year}
              helperText={formErrors.year}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="Mileage"
          data-testid="mileage-field"
          value={vehicleData.mileage}
          onChange={handleChange("mileage")}
          required
          fullWidth
          error={!!formErrors.mileage}
          helperText={formErrors.mileage}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          label="License Plate"
          data-testid="license-field"
          value={vehicleData.licensePlate}
          onChange={handleChange("licensePlate")}
          required
          fullWidth
          error={!!formErrors.licensePlate}
          helperText={formErrors.licensePlate}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          disablePortal
          id="color-combo-box"
          data-testid="color-combo-box"
          options={carColors}
          value={vehicleData.color}
          onChange={handleChange("color")}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Color"
              required
              fullWidth
              error={!!formErrors.color}
              helperText={formErrors.color}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Button
          variant="contained"
          sx={{ width: 300 }}
          onClick={handleSubmit}
          data-testid="submit-button"
          disabled={Object.keys(formErrors).length > 0}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default NewVehicleForm;
