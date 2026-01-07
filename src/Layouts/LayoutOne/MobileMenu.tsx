import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography
} from "@mui/material";
import { useState } from "react";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
import navList from "../../data/NavList";


const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <MdOutlineMenu />
        </IconButton>
        <Typography
          variant="h3"
          color="inherit"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Armina Aryaie
        </Typography>
      </Box>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Box
          role="presentation"
          onClick={() => {
            setOpen(false);
          }}
        >
          <List>
            {navList.filter((page) => page.active).map((page) => (
              <ListItem key={page.title} sx={{ my: 2 }}>
                <Button
                  sx={{ color: "black" }}
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
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
        <Box>
          <IconButton
            size="medium"
            aria-label="LinkedIn"
            edge="end"
            color="inherit"
            href="https://www.linkedin.com/in/armina-aryaie/"
            target="_blank" rel="noreferrer"
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
            target="_blank" rel="noreferrer"
            sx={{ mr: 1 }}
          >
            <CiInstagram />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileMenu;
