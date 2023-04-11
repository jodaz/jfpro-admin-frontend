import * as React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { InputAdornment, IconButton } from '@mui/material';
import { PasswordInputProps } from '../types/forms';
import TextInput from './TextInput';

const PasswordInput: React.FC<PasswordInputProps> = ({
    initiallyVisible = false,
    visibilityIcon,
    visibilityOffIcon,
    disabled,
    ...rest
}) => {
    const [visible, setVisible] = React.useState(initiallyVisible);

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <TextInput
            type={visible ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end" disablePointerEvents={disabled}>
                        <IconButton
                            aria-label={
                                visible
                                    ? 'Mostrar'
                                    : 'Ocultar'
                            }
                            onClick={handleClick}
                        >
                            {visible ? visibilityIcon : visibilityOffIcon}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            disabled={disabled}
            {...rest}
        />
    );
};

PasswordInput.defaultProps = {
    visibilityIcon: <VisibilityIcon />,
    visibilityOffIcon: <VisibilityOffIcon />
}

export default PasswordInput
