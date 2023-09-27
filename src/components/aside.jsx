
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const asideStyle = {
    background:'skyblue',
    height:'15em',
    borderRadius:'0 5px 5px 0'
}

export default function Aside(){
    return(
        <>
        <Box sx={asideStyle} position='absolute'top={180} >
            <Typography>ffffffffff</Typography>
        </Box>
        </>
    )
}