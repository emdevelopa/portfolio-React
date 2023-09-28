import { Box, Button, Typography } from "@mui/material";

const mainStyle = {
    // background:'blue',
    // height: '90vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}
const headingPrimary = {
    fontSize: '3.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textAlign: 'center',
    // color: '#111',
    fontWeight: 800,
    marginBottom: 4
}
const textPrimary = {
    // color: '#333',
    fontSize: '24px',
    textAlign: 'center',
    width: "80%",
    lineHeight: 1.6,
    margin:"0 auto",
    marginBottom: 4,

}
export const projectButton ={
    background: '#7843e9;',
    padding: '1em 4em',
    color: "#fff",
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s, border-radius 0.3s',
    '&:hover': {
        background: 'black', // Change the background color on hover
        borderRadius: 5,

      },
}
export default function Main() {
    return (
        <>
            <Box sx={mainStyle}>
                <Box sx={{ width: '70%', textAlign: 'center','@media (max-width: 600px)': {
                            display: 'none', // Hide on screens with a maximum width of 600px (adjust this value as needed)
                        },}}>
                    <Typography variant="h1" marginBottom={90} sx={headingPrimary}>Hey, I'm Gyimah Emmanuel</Typography>
                    <Typography sx={textPrimary}>A Passionate building the Frontend of Websites and Web Applications that leads to the success of the overall product</Typography>
                    <Box>
                        <a href="#"><Button sx={projectButton} >Projects</Button></a> 
                    </Box>
                </Box>

            </Box>
        </>
    )
}