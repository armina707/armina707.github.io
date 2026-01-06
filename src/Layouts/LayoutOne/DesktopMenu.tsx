import { Box, Button, IconButton, Typography } from "@mui/material";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import navList from "../../data/NavList";

const DesktopMenu = () => {
  return (
    <>
      <Typography
        variant="h3"
        color="inherit"
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
      >
        Armina Aryaie
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {navList.filter((page) => page.active).map((page) => (
          <Button
            key={page.title}
            sx={{ my: 2, color: "white", display: "block" }}
            onClick={() => {
              let element = document.getElementById(page.link);
              element?.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
              });
            }}
          >
            {page.title}
          </Button>
        ))}
      </Box>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <IconButton
          size="medium"
          aria-label="LinkedIn"
          edge="end"
          color="inherit"
          href="https://www.linkedin.com/in/armina-aryaie/"
          target="_blank"
          sx={{ mr: 1 }}
        >
          <CiLinkedin />
        </IconButton>
        <IconButton
          size="medium"
          aria-label="Instagram"
          edge="end"
          color="inherit"
          href="https://www.instagram.com/armina.707/"
          target="_blank"
          sx={{ mr: 1 }}
        >
          <CiInstagram />
        </IconButton>
        <a href="https://mcmaster.simplyvoting.com" target="_blank">
          <Button variant="contained" color="secondary">
            <b className="text-light">Vote Now</b>
          </Button></a>
      </Box>
    </>
  );
};

export default DesktopMenu;
