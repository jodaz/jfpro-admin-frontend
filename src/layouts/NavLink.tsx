import * as React from 'react'
import { NavLinkProps } from "../types";
import LinkBehavior from '../components/LinkBehavior';
import { Button, Tooltip } from '@mui/material';

const NavLink: React.FC<NavLinkProps> = ({ icon, to, title, isActive }) => {
    return (
        <Tooltip key={title} title={title}>
            <Button
                component={LinkBehavior}
                to={to}
                startIcon={icon}
                color='secondary'
                fullWidth
                sx={{
                    justifyContent: 'start',
                    backgroundColor: isActive ? '#343842' : 'unset'
                }}
            >
                {title}
            </Button>
        </Tooltip>
    );
}

export default NavLink
