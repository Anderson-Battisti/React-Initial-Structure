import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router.tsx";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
