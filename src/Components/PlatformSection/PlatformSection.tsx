import { Card, Grid, Typography } from "@mui/material"

const PlatformSection = () => {
    return (
        <div id="platform" className="section platform-section">
            <Typography variant="h4" className="section-title">Platform</Typography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Make an educated vote this{" "}
                <a href="https://macengsociety.ca/elections" target="_blank" className="text-secondary bold text-no-decoration">election</a>:</p>
            <p><b className="text-secondary">When to Vote:</b> Jan 12th-14th</p>
            <p><b className="text-secondary">Where to Vote:</b> <a href="https://mcmaster.simplyvoting.com/" target="_blank" className="text-light text-no-decoration">Voting will be done online via MSU SimplyVoting.</a></p>

            <Grid container spacing={4}>

                <Grid size={{ xs: 12, md: 4 }}>

                    <Card variant="outlined" className="platform-card">
                        <Typography variant="h5" className="platform-title">Enhancing the Student Experience & Improving Visibility</Typography>
                        <div className="platform-content">
                            <p>Do you know what your MES student fees go towards? The answer is events like Pub Nights and Wellness events, resources like Hatch Space and Tutoring, as well as support for clubs/teams. Those are just some of what MES provides and not everyone knows about it. As President, I would want to ensure that students and clubs/teams know what MES offers them and how to access it.
                                <br />
                                This includes:
                            </p>
                            <ul>

                                <li>Improving communication and visibility of MES services and resources</li>
                                <li>Making it easier for students and clubs/teams to engage with and benefit from MES</li>
                                <li>Ensuring student feedback actively shapes MES priorities and initiatives</li>
                            </ul>
                        </div>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card variant="outlined" className="platform-card">
                        <Typography variant="h5" className="platform-title">Continuity, Progress, and Long Term Advocacy
                        </Typography>
                        <div className="platform-content">
                            <p>One of my key priorities is ensuring continuity, since everything works better when progress is built upon. Over the past year, I’ve been working with different members of the executive team to start long-term projects that will help improve the MES and overall student experience, which I’d hope to carry on and grow.
                                <br />
                                I will:
                            </p>
                            <ul>

                                <li>Strengthen advocacy efforts for clubs/teams, which I’ve been actively a part of with the club/team advancement initiative </li>
                                <li>Help create better structure and more sustainable practices so traditions don’t die out</li>
                                <li>Ensure that long-term goals are documented, tracked, and transitioned for the next executive teams to come</li>
                            </ul></div>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Card variant="outlined" className="platform-card">
                        <Typography variant="h5" className="platform-title">Addressing Bill 33 & Protecting Student Interests
                        </Typography>
                        <div className="platform-content">
                            <p>Bill 33 affects how student societies like MES are governed and funded. This could mean budget cuts for help sessions, any extended Hatch space advocacy efforts, or even club/teams. Currently, I’ve met with the MSU, Faculty and some executive members to discuss potential next steps, while also trying to learn as much as I can to prepare for what’s to come in 2026.
                                <br />
                                As President, I will:
                            </p>
                            <ul>

                                <li>Continue to work closely with Faculty, MSU, and other student leaders to understand and address its impacts</li>
                                <li>Advocate for engineering students and clubs/teams during policy changes </li>
                                <li>Ensure transparency, so students understand how decisions are being made and why</li>
                            </ul></div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default PlatformSection