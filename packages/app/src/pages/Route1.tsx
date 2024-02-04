import Form from "../components/Form";
import Grid from '@mui/material/Unstable_Grid2';
const Route1 = () => {
    return (
        <Grid  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 6 }} margin={'20px 0'}>
            <Form />
       </Grid>
    )
}

export default Route1;