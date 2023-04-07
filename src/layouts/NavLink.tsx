import * as React from 'react'
import { NavLinkProps } from "../types";
import LinkBehavior from '../components/LinkBehavior';
import { Button, Tooltip } from '@mui/material';

const NavLink: React.FC<NavLinkProps> = ({ icon, to, title, isActive, isSubmenuItem }) => {
    return (
        <Tooltip key={title} title={title}>
            <Button
                component={LinkBehavior}
                to={to}
                startIcon={icon}
                color='secondary'
                fullWidth
                variant='text'
                sx={{
                    justifyContent: 'start',
                    backgroundColor: (isActive && !isSubmenuItem) ? '#343842' : 'unset',
                    color:  (!isActive && isSubmenuItem)
                        ? '#757E8A' : (isActive && isSubmenuItem) ? '#fff' : '#fff'
                }}
            >
                {title}
            </Button>
        </Tooltip>
    );
}

export default NavLink
