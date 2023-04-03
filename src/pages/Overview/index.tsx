import {
    useMediaQuery,
    useTheme,
    Box
} from '@mui/material';

const Overview = () => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            bgcolor: theme => theme.palette.secondary.main
        }}>
        </Box>
    );
}

export default Overview
