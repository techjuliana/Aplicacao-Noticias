import { Container, Postagem } from "./styled";

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
          <span>{data}</span>
          <h1>{titulo}</h1>
          <span>{subtitulo}</span>
        </Postagem>
        <Postagem>
          <span>{data2}</span>
          <h1>{titulo2}</h1>
          <span>{subtitulo2}</span>
        </Postagem>
        <Postagem>
          <span>{data3}</span>
          <h1>{titulo3}</h1>
          <span>{subtitulo3}</span>
        </Postagem>
        <Postagem>
          <span>{data4}</span>
          <h1>{titulo4}</h1>
          <span>{subtitulo4}</span>
        </Postagem>
      </Container>
    </div>
  );
}
