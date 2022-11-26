import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
// import Header from "./../src/components/header"
import { tema } from "./theme/theme";
function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
