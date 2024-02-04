import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import { Container } from '@mui/material';
const Root = () =>  {
    return (
        <Container maxWidth="xl">
            <Menu/>
            <Outlet/>
        </Container>
    )
}

export default Root