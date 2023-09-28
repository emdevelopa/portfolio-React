import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
// import { projectButton } from "./main";


const prButton = {
    background: '#7843e9;',
    padding: '0.5em 3em',
    color: "#fff",
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, border-radius 0.3s',
    '&:hover': {
        background: 'black', // Change the background color on hover
        borderRadius: 5,

      },
    // marginTop:4
}

const skillContainer = {
    background: 'black',
    borderRadius: 5,
    fontWeight: 'bold',
    padding: 2,
    color: '#fff',
   
    
}

export default function About() {
    return (
        <>
            <Box marginTop={10}>
                <Stack alignItems='center' rowGap={2}>
                    <Typography variant="h4" fontWeight={600}>ABOUT ME</Typography>
                    <Box bgcolor='#7843e9' width={60} height={8} borderRadius={5}></Box>
                    <Typography variant="p" marginBottom={5} fontSize={20} >Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</Typography>
                    <Stack direction={"row"} width='100%' justifyContent={"space-between"}>
                        <Box width='60%' paddingX={5}>
                            <Typography variant="h5" marginBottom={5} fontWeight={800}>Get to know me!</Typography>
                            <Typography>As a Full Stack Developer, I specialize in crafting the user-facing components of websites and web applications, driving the success of the entire digital product. You can explore my portfolio showcasing some of my remarkable projects in the designated Projects section.</Typography>
                            <br />
                            <Typography>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</Typography><br />
                            <Typography>
                                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                            </Typography>
                            <Box marginTop={4}>
                                <a href="#"><Button sx={prButton}>Contact</Button></a>
                            </Box>
                        </Box>
                        <Box width='100%'>
                            <Typography variant="h5" marginBottom={5} fontWeight={800}>My Skills</Typography>
                            <Stack rowGap={2}>
                                <Stack direction='' columnGap={4}>
                                    <Box sx={skillContainer}>NextJS/ReactJS</Box>
                                    <Box sx={skillContainer}> Vanilla HTML</Box>
                                    <Box sx={skillContainer}>Vanilla JS</Box>
                                    <Box sx={skillContainer}>Vanilla CSS</Box>
                                </Stack>
                                <Stack direction='row' columnGap={4}>
                                    <Box sx={skillContainer}>Typescript</Box>
                                    <Box sx={skillContainer}>Tailwind CSS</Box>
                                    <Box sx={skillContainer}>MAterial UI</Box>
                                    <Box sx={skillContainer}>BootStrap</Box>
                                </Stack>
                                <Stack direction='row' columnGap={4}>
                                    <Box sx={skillContainer}>SQLITE</Box>
                                    <Box sx={skillContainer}>MySQL</Box>
                                    <Box sx={skillContainer}>Mongo DB</Box>
                                    <Box sx={skillContainer}>PostgreSQL</Box>
                                </Stack>
                                <Stack direction='row' columnGap={4}>
                                    <Box sx={skillContainer}>NODEJS(ExpressJS)</Box>
                                    <Box sx={skillContainer}>PYTHON(Flask/FastAPI)</Box>
                                    <Box sx={skillContainer}>PHP</Box>
                                </Stack>
                            </Stack>

                        </Box>
                    </Stack>

                </Stack>
            </Box>
        </>
    )
}