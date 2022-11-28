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
