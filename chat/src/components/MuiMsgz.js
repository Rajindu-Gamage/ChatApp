import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import { Chat } from "./Chat";

const MuiMsgz = () => {
  return (
    <Box
      fontWeight={"bold"}
      bgcolor={"#94a6c6"}
      margin={"auto"}
      border={2}
      textAlign={"center"}
    >
      <div>
        <Typography variant="h6">Msgz</Typography>
      </div>
    </Box>
  );
};

export default MuiMsgz;
