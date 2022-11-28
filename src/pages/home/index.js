import {
  Container,
  Titulo,
  Subtitulo,
  Bemvindo,
  Inscreva,
  Esquerda,
  Direita,
  ReactImagem,
  Palmas,
} from "./styled";
import mulher from "./../../assets/mulher.svg";
import palmas from "./../../assets/palmas.svg";
export default function Home() {
  return (
    <div>
      <Container>
        <Esquerda>
          <Bemvindo>
            <Palmas src={palmas} alt="" />
            Ei, bem-vindo
          </Bemvindo>
          <Titulo>
            Notícias sobre o mundo <span>React</span>
          </Titulo>
          <Subtitulo>
            Tenha acesso a todas as publicações
            <span> por $ 9,90 mês</span>
          </Subtitulo>
          <Inscreva>Inscreva-se agora</Inscreva>
        </Esquerda>
        <Direita>
          <ReactImagem src={mulher} alt="pais" />
        </Direita>
      </Container>
    </div>
  );
}
