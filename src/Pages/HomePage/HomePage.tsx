import { Container } from "@mui/material"
import AboutSection from "../../Components/AboutSection/AboutSection"
import ExperienceSection from "../../Components/ExperienceSection/ExperienceSection"
import PlatformSection from "../../Components/PlatformSection/PlatformSection"
import LayoutOne from "../../Layouts/LayoutOne/LayoutOne"

const HomePage = () => {
    return (
        <LayoutOne>
            <Container maxWidth="xl" disableGutters>
                <AboutSection />
                <PlatformSection />
                <ExperienceSection/>
            </Container>
        </LayoutOne>
    )
}
export default HomePage