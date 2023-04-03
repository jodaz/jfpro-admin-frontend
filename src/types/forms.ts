import { InputProps } from '@mui/material';

export interface TextInputProps extends InputProps {
    name: string,
    control: any,
    label?: string,
    rules?: any,
    validations?: any,
    InputProps?: any
}
