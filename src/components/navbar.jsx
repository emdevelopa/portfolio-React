import { Home } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
// import f from './dp.jpg'

const imageStyle = {
    width: '4em',
    height: '4em',
    background: 'green',
    borderRadius: '100%',
    // padding: 0.5,
};
const parentNavBox = {
    padding: '0.5em 0',
    zIndex: 1,
    // background: '#fff',
    boxShadow: '0px 0px 10px 2px #00000039',
}

const navlinkStyle = {
    width: '40%'
}


export default function Navbar() {
    return (
        <>
            <Box sx={parentNavBox} position='fixed' width='100%'>
                <Stack direction='row' spacing={2} justifyContent='space-between' padding='0 2em'>
                    <Stack direction='row' spacing={2} alignItems='center'>
                        <Box sx={imageStyle}>
                            <img src='dp.jpg' alt="myDp" className="image" />
                        </Box>
                        <Typography fontWeight='bold' variant="h5">DEV WITH EM</Typography>
                    </Stack>
                <Home color="red"/>
                    <Box sx={{
                        ...navlinkStyle,
                        '@media (max-width: 600px)': {
                            display: 'none', // Hide on screens with a maximum width of 600px (adjust this value as needed)
                        },
                    }}>
                        <Stack direction='row' alignItems='center' justifyContent='space-around'>
                            <Box height='4em'></Box>
                            <Typography>Home</Typography>
                            <Typography>About</Typography>
                            <Typography>Projects</Typography>
                            <Typography>Contact</Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            {/* <h1>Navbar</h1> */}
        </>
    )
}