import * as React from 'react'
import {
    Navigate,
    Route,
    Routes,
    useLocation,
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
    const location = useLocation()
    const { state: {
        token,
        loading
    }, dispatch: authDispatch } = useAuth()

    const checkAuthStatus = async () => {
        const getUserResponse: any = await getUser(authDispatch)
        const { success } = getUserResponse;

        if (success) {
            if (location.pathname == '/login') {
                navigate('/overview')
            }
        } else {
            navigate('/login')
        }
    }

    React.useEffect(() => {
        if (token) {
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
                element={<Navigate to='/chat/premium' replace />}
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
