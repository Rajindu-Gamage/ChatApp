import React from "react";

import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const SignButton = ({ onClick, label }) => {
  return (
    <stack display="block" spacing={2} direction="row">
      <Box justifyContent="flex-start" alignItems="flex-start">
        <button
          onClick={onClick}
          variant="contained"
          color="primary"
          size="small"
        >
          Sign in With Google
        </button>
      </Box>
    </stack>
  );
};

export default SignButton;
