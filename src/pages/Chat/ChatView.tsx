import * as React from 'react'
import { Box } from "@mui/material"
import ChatHeader from "./ChatHeader"
import MessagesList from "./MessagesList"
import ChatForm from "./ChatForm"
import { apiProvider } from '../../api'
import { useParams } from 'react-router-dom'

const ChatView = () => {
    const { chat_id } = useParams()
    const [chat, setChat] = React.useState<any>(null)

    const fetchChats = async () => {
        try {
            const response = await apiProvider.get(`/admin/show-canal/${chat_id}`)

            if (response.status >= 200 && response.status < 300) {
                const { data } = response

                setChat(data)
            }
        } catch (error: any) {
            if (error.response.status >= 400 && error.response.status < 500) {

                return {
                    success: false,
                    status: error.response.status,
                    data: error.response.data.errors
                };
            }
        }
    };

    React.useEffect(() => { fetchChats() }, [])

    if (!chat) return null;

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
            <ChatHeader user={chat?.user} />
            <MessagesList messages={chat.mensajes} />
            <ChatForm canal_id={chat_id} />
        </Box>
    )
}

export default ChatView
