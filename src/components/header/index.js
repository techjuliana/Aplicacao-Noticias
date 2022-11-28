import { Container, Entrar, Links } from "./styled";
import Ig from "./../../assets/ig.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Container>
    <Links>
      <img src={Ig} alt="pais" />
      <Link to="/">Home</Link>
      <Link to="/postagem">Postagens</Link>
      </Links>
      <Entrar>Entrar com GitHub</Entrar>
    </Container>
  );
}
