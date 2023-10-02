import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalStyle";
import { darkTheme } from "@/styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
