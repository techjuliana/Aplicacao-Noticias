
import emoji from "./../../assets/rosto.svg"
import {
  Container,
  Postagem,
  Data,
  Titulo,
  Paragrafo,
  Titulo2,
  Lista,
  LerMais,
  Botao,
  Emoji,
} from "./styled";

export default function PostCompleto({
  data,
  titulo,
  paragrafo,
  titulo2,
  paragrafo2,
  lista1,
  lista2,
  lista3,
  lista4,
  lista5,
}) {
  return (
    <div>
      <Container>
        <Postagem>
          <Titulo>{titulo}</Titulo>
          <Data>{data}</Data>
          <Paragrafo>{paragrafo}</Paragrafo>
          <LerMais>
            <Titulo2>{titulo2}</Titulo2>
            <Paragrafo>{paragrafo2}</Paragrafo>
            <ul>
              <Lista>{lista1}</Lista>
              <Lista>{lista2}</Lista>
              <Lista>{lista3}</Lista>
              <Lista>{lista4}</Lista>
              <Lista>{lista5}</Lista>
            </ul>
          </LerMais>
          <Botao>
            Quer continuar lendo? 
            <span> Inscreva-se agora <Emoji src={emoji} alt="" /> </span>
          </Botao>
        </Postagem>
      </Container>
    </div>
  );
}
