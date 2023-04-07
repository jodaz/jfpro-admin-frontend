import * as React from 'react'

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
