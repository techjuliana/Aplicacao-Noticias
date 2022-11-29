import { Container, Entrar, Links, Logo, Github } from "./styled";
import Ig from "./../../assets/ig.svg";
import github from "./../../assets/github.svg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Container>
      <Links>
        <Logo src={Ig} alt="pais" />

        <Link to="/">
          <h4>Home</h4>
        </Link>

        <Link to="/postagem">
          <h4>Postagens</h4>
        </Link>
      </Links>
      <Entrar>
        <a href="https://github.com/login">
          <Github src={github} alt="" />
          Entrar com GitHub
        </a>
      </Entrar>
    </Container>
  );
}
