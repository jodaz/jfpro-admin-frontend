import * as React from 'react'
import { LayoutProps } from ".";

export interface PrivateRouteProps extends LayoutProps {
    authorize: string | null;
    unauthorized?: any
}
