import MenuIcon from "@mui/icons-material/Menu";
import { Tab, Tabs } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import gymIcon from "assets/icons/gym.svg";
import menuIcon from "assets/icons/menu-board.svg";
import salladIcon from "assets/icons/salad .svg";
import usersIcon from "assets/icons/user.svg";
import logo from "assets/images/logo.png";
import * as React from "react";
import { useState } from "react";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [value, setValue] = useState(0);
  const [tabSelected, setTabSelected] = useState({
    tabOne: true,
    tabTwo: false,
    tabThree: false,
    tabFour: false,
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#111315" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="Logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                ".MuiMenu-paper": { backgroundColor: "#1a1d1f" },
              }}
            >
              <MenuItem
                key={"page"}
                selected={tabSelected.tabOne}
                onClick={() => {
                  handleCloseNavMenu();
                  setTabSelected({
                    tabOne: true,
                    tabTwo: false,
                    tabThree: false,
                    tabFour: false,
                  });
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{ color: "#9ea0a5", fontWeight: "bold" }}
                >
                  طلبات التسجيل
                </Typography>
              </MenuItem>
              <MenuItem
                key={"page"}
                selected={tabSelected.tabTwo}
                onClick={() => {
                  handleCloseNavMenu();
                  setTabSelected({
                    tabOne: false,
                    tabTwo: true,
                    tabThree: false,
                    tabFour: false,
                  });
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{ color: "#9ea0a5", fontWeight: "bold" }}
                >
                  التغذية
                </Typography>
              </MenuItem>
              <MenuItem
                key={"page"}
                selected={tabSelected.tabThree}
                onClick={() => {
                  handleCloseNavMenu();
                  setTabSelected({
                    tabOne: false,
                    tabTwo: false,
                    tabThree: true,
                    tabFour: false,
                  });
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{ color: "#9ea0a5", fontWeight: "bold" }}
                >
                  التمارين
                </Typography>
              </MenuItem>
              <MenuItem
                key={"page"}
                selected={tabSelected.tabFour}
                onClick={() => {
                  handleCloseNavMenu();
                  setTabSelected({
                    tabOne: false,
                    tabTwo: false,
                    tabThree: false,
                    tabFour: true,
                  });
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{ color: "#9ea0a5", fontWeight: "bold" }}
                >
                  المتدربين
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="Logo" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon label tabs example"
              sx={{
                "&& .Mui-selected": { color: "#f23a3a" },
                ".MuiTabs-indicator": {
                  backgroundColor: "#f23a3a",
                  boxShadow:
                    "0 0 14.8px 0 #f23a3a, 0 0 29.5px 0 #f23a3a, 0 0 619.9px 0 #f23a3a;",
                },
              }}
            >
              <Tab
                icon={
                  <img
                    src={menuIcon}
                    alt="menu icon"
                    className={`${tabSelected.tabOne ? "filter-icon" : ""}`}
                  />
                }
                onClick={() => {
                  handleCloseNavMenu();
                  setTabSelected({
                    tabOne: true,
                    tabTwo: false,
                    tabThree: false,
                    tabFour: false,
                  });
                }}
                iconPosition="start"
                label="طلبات التسجيل"
                sx={{
                  color: "#9ea0a5",
                  fontWeight: "bold",
                  gap: 2,
                }}
              />
              <Tab
                icon={
                  <img
                    src={salladIcon}
                    alt="sallad icon"
                    className={`${tabSelected.tabTwo ? "filter-icon" : ""}`}
                  />
                }
                onClick={() => {
                  handleCloseNavMenu();
                  setTabSelected({
                    tabOne: false,
                    tabTwo: true,
                    tabThree: false,
                    tabFour: false,
                  });
                }}
                iconPosition="start"
                label="التغذية"
                sx={{
                  color: "#9ea0a5",
                  fontWeight: "bold",
                  gap: 2,
                }}
              />
              <Tab
                icon={
                  <img
                    src={gymIcon}
                    alt="gym icon"
                    className={`${tabSelected.tabThree ? "filter-icon" : ""}`}
                  />
                }
                onClick={() => {
                  handleCloseNavMenu();
                  setTabSelected({
                    tabOne: false,
                    tabTwo: false,
                    tabThree: true,
                    tabFour: false,
                  });
                }}
                iconPosition="start"
                label="التمارين"
                sx={{
                  color: "#9ea0a5",
                  fontWeight: "bold",
                  gap: 2,
                }}
              />
              <Tab
                icon={
                  <img
                    src={usersIcon}
                    alt="users icon"
                    className={`${tabSelected.tabFour ? "filter-icon" : ""}`}
                  />
                }
                onClick={() => {
                  handleCloseNavMenu();
                  setTabSelected({
                    tabOne: false,
                    tabTwo: false,
                    tabThree: false,
                    tabFour: true,
                  });
                }}
                iconPosition="start"
                label="المتدربين"
                sx={{
                  color: "#9ea0a5",
                  fontWeight: "bold",
                  gap: 2,
                }}
              />
            </Tabs>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
