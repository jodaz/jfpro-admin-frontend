import * as React from 'react'
import {
    Box,
    Drawer,
    Toolbar,
    Divider,
    Stack
} from "@mui/material";
import LogoutButton from "../components/Buttons/LogoutButton";
import NavLink from "./NavLink";
import SubMenu from './Submenu';
// Icons
import AssessmentIcon from '@mui/icons-material/Assessment';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Logo from '../assets/branding/LOGO_LIGHT.svg'
import PersonIcon from '@mui/icons-material/Person';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CategoryIcon from '@mui/icons-material/Category';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useLocation } from "react-router-dom";
import PrivateRoute from '../components/PrivateRoute';

const drawerWidth = '350px';

const OverviewRoute = {
    title: 'Overview',
    icon: <AssessmentIcon />,
    to: '/overview',
}

const routes = [
    {
        title: 'Ventas',
        icon: <PaymentsIcon />,
        to: '/sales',
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

const usersRoutes = [
    {
        title: 'Premium',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/users/premium',
    },
    {
        title: 'Reportes',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/users/reports',
    },
    {
        title: 'Cuestionarios',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/users/tests',
    },
    {
        title: 'Inactivos',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/users/inactive',
    },
    {
        title: 'Todos los usuarios',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/users/all',
    }
]

const nutritionRoutes = [
    {
        title: 'Personalizados',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/nutrition/custom',
    },
    {
        title: 'Todos',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/nutrition/all',
    }
]

const trainingRoutes = [
    {
        title: 'Personalizados',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/training/custom',
    },
    {
        title: 'Todos',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/training/all',
    }
]

const galleryRoutes = [
    {
        title: 'Ejercicios',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/gallery/exercises',
    },
    {
        title: 'Alimentación',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/gallery/nutrition',
    },
    {
        title: 'Cuestionarios',
        icon: <FiberManualRecordIcon sx={{ height: '10px' }} />,
        to: '/gallery/tests',
    }
]

const Sidebar = () => {
    const location = useLocation();
    const [state, setState] = React.useState({
        users: false,
        nutrition: false,
        training: false,
        gallery: false
    })

    const handleToggle = (menu: string) => {
        //@ts-ignore
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

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
                scrollbarColor: "#E5E5E5 #E5E5E5",
                "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                    backgroundColor: "#E5E5E5",
                    width: '8px',
                },
                "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                    borderRadius: 8,
                    backgroundColor: "#959595",
                    minHeight: 12,
                    border: "1px solid #959595",
                },
                "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                    backgroundColor: "#959595",
                },
                "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                    backgroundColor: "#959595",
                },
                "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#959595",
                },
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
                    p: 2,
                }}
                id="drawer-container"
            >
                <Stack
                    flex={1}
                    spacing={1}
                    direction='column'
                    alignItems='start'
                >
                    <NavLink
                        {...OverviewRoute}
                        isActive={location.pathname.startsWith(OverviewRoute.to)}
                    />
                    <PrivateRoute authorize='administrador'>
                        <SubMenu
                            handleToggle={() => handleToggle('users')}
                            isOpen={state.users}
                            name="Usuarios"
                            icon={<PersonIcon />}
                            isActive={location.pathname.startsWith('/users')}
                        >
                            {usersRoutes.map(item => (
                                <NavLink
                                    {...item}
                                    isActive={location.pathname.startsWith(item.to)}
                                    isSubmenuItem
                                />
                            ))}
                        </SubMenu>
                        <SubMenu
                            handleToggle={() => handleToggle('training')}
                            isOpen={state.training}
                            name="Entrenamiento"
                            icon={<FitnessCenterIcon />}
                            isActive={location.pathname.startsWith('/training')}
                        >
                            {trainingRoutes.map(item => (
                                <NavLink
                                    {...item}
                                    isActive={location.pathname.startsWith(item.to)}
                                    isSubmenuItem
                                />
                            ))}
                        </SubMenu>
                        <SubMenu
                            handleToggle={() => handleToggle('nutrition')}
                            isOpen={state.nutrition}
                            name="Alimentación"
                            icon={<LocalDiningIcon />}
                            isActive={location.pathname.startsWith('/nutrition')}
                        >
                            {nutritionRoutes.map(item => (
                                <NavLink
                                    {...item}
                                    isActive={location.pathname.startsWith(item.to)}
                                    isSubmenuItem
                                />
                            ))}
                        </SubMenu>
                        <SubMenu
                            handleToggle={() => handleToggle('gallery')}
                            isOpen={state.gallery}
                            name="Galería"
                            icon={<CategoryIcon />}
                            isActive={location.pathname.startsWith('/gallery')}
                        >
                            {galleryRoutes.map(item => (
                                <NavLink
                                    {...item}
                                    isActive={location.pathname.startsWith(item.to)}
                                    isSubmenuItem
                                />
                            ))}
                        </SubMenu>
                        <Divider
                            sx={{
                                width: '80%',
                                alignSelf: 'center',
                                marginTop: '1.5rem !important',
                                borderColor: '#343842 !important'
                            }}
                        />
                        {routes.map(item => (
                            <NavLink
                                {...item}
                                isActive={location.pathname.startsWith(item.to)}
                            />
                        ))}
                    </PrivateRoute>
                </Stack>
                <LogoutButton />
            </Box>
        </Drawer>
    )
}


export default Sidebar;
