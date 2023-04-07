import * as React from 'react'
import {
    Navigate,
    Route,
    Routes,
    useNavigate
} from 'react-router-dom'
// Pages
import NotFound from './NotFound'
import Login from './Login'
import Overview from './Overview'
import Layout from '../layouts'
import { getUser, useAuth } from '../providers/AuthContext'

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
            <Route path='/' element={<Navigate to='/login' replace />} />
            <Route
                path='*'
                element={<NotFound />}
            />
        </Routes>
    )
}

export default Pages
