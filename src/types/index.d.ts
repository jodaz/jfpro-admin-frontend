import * as React from 'react'
import { AppBarProps } from '@mui/material';
import { User } from './models';

export interface LayoutProps {
    children: React.ReactNode
}

export interface NavLinkProps {
    icon: React.ReactNode,
    to: string,
    isActive: boolean,
    isSubmenuItem?: boolean,
    title: string
}

export interface SubMenuProps extends LayoutProps {
    handleToggle: () => void;
    isOpen: boolean;
    name: string;
    icon: React.ReactNode,
    isActive: boolean
}

export interface AppBarProps extends AppBarProps {
    title: string,
    isSmall: boolean,
    user: User
}

export interface ChatHeaderProps {
    user: User
}
