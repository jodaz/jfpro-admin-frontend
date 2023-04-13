import * as React from 'react'
import { Box } from "@mui/material"
import ChatHeader from "./ChatHeader"
import MessagesList from "./MessagesList"
import ChatForm from "./ChatForm"
import { apiProvider } from '../../api'
import { useParams } from 'react-router-dom'
import { ChatViewProps } from '../../types'

const ChatView: React.FC<ChatViewProps> = ({ isPremium }) => {
    const { chat_id } = useParams()
    const [chat, setChat] = React.useState<any>(null)
    const [messages, setMessages] = React.useState<any>(null)

    const fetchChats = async () => {
        try {
            const response = await apiProvider.get(isPremium
                ? `/admin/get-chats-by-suscription/${chat_id}`
                :`/admin/show-canal/${chat_id}`
            )

            if (response.status >= 200 && response.status < 300) {
                const { data } = response

                setChat(data)

                if (data.messages) {
                    setMessages(data.messages)
                } else {
                    setMessages(data.mensajes)
                }
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

    React.useEffect(() => {
        fetchChats();
    }, [chat_id])

    React.useEffect(() => {
        const interval = setInterval(() => fetchChats(), 40 * 1000);

        return () => {
            clearTimeout(interval);
        };
    }, [])

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
            <MessagesList isPremium={isPremium} messages={messages} />
            <ChatForm
                canal_id={chat_id}
                isPremium={isPremium}
            />
        </Box>
    )
}

export default ChatView
