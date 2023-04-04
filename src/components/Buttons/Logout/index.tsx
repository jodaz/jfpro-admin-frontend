import { Button, Box } from '@mui/material';
import { useAuth, logout } from '../../../providers/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

const LogoutButton = () => {
    const navigate = useNavigate()
    const { dispatch } = useAuth()

    const handleClick = () => {
        navigate('/login')
        logout(dispatch)
    }

    return (
        <Box alignSelf='end'>
            <Button color="secondary" onClick={handleClick}>
                <Logout /> Cerrar sesión
            </Button>
        </Box>
    );
}

export default LogoutButton;
