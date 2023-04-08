import { Box } from "@mui/material"
import ChatHeader from "./ChatHeader"
import MessagesList from "./MessagesList"
import ChatForm from "./ChatForm"

const ChatView = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: '#E6EBEF',
                height: '100%',
                width: '100%'
            }}
        >
            <ChatHeader />
            <MessagesList />
            <ChatForm />
        </Box>
    )
}

export default ChatView
