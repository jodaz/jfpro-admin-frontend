import {
    Box,
    Drawer,
    Toolbar,
    Stack
} from "@mui/material";
import LogoutButton from "../components/Buttons/Logout";
import NavLink from "./NavLink";
// Icons
import AssessmentIcon from '@mui/icons-material/Assessment';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Logo from '../assets/branding/LOGO_LIGHT.svg'
import { useLocation } from "react-router-dom";

const drawerWidth = '350px';

const routes = [
    {
        title: 'Overview',
        icon: <AssessmentIcon />,
        to: '/overview',
    },
    {
        title: 'Productos',
        icon: <LocalOfferIcon />,
        to: '/products',
    },
    {
        title: 'Suscripciones',
        icon: <CurrencyExchangeIcon />,
        to: '/suscriptions',
    }
]

const Sidebar = () => {
    const location = useLocation();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    border: 'none',
                    bgcolor: theme => theme.palette.primary.main
                },
                zIndex: 1000,
                bgcolor: theme => theme.palette.primary.main
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 3
            }}>
                <Box
                    component='img'
                    src={Logo}
                    height='3rem'
                />
            </Toolbar>
            <Box
                sx={{
                    height: '100%',
                    maxWidth: drawerWidth,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2
                }}
                id="drawer-container"
            >
                <Stack
                    flex={1}
                    spacing={1}
                    direction='column'
                    alignItems='start'
                >
                    {routes.map(item => (
                        <NavLink
                            {...item}
                            isActive={location.pathname.startsWith(item.to)}
                        />
                    ))}
                </Stack>
                <LogoutButton />
            </Box>
        </Drawer>
    )
}


export default Sidebar;
