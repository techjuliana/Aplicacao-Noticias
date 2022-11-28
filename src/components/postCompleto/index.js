import { Container, Postagem } from "./styled";

export default function PostCompleto({ data, titulo, paragrafo,  titulo2, paragrafo2, lista1, lista2, lista3, lista4, lista5 }) {
  return (
    <div>
      <Container>
        <Postagem>
          <h1>{titulo}</h1>
          <span>{data}</span>
          <span>{paragrafo}</span>
          <h3>{titulo2}</h3>
          <span>{paragrafo2}</span>
          <ul>
            <li>{lista1}</li>
            <li>{lista2}</li>
            <li>{lista3}</li>
            <li>{lista4}</li>
            <li>{lista5}</li>
          </ul>
        </Postagem>
      </Container>
    </div>
  );
}
