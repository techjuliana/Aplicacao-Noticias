import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10%;
`;

export const Postagem = styled.div`
  margin: 2rem;
  padding-bottom: 2rem;
  span {
    color: ${(props) => props.theme.cinzaClaro};
  }
`;

export const Data = styled.h4`
  padding-bottom: 2rem;
  color: ${(props) => props.theme.cinzaClaro};
`;

export const Paragrafo = styled.span``;

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
  color: ${(props) => props.theme.cinzaClaro};
  
`;
