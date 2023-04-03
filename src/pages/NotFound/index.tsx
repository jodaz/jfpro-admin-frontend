import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import LinkBehavior from '../../components/LinkBehavior'

const NotFound = () => (
    <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
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
                    to="/"
                    variant="contained"
                    color="secondary"
                    component={LinkBehavior}
                >
                    Ir al inicio
                </Button>
            </Box>
        </Box>
    </Box>
);

export default NotFound;
