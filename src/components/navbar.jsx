import { Home, Menu } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";
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
    width: '100%'
}

const hideNavOnMobile = {
    '@media (max-width: 600px)': {
        display: 'none',
    },
}
const showNavonMobile = {
    bgcolor: 'black',
    position: 'absolute',
    top: 85,
    right: 0,
    flexDirection: 'column',
    padding: '4em',
    justifyContent: 'center',
    rowGap: 6,
    transition:'all 1s ease'
}

export default function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false)
    console.log(menuToggle);
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

                    <Stack sx={{ navlinkStyle }} direction='flex' alignItems='center'>
                        <Menu sx={{
                            display: 'none',
                            '@media (max-width: 600px)': {
                                display: 'block',
                            },
                        }} onClick={(e) => {
                            setMenuToggle(!menuToggle)
                        }} />
                        <Stack direction='row' alignItems='center' justifyContent='space-around' spacing={4} sx={!menuToggle ? hideNavOnMobile : showNavonMobile}>

                            {/* <Box height='4em'></Box> */}
                            <Stack rowGap={4} sx={{
                                '@media (min-width: 600px)': {
                                    flexDirection: 'row',
                                    columnGap: 6
                                },
                            }}>
                                <Typography>Home</Typography>
                                <Typography>About</Typography>
                                <Typography>Projects</Typography>
                                <Typography>Contact</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            {/* <h1>Navbar</h1> */}
        </>
    )
}