import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 0.1rem solid ${(props) => props.theme.cinza};
`;

export const Links = styled.div``;

export const Entrar = styled.button`
  background: ${(props) => props.theme.cinza};
`;
