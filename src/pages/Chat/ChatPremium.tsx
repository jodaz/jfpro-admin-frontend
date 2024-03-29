import * as React from 'react'
import Chat from "../../layouts/Chat"
import SelectChatAlert from './SelectChatAlert'
import { apiProvider } from '../../api'

const ChatPremium: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [chats, setChats] = React.useState([null])

    const fetchChats = async () => {
        try {
            const response = await apiProvider.get('/admin/get-chats-by-suscriptions')

            if (response.status >= 200 && response.status < 300) {
                const { data } = response
                setChats(data)
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

    return (
        <Chat chats={chats} route='/chat/premium'>
            {children}
        </Chat>
    )
}

ChatPremium.defaultProps = {
    children: <SelectChatAlert />
}

export default ChatPremium
