import * as React from 'react'
import {
    Navigate,
    Route,
    Routes
} from 'react-router-dom'
// Pages
import NotFound from './NotFound'
import Login from './Login'
import Overview from './Overview'
import Layout from '../layouts'
import { getUser, useAuth } from '../providers/AuthContext'

const Pages = () => {
    const { state: { isAuth, token }, dispatch: authDispatch } = useAuth()

    React.useEffect(() => {
        if (!isAuth && token) {
            getUser(authDispatch)
        }
    }, [])

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
