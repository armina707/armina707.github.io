import { Box, Grid, Typography } from "@mui/material"

const AboutSection = () => {
    return (

        <Box sx={{ flexGrow: 1, p: 2 }}>
            <Grid id="about" container className="section bio-section">
                <Grid
                    className="profile-img"
                    size={{ xs: 12, md: 4 }}>
                    <Box component="img" src="./images/armina-profile.jpg" />
                </Grid>
                <Grid
                    size={{ xs: 12, md: 6 }}
                    className="profile-txt"
                >
                    <Typography variant="h5" color="muted">
                        Hi there, my name is Armina Aryaie,

                    </Typography>
                    <p>
                        I've worked on the MES for the past 3 years in a variety of capacities: supporting clubs/teams, expanding access to resources, and supporting events for engineering students. I would be honoured to represent you.
                    </p>
                </Grid>
            </Grid>
        </Box>
    )

}
export default AboutSection