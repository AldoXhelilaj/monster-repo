import Box from "@mui/material/Box"

const image = require('../assets/home.jpeg')

const Homepage= () => {
    return (
        <Box sx={{ width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={image} alt="logo" />
        </Box>
    )
}
export default Homepage