import * as React from 'react'
import { IconButton, Tooltip } from '@mui/material';
import LinkBehavior from './LinkBehavior';

interface LinkIconButtonProps {
    title: string,
    to: string,
    children: React.ReactNode
}

const LinkIconButton: React.FC<LinkIconButtonProps> = ({
    title,
    to,
    children
}) => (
    <Tooltip title={title}>
        <IconButton
            component={LinkBehavior}
            to={to}
            color='primary'
        >
            {children}
        </IconButton>
    </Tooltip>
);

export default LinkIconButton;
