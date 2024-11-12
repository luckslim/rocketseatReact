import {ThemeProvider} from 'styled-components';
import { defaultTheme } from './components/styles/themes/default';
import { GlobalStyle } from './components/styles/themes/global';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <Router/> 
      </BrowserRouter>
    <GlobalStyle/>
    </ThemeProvider>
  )
}
