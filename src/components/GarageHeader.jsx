import * as React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

function GarageHeader() {
  return (
    <Stack direction="row" width="100%" mb={2} alignItems="center">
      <Typography variant="h4" align="left" sx={{ flexGrow: 1 }}>
        My Garage
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="outlined" color="primary" sx={{ mr: 1 }}>
          Export PDF
        </Button>
        <Button variant="contained">Add New Vehicle</Button>
      </Box>
    </Stack>
  );
}

export default GarageHeader;
