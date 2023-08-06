import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
export const MuiTypography = () => {
  return (
    <Box fontWeight={"bold"}>
      <div>
        <Typography variant="h5">Enter Room Name:</Typography>
      </div>
    </Box>
  );
};

export default MuiTypography;
