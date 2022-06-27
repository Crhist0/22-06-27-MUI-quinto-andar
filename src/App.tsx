import { ThemeProvider } from '@mui/material/styles';
import Routers from './Routers';
import StylesGlobal from './config/styles/GlobalStyles';
import themeDefault from './config/styles/themes/Default';

export default function App() {
    return (
        <ThemeProvider theme={themeDefault}>
            <StylesGlobal/>
            <Routers/>
        </ThemeProvider>
    );
}