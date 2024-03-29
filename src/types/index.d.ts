import * as React from 'react'
import { AppBarProps, DrawerProps, ToggleButtonProps } from '@mui/material';
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
    user: User,
    handleToggle?: () => void;
}

export interface ChatHeaderProps {
    user: User
}

export interface ChatViewProps {
    isPremium?: boolean
}

export interface ChatFormProps extends ChatViewProps {
    canal_id: undefined | string,
    refresh: () => void
}

export interface ToggleButtonProps extends ToggleButtonProps {
    currentPath?: string,
    value: string
}
