import Pages from './pages'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { AuthProvider } from './providers/AuthContext';

const App = () => (
    <AuthProvider>
        <ThemeProvider theme={theme}>
            <Pages />
        </ThemeProvider>
    </AuthProvider>
)

export default App
