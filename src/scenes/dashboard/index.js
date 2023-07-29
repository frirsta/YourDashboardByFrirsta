import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";

import { tokens } from "../../theme";
import Box from "@mui/material/Box";
import React from "react";
import Header from "../../components/Header";
import DownloadOutlined from "@mui/icons-material/DownloadOutlined";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      {/* Header */}
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Header />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "10 20px",
            }}
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr",
          gridAutoRows: "140px",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            gridColumn: "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
