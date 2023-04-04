import * as React from 'react'
import {
    Box,
    Button,
    Stack
 } from '@mui/material';
import { useForm } from 'react-hook-form';
import { EMAIL, PASSWORD } from '../../utils/validations';
import TextInput from '../../components/TextInput';
import { useNavigate } from 'react-router-dom';
import { loginUser, useAuth } from '../../providers/AuthContext';
import Logo from '../../assets/branding/LOGO_DARK.svg'

type LoginValues = {
    email: string,
    password: string
}

const Login = () => {
    const navigate = useNavigate()
    const { dispatch: authDispatch } = useAuth()
    const { control, handleSubmit, setError, formState: {
        isSubmitting
    }} = useForm<LoginValues>();

    const onSubmit = React.useCallback(async (values: LoginValues) => {
        const loginUserResponse: any = await loginUser(authDispatch, values);

        const { status, data, success } = loginUserResponse;

        if (success) {
            navigate('/overview')
        } else {
            if (status == 422) {
                setError('email', {
                    type: 'invalid'
                })
            }
        }
    }, []);

    return (
        <Box sx={{
            height: '100%',
            width: '100%',
            bgcolor: theme => theme.palette.primary.main,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box sx={{
                bgcolor: '#fff',
                minWidth: '320px',
                borderRadius: '15px'
            }}>
                <Box
                    component="form"
                    sx={{ m: 1, flex: 1 }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Stack
                        spacing={4}
                        direction='column'
                        p={3}
                    >
                        <Box component='img' src={Logo} />
                        <TextInput
                            label='Email'
                            name='email'
                            control={control}
                            disabled={isSubmitting}
                            placeholder='Ingresar email'
                            type='email'
                            validations={EMAIL.messages}
                            rules={EMAIL.rules}
                            fullWidth
                        />
                        <TextInput
                            label='Contraseña'
                            name='password'
                            control={control}
                            disabled={isSubmitting}
                            placeholder='Ingresar contraseña'
                            type='password'
                            validations={PASSWORD.messages}
                            rules={PASSWORD.rules}
                            fullWidth
                        />
                        <Button
                            fullWidth
                            color='primary'
                            variant="contained"
                            type='submit'
                        >
                            Iniciar sesión
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;
