
import { NavLink } from "react-router-dom"
import Stack from '@mui/material/Stack';
import classes from './index.module.css'
const Logo = require('../../assets/dinosaur.png')


const Menu = () => {
    return (
        <header>
            <Stack direction="row" spacing={2} width={'50px'}>
                <img src={Logo} alt="logo" style={{ maxWidth: '100%' }} />
            </Stack>

            <Stack direction={"row"} spacing={2} marginLeft={'auto'}>
                <nav>
                    <NavLink
                        className={({ isActive }) => (isActive ? classes.active : undefined)}
                        to={'route1'}>Create Monsters</NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? classes.active : undefined)}
                        to={'route2'}>
                        Show Monsters</NavLink>
                    <NavLink
                    className={({ isActive }) => (isActive ? classes.active : undefined)}
                    to={'route3'}>Monsters</NavLink>

                </nav>
            </Stack>

        </header>
    )
}

export default Menu