import type { FC } from 'react'
import { TextInputProps } from '../types/forms';
import InputBase from '@mui/material/InputBase';
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import { Controller } from "react-hook-form";
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';

const Input = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(2),
    }
}));

/**
 *
 * @param {*} param0
 * @returns
 */
const TextInput: FC<TextInputProps> = ({
    control,
    name,
    defaultValue,
    rules,
    type,
    validations,
    placeholder,
    InputProps,
    disabled,
    sx,
    label,
    id,
    ...rest
}) => (
    <FormControl>
        {label && <InputLabel shrink>{label}</InputLabel>}
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <>
                    <Input
                        {...field}
                        placeholder={placeholder}
                        type={type}
                        error={error != undefined}
                        {...InputProps}
                        disabled={disabled}
                        sx={{
                            ...sx,
                            'error': {
                                border: '1px solid red !important'
                            }
                        }}
                        id={id}
                        {...rest}
                    />
                    {!!(error && validations) && (
                        <FormHelperText error>
                            {validations[error.type]}
                        </FormHelperText>
                    )}
                </>
            )}
        />
    </FormControl>
);

export default TextInput;
