import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import FactoryIcon from "@mui/icons-material/Factory";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import InventoryIcon from "@mui/icons-material/Inventory";
import AdfScannerIcon from "@mui/icons-material/AdfScanner";
import CategoryIcon from "@mui/icons-material/Category";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Collapse, Menu, MenuItem, Tooltip, useMediaQuery, BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Logout,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Frame({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(!isMobile);
  const location = useLocation();
  const navigate = useNavigate();
  const [inventory, setInventory] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const profile = Boolean(anchorEl);
  const handleOpenProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseProfile = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setInventory(!inventory);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Responsif: buka drawer jika bukan mobile, tutup jika mobile
  React.useEffect(() => {
    setOpen(!isMobile);
  }, [isMobile]);

  // Drawer variant responsif
  const drawerVariant = isMobile ? "temporary" : "persistent";

  // Bottom navigation state
  const [bottomNav, setBottomNav] = React.useState(() => {
    if (location.pathname === "/ar") return 0;
    if (location.pathname === "/") return 1;
    if (location.pathname === "/materi") return 2;
    return 1;
  });

  // Sinkronkan bottomNav dengan path saat location berubah
  React.useEffect(() => {
    if (location.pathname === "/ar") setBottomNav(0);
    else if (location.pathname === "/") setBottomNav(1);
    else if (location.pathname === "/materi") setBottomNav(2);
  }, [location.pathname]);

  // Handler untuk bottom navigation
  const handleBottomNavChange = (event, newValue) => {
    setBottomNav(newValue);
    if (newValue === 0) navigate("/ar");
    if (newValue === 1) navigate("/");
    if (newValue === 2) navigate("/materi");
  };

  // Handler untuk menu Inventory di bottom nav
  const handleBottomInventoryNav = (subPath) => {
    setInventory(false);
    navigate(subPath);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* AppBar hanya tampil jika bukan mobile */}
      {!isMobile && (
        <AppBar
          position="fixed"
          open={open && !isMobile}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                mr: 2,
                ...(open && !isMobile && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <div className="flex flex-row items-center justify-between w-full">
              <Typography variant="h6" noWrap component="div">
                Rull Corp
              </Typography>
              {/* ...existing code... */}
              <React.Fragment>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleOpenProfile}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={profile}
                  onClose={handleCloseProfile}
                  onClick={handleCloseProfile}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <Link to={"/profile"}>
                    <MenuItem onClick={handleCloseProfile}>
                      <Avatar /> Profile
                    </MenuItem>
                  </Link>
                  <Divider />
                  <MenuItem onClick={handleCloseProfile}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleCloseProfile}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
            </div>
          </Toolbar>
        </AppBar>
      )}
      {/* Drawer hanya tampil jika bukan mobile */}
      {!isMobile && (
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant={drawerVariant}
          anchor="left"
          open={open}
          onClose={isMobile ? handleDrawerClose : undefined}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Link to={"/"}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    color: `${location.pathname === "/" ? "blue" : "black"}`,
                    backgroundColor: `${
                      location.pathname === "/" ? "#dbdbdb" : ""
                    }`,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: `${location.pathname === "/" ? "blue" : "black"}`,
                    }}
                  >
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <Link to={"/ar"}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    color: `${
                      location.pathname === "/ar" ? "blue" : "black"
                    }`,
                    backgroundColor: `${
                      location.pathname === "/ar" ? "#dbdbdb" : ""
                    }`,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: `${
                        location.pathname === "/ar" ? "blue" : "black"
                      }`,
                    }}
                  >
                    <ThreeDRotationIcon />
                  </ListItemIcon>
                  <ListItemText>AR</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            <Link to={"/materi"}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    color: `${
                      location.pathname === "/materi" ? "blue" : "black"
                    }`,
                    backgroundColor: `${
                      location.pathname === "/materi" ? "#dbdbdb" : ""
                    }`,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: `${
                        location.pathname === "/materi" ? "blue" : "black"
                      }`,
                    }}
                  >
                    <MenuBookIcon />
                  </ListItemIcon>
                  <ListItemText>Materi</ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
          </List>
        </Drawer>
      )}
      <Main
        open={open && !isMobile}
        sx={{
          padding: isMobile ? theme.spacing(1) : theme.spacing(2),
          marginLeft: isMobile ? 0 : undefined,
        }}
      >
        {/* DrawerHeader hanya jika bukan mobile */}
        {!isMobile && <DrawerHeader />}
        {children}
      </Main>
      {/* Bottom Navigation untuk mobile */}
      {isMobile && (
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: theme.zIndex.appBar + 1,
          }}
          elevation={3}
        >
          <BottomNavigation
            value={bottomNav}
            onChange={handleBottomNavChange}
            showLabels
          >
            <BottomNavigationAction
              label="AR"
              icon={<ThreeDRotationIcon />}
            />
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon />}
            />
            <BottomNavigationAction
              label="Materi"
              icon={<MenuBookIcon />}
            />
          </BottomNavigation>
        </Paper>
      )}
    </Box>
  );
}
