import { Container, Postagem, Data, Titulo, Paragrafo } from "./styled";

export default function Postagens({
  data,
  titulo,
  subtitulo,
  data2,
  titulo2,
  subtitulo2,
  data3,
  titulo3,
  subtitulo3,
  data4,
  titulo4,
  subtitulo4,
}) {
  return (
    <div>
      <Container>
        <Postagem>
          <Data>{data}</Data>
          <Titulo>{titulo}</Titulo>
          <Paragrafo>{subtitulo}</Paragrafo>
        </Postagem>
        <Postagem>
          <Data>{data2}</Data>
          <Titulo>{titulo2}</Titulo>
          <Paragrafo>{subtitulo2}</Paragrafo>
        </Postagem>
        <Postagem>
          <Data>{data3}</Data>
          <Titulo>{titulo3}</Titulo>
          <Paragrafo>{subtitulo3}</Paragrafo>
        </Postagem>
        <Postagem>
          <Data>{data4}</Data>
          <Titulo>{titulo4}</Titulo>
          <Paragrafo>{subtitulo4}</Paragrafo>
        </Postagem>
      </Container>
    </div>
  );
}
