import {
    Stack,
    Box,
    List,
    Typography
} from '@mui/material'
import ChatCard from './ChatCard';

const ChatList = () => {
    return (
        <Box sx={{
            color: theme => theme.palette.primary.main,
            height: '100%',
            borderRight: '1px solid #DAE0E6'
        }}>
            <Stack direction='row' spacing={2}>
                <Typography
                    variant="h5"
                    fontWeight={700}
                >
                    Últimos mensajes
                </Typography>
            </Stack>
            <List sx={{ width: '100%' }}>
                <ChatCard
                    data={null}
                    index={1}
                />
            </List>
        </Box>
    );
}

export default ChatList
