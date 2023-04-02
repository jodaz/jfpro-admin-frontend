import './App.css'
import {
    Route,
    Routes
} from 'react-router-dom'
// Pages
import NotFound from './pages/NotFound'

const App = () => (
    <Routes>
        <Route
            path='*'
            element={<NotFound />}
        />
    </Routes>
)
export default App
