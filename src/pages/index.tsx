import {
    Route,
    Routes
} from 'react-router-dom'
// Pages
import NotFound from './NotFound'
import Login from './Login'

const Pages = () => (
    <Routes>
        <Route
            path='/login'
            element={<Login />}
        />
        <Route
            path='*'
            element={<NotFound />}
        />
    </Routes>
)

export default Pages
