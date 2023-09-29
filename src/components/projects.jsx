import { Box, Stack, Typography } from "@mui/material";

export default function Projects() {
    return (
        <>
            <Box marginTop={10}>
                <Stack alignItems='center' rowGap={2}>
                    <Typography variant="h4" fontWeight={600}>Project</Typography>
                    <Box bgcolor='#7843e9' width={60} height={8} borderRadius={5}></Box>
                    <Typography variant="p" marginBottom={5} fontSize={20} textAlign='center' paddingX={2}>Here you will find some of the personal and clients projects that I created with each project containing its own case study</Typography>
                </Stack>
            </Box>
        </>
    )
}