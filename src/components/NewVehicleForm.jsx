import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { carMakes, carModels, carColors, years } from "@/mocks/vehicleData";
import { Stack } from "@mui/material";

function NewVehicleForm() {
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

  return (
    <Stack direction="column" spacing={3}>
      <Stack direction="row" spacing={3}>
        <Autocomplete
          disablePortal
          id="make-combo-box"
          options={carMakes}
          value={formData.make}
          onChange={handleChange("make")}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Make" required />
          )}
        />
        <Autocomplete
          disablePortal
          id="model-combo-box"
          options={carModels}
          value={formData.model}
          onChange={handleChange("model")}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Model" required />
          )}
        />
        <Autocomplete
          disablePortal
          id="year-combo-box"
          options={years}
          value={formData.year}
          onChange={handleChange("year")}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Year" required />
          )}
        />
      </Stack>
      <Stack direction="row" spacing={3}>
        <TextField
          label="Mileage"
          value={formData.mileage}
          onChange={handleChange("mileage")}
          sx={{ width: 250 }}
          required
        />

        <TextField
          label="License Plate"
          value={formData.licensePlate}
          onChange={handleChange("licensePlate")}
          sx={{ width: 250 }}
          required
        />
        <Autocomplete
          disablePortal
          id="color-combo-box"
          options={carColors}
          value={formData.color}
          onChange={handleChange("color")}
          sx={{ width: 250 }}
          renderInput={(params) => (
            <TextField {...params} label="Color" required />
          )}
        />
      </Stack>
    </Stack>
  );
}

export default NewVehicleForm;
