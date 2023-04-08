import {
    Avatar,
    Box,
    Typography,
    Stack
} from "@mui/material"

const ChatHeader = () => {
    return (
        <Box sx={{
            display: 'flex',
            p: 2
        }}>
            <Stack
                direction='row'
                spacing={1}
            >
                <Avatar />
                <Typography
                    variant="subtitle1"
                    color="text.primary"
                    fontWeight={400}
                >
                    Pablo Almao
                </Typography>
            </Stack>
        </Box>
    )
}

export default ChatHeader
