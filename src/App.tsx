import Pages from './pages'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const App = () => (
    <ThemeProvider theme={theme}>
        <Pages />
    </ThemeProvider>
)

export default App
