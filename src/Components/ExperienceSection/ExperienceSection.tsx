import { Box, Card, CardActionArea, CardContent, Grid, Stack, Typography } from "@mui/material"
import { ExperienceList } from "../../data/ExperienceList"
import { ExperienceCardProps } from "../../types/Experience"

const ExperienceCard = ({ exp }: ExperienceCardProps) => {
    return (
        <Card className="experience-card">
            <CardActionArea>
                <CardContent>
                    <Grid container alignItems={"center"} justifyContent={"center"}>
                        <Grid size={{ lg: 4, sm: 6 }}>
                            <img
                                width="150px"
                                height="150px"
                                src={exp.img}
                                alt={exp.title} />
                        </Grid>
                        <Grid size={{ lg: 8, sm: 6 }}>
                            <Stack direction={"column"} spacing={2} paddingTop={"10px"}>
                                <Typography variant="h5">{exp.title}</Typography>

                                <Typography variant="subtitle1" lineHeight={1}>{exp.subTitle}</Typography>

                                <Typography variant="body1" color="text.disabled" lineHeight={1}>{exp.range}</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>

        </Card >

    )
}

const ExperienceSection = () => {
    return (

        <Box id="experience" className="section experience-section" sx={{ mt: "40px" }}>

            <Typography variant="h4" sx={{ mb: "40px" }} className="text-light">
                Experience
            </Typography>
            <Grid container spacing={3} justifyContent={"space-around"}>

                {
                    ExperienceList.map((exp, index) => {
                        return (
                            <Grid key={index} size={{ md: 6, lg: 5 }}>
                                <ExperienceCard exp={exp} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box >
    )
}

export default ExperienceSection