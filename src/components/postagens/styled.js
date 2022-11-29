import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  border-bottom: 0.1rem solid ${(props) => props.theme.cinza};
  :hover {
    border-bottom: 0.1rem solid ${(props) => props.theme.amarelo};
  }
  p,
  h4 {
    color: ${(props) => props.theme.cinzaClaro};
  }
`;

export const Data = styled.h4`
  margin-bottom: 2rem;
`;

export const Titulo = styled.h1`
  margin-bottom: 1rem;
`;

export const Paragrafo = styled.p``;
