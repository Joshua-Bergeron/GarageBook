import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
  Grid,
} from "@mui/material";
import dayjs from "dayjs";

export default function ServiceSummary({
  lastServiceDate,
  lastServiceType,
  totalServices,
}) {
  return (
    <Card elevation={2} sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="body1" gutterBottom sx={{ fontWeight: "bold" }}>
          Service Summary
        </Typography>
        <Divider sx={{ marginBottom: 1 }} />
        <Box display="flex" justifyContent="flex-start">
          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
            <Grid item xs>
              <Typography variant="body2">{`Last Service Date: ${dayjs(lastServiceDate).format("MM/DD/YYYY")}`}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2">{`Last Service Type: ${lastServiceType}`}</Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2">{`Total Services: ${totalServices}`}</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
