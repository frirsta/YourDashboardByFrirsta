import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";

import React from "react";

const ProgressCircle = ({ progress = "0.75", size = 40 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%), conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg), ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        width: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;