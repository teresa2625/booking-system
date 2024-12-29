import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import { Link, useLocation } from "react-router-dom";

interface NavigationBarProps {
  onSectionClick?: (section: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onSectionClick }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const location = useLocation();
  const token = localStorage.getItem("token");
  const pages = token
    ? ["Home", "Services", "Schedule", "Contact", "Logout"]
    : ["Home", "Services", "Schedule", "Contact", "Login"];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid3x3Icon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            Teresa
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) =>
                page === "Login" ? (
                  <MenuItem
                    key={page}
                    component={Link}
                    to="/login"
                    onClick={() => {
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ) : page === "Logout" ? (
                  <MenuItem
                    key={page}
                    component={Link}
                    to="/"
                    onClick={() => {
                      localStorage.clear();
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ) : location.pathname !== "/" ? (
                  <MenuItem
                    key={page}
                    component={Link}
                    to="/"
                    onClick={() => {
                      handleCloseNavMenu();
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ) : (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      onSectionClick?.(page);
                    }}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ),
              )}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
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
            Teresa
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) =>
              page === "Login" ? (
                <Button
                  key={page}
                  component={Link}
                  to="/login"
                  onClick={() => {
                    handleCloseNavMenu();
                  }}
                  sx={{
                    my: 2,
                    color: "inherit",
                    display: "block",
                    padding: "0px 15px 0px 15px",
                  }}
                >
                  {page}
                </Button>
              ) : page === "Logout" ? (
                <Button
                  key={page}
                  component={Link}
                  to="/"
                  onClick={() => {
                    localStorage.clear();
                    handleCloseNavMenu();
                  }}
                  sx={{
                    my: 2,
                    color: "inherit",
                    display: "block",
                    padding: "0px 15px 0px 15px",
                  }}
                >
                  {page}
                </Button>
              ) : location.pathname !== "/" ? (
                <Button
                  key={page}
                  component={Link}
                  to="/"
                  onClick={() => {
                    handleCloseNavMenu();
                  }}
                  sx={{
                    my: 2,
                    color: "inherit",
                    display: "block",
                    padding: "0px 15px 0px 15px",
                  }}
                >
                  {page}
                </Button>
              ) : (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    onSectionClick?.(page);
                  }}
                  sx={{
                    my: 2,
                    color: "inherit",
                    display: "block",
                    padding: "0px 15px 0px 15px",
                  }}
                >
                  {page}
                </Button>
              ),
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;
