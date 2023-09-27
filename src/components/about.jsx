import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function About() {
    return (
        <>
            <Box marginTop={10}>
                <Stack alignItems='center' rowGap={4}> 
                    <Typography variant="h3" fontWeight={600}>ABOUT ME</Typography>
                    <Box bgcolor='#7843e9' width={60} height={10} borderRadius={5}></Box>
                </Stack>
            </Box>
        </>
    )
}