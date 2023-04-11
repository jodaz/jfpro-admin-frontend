import * as React from 'react'
import { InputProps } from '@mui/material';

export interface TextInputProps extends InputProps {
    name: string,
    control: any,
    label?: string,
    rules?: any,
    validations?: any,
    InputProps?: any
}

export interface PasswordInputProps extends TextInputProps {
    initiallyVisible?: boolean,
    visibilityIcon?: React.ReactNode,
    visibilityOffIcon?: React.ReactNode
}

