import * as React from 'react'
import {
    Box,
    Stack
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { EMAIL, PASSWORD } from '../../utils/validations';
import TextInput from '../../components/TextInput';
import PasswordInput from '../../components/PasswordInput';
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

        const { status, success } = loginUserResponse;

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
                width: { xs: '300px', sm: '320px', md: '360px', lg: '460px' },
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
                        p={4}
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
                        <PasswordInput
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
                        <LoadingButton
                            fullWidth
                            color='primary'
                            variant="contained"
                            type='submit'
                            loading={isSubmitting}
                        >
                            Iniciar sesión
                        </LoadingButton>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

export default Login;
