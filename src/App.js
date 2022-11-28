import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/home";
import DetalhesPost from "./pages/detalhesPost";
import Postagem from "./pages/postagem";
import { tema } from "./theme/theme";
import Header from "./components/header";
function App() {
  return (
    <ThemeProvider theme={tema}>
      <GlobalStyles />
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/postagem" element={<Postagem />} />
        <Route path="/detalhesPost/:id" element={<DetalhesPost />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
