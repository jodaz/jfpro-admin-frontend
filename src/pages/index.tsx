import {
    Route,
    Routes
} from 'react-router-dom'
// Pages
import NotFound from './NotFound'

const Pages = () => (
    <Routes>
        <Route
            path='*'
            element={<NotFound />}
        />
    </Routes>
)

export default Pages
