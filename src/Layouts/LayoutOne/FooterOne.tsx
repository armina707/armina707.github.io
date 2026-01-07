import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { CiInstagram, CiLinkedin } from "react-icons/ci";

const FooterOne = () => {
  return (
    <div className="footer-one">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }} className="footer-section">
          <Box component="img" src="./images/Logo_MES_White_2.png" height="20rem" />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} className="footer-box">
          <Typography variant="h5">Thank you for stopping by!</Typography>
          <Typography variant="h2" color={"white"}>
            Armina Aryaie
          </Typography>
          <Typography variant="body1">
            All logos, trademarks, and brandnames are the property of their
            respective owners
          </Typography>
          <Typography variant="body1">Icons from React-Icons</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }} className="footer-links">
          <Typography variant="h6">Keep in touch</Typography>
          <div className="footer-section">
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
            <a href="https://mcmaster.simplyvoting.com" target="_blank" rel="noreferrer" >
              <Button variant="contained" color="secondary">
                <b className="text-light">Vote Now</b>
              </Button></a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FooterOne;
