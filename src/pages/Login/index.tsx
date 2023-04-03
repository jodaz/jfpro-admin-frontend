import * as React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { EMAIL, PASSWORD } from '../../utils/validations';
import TextInput from '../../components/TextInput';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

type LoginValues = {
    email: string,
    password: string
}

const Login = () => {
    const navigate = useNavigate()
    const { control, handleSubmit, setError, formState: {
        isSubmitting
    }} = useForm<LoginValues>();

    const onSubmit = React.useCallback((values: LoginValues) => {
        console.log(values)
        navigate('/overview')
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
                <Box component="form" sx={{ m: 1, flex: 1 }} onSubmit={handleSubmit(onSubmit)}>
                    <Stack
                        spacing={3}
                        direction='column'
                        p={3}
                    >
                        <Box>
                            <Typography
                                color="text.primary"
                                variant="h4"
                            >
                                JFPRO
                            </Typography>
                        </Box>
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
