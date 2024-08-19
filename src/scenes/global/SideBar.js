import React, { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "react-pro-sidebar/dist/css/styles.css";
import ProfileImage from "../../assets/profile.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868ddfb !important",
        },
        "& .pro-menu-item.active": {
          padding: "#687ofa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  ml: "15px",
                }}
              >
                <Typography variant="h3" color={colors.grey[400]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/*USER*/}
          {!isCollapsed && (
            <Box mb={"25px"}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="profile-user"
                  style={{ cursor: "pointer" }}
                  src={ProfileImage}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Frirsta
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to={"/"}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to={"/team"}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contact Information"
              to={"/contacts"}
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to={"/invoices"}
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile form"
              to={"/form"}
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to={"/calendar"}
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to={"/faq"}
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Chart
            </Typography>
            <Item
              title="Bar chart"
              to={"/bar"}
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie chart"
              to={"/pie"}
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line chart"
              to={"/line"}
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography chart"
              to={"/geography"}
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
      {/*Admin */}
    </Box>
  );
};

export default SideBar;
