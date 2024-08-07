import React, { useState } from "react";
import { Autocomplete, Grid, Button, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { maintenanceTypes } from "@/mocks/vehicleData";

function MaintenanceForm() {
  const [maintenanceData, setMaintenanceData] = useState({
    type: null,
    mileage: "",
    serviceDate: "",
    city: "",
    state: "",
    notes: "",
  });

  const handleChange = (field) => (event, value) => {
    setMaintenanceData({
      ...maintenanceData,
      [field]: value !== undefined ? value : event.target.value,
    });
  };

  const handleDateChange = (date) => {
    setMaintenanceData({
      ...maintenanceData,
      serviceDate: date ? date.format("YYYY-MM-DD") : "",
    });
  };

  const handleSubmit = () => {
    console.log(maintenanceData);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3} justifyContent="center">
        {/* Maintenance type */}
        <Grid item xs={12}>
          <Autocomplete
            disablePortal
            id="maintenance-type-combo-box"
            data-testid="maintenance-type-combo-box"
            options={maintenanceTypes}
            value={maintenanceData.type}
            onChange={handleChange("type")}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Maintenance Type"
                required
                fullWidth
              />
            )}
          />
        </Grid>

        {/* Mileage */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Mileage"
            data-testid="mileage-field"
            value={maintenanceData.mileage}
            onChange={handleChange("mileage")}
            required
            fullWidth
          />
        </Grid>

        {/* Date of service */}
        <Grid item xs={12} sm={6} md={3}>
          <DatePicker
            label="Service Date"
            data-testid="date-field"
            value={
              maintenanceData.serviceDate
                ? new AdapterDayjs().date(maintenanceData.serviceDate)
                : null
            }
            onChange={(date) => handleDateChange(date)}
            slotProps={{
              textField: {
                required: true,
                fullWidth: true,
                variant: "outlined",
                id: "service-date",
                name: "serviceDate",
              },
            }}
          />
        </Grid>

        {/* City */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="City"
            data-testid="city-field"
            value={maintenanceData.city}
            onChange={handleChange("city")}
            required
            fullWidth
          />
        </Grid>

        {/* State */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="State"
            data-testid="state-field"
            value={maintenanceData.state}
            onChange={handleChange("state")}
            required
            fullWidth
          />
        </Grid>

        {/* Additional notes section */}
        <Grid item xs={12}>
          <TextField
            label="Additional Notes"
            inputProps={{ "data-testid": "notes-field" }}
            id="notes-field"
            name="notes"
            value={maintenanceData.notes}
            onChange={handleChange("notes")}
            multiline
            minRows={4}
            maxRows={Infinity}
            fullWidth
          />
        </Grid>

        {/* Submit button */}
        <Grid item xs={12} textAlign="center">
          <Button
            variant="contained"
            onClick={handleSubmit}
            data-testid="submit-button"
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

export default MaintenanceForm;
