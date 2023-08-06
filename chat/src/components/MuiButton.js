import React from "react";
import Button from "@mui/material/Button";

import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Box } from "@mui/material";
const MuiButton = ({ onClick, label }) => {
  return (
    <stack display="block" spacing={2} direction="row">
      <Box justifyContent="flex-start" alignItems="flex-start">
        <Button
          onClick={onClick}
          variant="contained"
          color="primary"
          size="small"
          endIcon={<DoneOutlineIcon />}
        >
          submit
        </Button>
      </Box>
    </stack>
  );
};

export default MuiButton;
