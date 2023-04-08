import * as React from 'react'
import {
    Avatar,
    Box,
    Typography,
    Stack
} from "@mui/material"
import { ChatHeaderProps } from '../../types'

const ChatHeader: React.FC<ChatHeaderProps> = ({ user }) => {
    return (
        <Box sx={{
            display: 'flex',
            p: 2,
            bgcolor: theme => theme.palette.secondary.main,
            minHeight: '2.5rem'
        }}>
            <Stack
                direction='row'
                spacing={1}
            >
                <Avatar />
                <Typography
                    variant="h6"
                    color="text.primary"
                >
                    {user.name} {user.lastname}
                </Typography>
            </Stack>
        </Box>
    )
}

export default ChatHeader
