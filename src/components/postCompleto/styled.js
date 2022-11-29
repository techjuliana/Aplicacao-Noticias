import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 43rem;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Postagem = styled.div`
  margin: 2rem;
  padding-bottom: 2rem;
  p,
  li,
  h4 {
    color: ${(props) => props.theme.cinzaClaro};
  }
`;

export const Data = styled.h4`
  padding-bottom: 2rem;
`;

export const Paragrafo = styled.p``;

export const Titulo = styled.h1`
  margin-bottom: 3rem;
`;

export const Titulo2 = styled.h3`
  margin-bottom: 2rem;
  margin-top: 4rem;
`;

export const Lista = styled.li`
  margin-bottom: 1rem;
  margin-top: 2rem;
`;
