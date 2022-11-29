import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin: 5rem;
  justify-content: space-evenly;
  flex-direction: row;
  span {
    color: ${(props) => props.theme.azul};
  }
  @media (max-width: 800px) {
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  }
`;
export const Esquerda = styled.section`
  margin-top: 4rem;
`;

export const Direita = styled.section``;

export const ReactImagem = styled.img`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Palmas = styled.img`
  margin-right: 0.5rem;
`;

export const Titulo = styled.h1`
  width: 30rem;
  font-size: 3.4rem;
`;

export const Subtitulo = styled.p`
  width: 18rem;
  margin-top: 1rem;
`;

export const Bemvindo = styled.h4`
  margin-bottom: 2.4rem;
`;

export const Inscreva = styled.button`
  margin-top: 2rem;
  background: ${(props) => props.theme.amarelo};
  color: ${(props) => props.theme.body};
`;
