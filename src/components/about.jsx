import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function About() {
    return (
        <>
            <Box marginTop={10}>
                <Stack alignItems='center' rowGap={2}> 
                    <Typography variant="h3" fontWeight={600}>ABOUT ME</Typography>
                    <Box bgcolor='#7843e9' width={60} height={8} borderRadius={5}></Box>
                    <Typography variant="p" fontSize={20} >Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</Typography>
                    <Stack direction={"row"} bgcolor='red' width='100%' justifyContent={""}>
                        <Box><Typography variant="h4" fontWeight={800}>Get to know me!</Typography></Box>
                        <Box><Typography variant="h4" fontWeight={800}>My Skills</Typography></Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    )
}