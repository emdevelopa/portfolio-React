import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
// import { projectButton } from "./main";


const prButton = {
    background: '#7843e9;',
    padding: '1em 4em',
    color: "#fff",
    fontSize: '18px',
    fontWeight: 'bold',
    // marginTop:4
}

export default function About() {
    return (
        <>
            <Box marginTop={10}>
                <Stack alignItems='center' rowGap={2}>
                    <Typography variant="h4" fontWeight={600}>ABOUT ME</Typography>
                    <Box bgcolor='#7843e9' width={60} height={8} borderRadius={5}></Box>
                    <Typography variant="p" fontSize={20} >Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</Typography>
                    <Stack direction={"row"} width='100%' justifyContent={"space-between"}>
                        <Box width='100%' paddingX={5}>
                            <Typography variant="h5" marginBottom={5} fontWeight={800}>Get to know me!</Typography>
                            <Typography>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</Typography>
                            <br />
                            <Typography>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</Typography><br />
                            <Typography>
                                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                            </Typography>
                            <Box>
                                <a href="#"><Button sx={prButton}>Contact</Button></a>
                            </Box>
                        </Box>
                        <Box width='100%'>
                            <Typography variant="h5" fontWeight={800}>My Skills</Typography>
                            <Stack columnGap={4}>
                                <Typography>Frontend Development</Typography>
                                <Stack>
                                    <Box>NextJS/ReactJS</Box>
                                    <Box>EXPRESS</Box>
                                    <Box>HTML</Box>
                                    <Box>JS</Box>
                                    <Box>SQLITE, MONGO</Box>
                                    <Box>HTML</Box>
                                    <Box>HTML</Box>
                                </Stack>
                            </Stack>
                            <Stack direction='row' columnGap={4}>
                                <Box>SQLITE, MONGO</Box>
                                <Box>HTML</Box>
                                <Box>HTML</Box>
                            </Stack>
                        </Box>
                    </Stack>

                </Stack>
            </Box>
        </>
    )
}