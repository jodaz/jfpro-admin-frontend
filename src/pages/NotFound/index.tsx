import * as React from 'react'
import LinkBehavior from '../../components/LinkBehavior'
import { Button, Box } from '@mui/material'
import { useAuth } from '../../providers/AuthContext';
import Layout from '../../layouts';

interface ContentProps {
    isAuth: boolean
}

const Content: React.FC<ContentProps> = ({ isAuth }) => (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: theme => theme.palette.secondary.main,
        color: theme => theme.palette.primary.main,
        flex: 1,
        height: '100%'
    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            textAlign: 'center',
            justifyContent: 'space-between',
            fontWeight: 500
        }}>
            <Box sx={{
                fontSize: '4rem',
                padding: '1rem 0'
            }}>
                404 - Ups!
            </Box>
            <Box sx={{
                fontSize: '2rem',
                padding: '1rem 0',
                fontWeight: 400
            }}>
                La página que estaba buscando no se encuentra.
            </Box>
            <Box sx={{
                padding: '1rem 0'
            }}>
                <Button
                    to={isAuth ? '/overview' : '/login'}
                    variant="contained"
                    color="primary"
                    component={LinkBehavior}
                >
                    Ir al inicio
                </Button>
            </Box>
        </Box>
    </Box>
)

const NotFound = () => {
    const { state: { isAuth } } = useAuth();

    if (isAuth) {
        return (
            <Layout title="404 - No encontrado">
                <Content isAuth={isAuth} />
            </Layout>
        )
    }

    return <Content isAuth={isAuth} />;
}

export default NotFound;
