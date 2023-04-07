import * as React from 'react';
import {
    List,
    Button,
    Collapse,
    Tooltip
} from '@mui/material'
// icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// Types
import { SubMenuProps } from '../types';

const SubMenu: React.FC<SubMenuProps> = ({
    handleToggle,
    isOpen,
    name,
    children,
    icon,
    isActive
}) => {
    const header = (
        <Button
            startIcon={icon}
            onClick={handleToggle}
            endIcon={isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            color='secondary'
            sx={{
                justifyContent: 'start',
                backgroundColor: isActive ? '#343842' : 'unset'
            }}
        >
            {name}
        </Button>
    );

    return (
        <React.Fragment>
            <Tooltip title={name} placement="right">
                {header}
            </Tooltip>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List
                    component="div"
                    disablePadding
                    sx={{ paddingLeft: '2rem' }}
                >
                    {children}
                </List>
            </Collapse>
        </React.Fragment>
    );
};

export default SubMenu;
