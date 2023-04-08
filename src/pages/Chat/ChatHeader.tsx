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
            bgcolor: theme => theme.palette.secondary.main
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
                    {user.name} {user.lastname}
                </Typography>
            </Stack>
        </Box>
    )
}

export default ChatHeader
