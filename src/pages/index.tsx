import * as React from 'react'
import {
    Navigate,
    Route,
    Routes,
    useNavigate
} from 'react-router-dom'
import { getUser, useAuth } from '../providers/AuthContext'
// Pages
import NotFound from './NotFound'
import Login from './Login'
import Overview from './Overview'
import Layout from '../layouts'
import ChatFree from './Chat/ChatFree'
import ChatPremium from './Chat/ChatPremium'
import ChatView from './Chat/ChatView'

const Pages = () => {
    const navigate = useNavigate()
    const { state: {
        isAuth,
        token,
        loading
    }, dispatch: authDispatch } = useAuth()

    const checkAuthStatus = async () => {
        const getUserResponse: any = await getUser(authDispatch)
        const { success } = getUserResponse;

        if (success) {
            navigate('/overview')
        }
    }

    React.useEffect(() => {
        if (!isAuth && token) {
            checkAuthStatus()
        }
    }, [])

    if (!loading) return <></>

    return (
        <Routes>
            <Route
                path='/login'
                element={<Login />}
            />
            <Route
                path='/overview'
                element={
                    <Layout title="Overview">
                        <Overview />
                    </Layout>
                }
            />

            {/**
             * Chat routes
             */}
            <Route
                path='/chat'
                element={<Navigate to='/chat/channels' replace />}
            />
            <Route
                path='/chat/channels'
                element={
                    <Layout title="Mensajes">
                        <ChatFree />
                    </Layout>
                }
            />
            <Route
                path='/chat/premium'
                element={
                    <Layout title="Mensajes">
                        <ChatPremium />
                    </Layout>
                }
            />
            <Route
                path='/chat/premium/:chat_id'
                element={
                    <Layout title="Mensajes">
                        <ChatPremium>
                            <ChatView isPremium />
                        </ChatPremium>
                    </Layout>
                }
            />
            <Route
                path='/chat/channels/:chat_id'
                element={
                    <Layout title="Mensajes">
                        <ChatFree>
                            <ChatView />
                        </ChatFree>
                    </Layout>
                }
            />

            <Route path='/' element={<Navigate to='/login' replace />} />
            <Route
                path='*'
                element={<NotFound />}
            />
        </Routes>
    )
}

export default Pages
