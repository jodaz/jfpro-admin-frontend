import {
    Route,
    Routes
} from 'react-router-dom'
// Pages
import NotFound from './NotFound'
import Login from './Login'
import Overview from './Overview'
import Layout from '../layouts'

const Pages = () => (
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
        <Route
            path='*'
            element={<NotFound />}
        />
    </Routes>
)

export default Pages
