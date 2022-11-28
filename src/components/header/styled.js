import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  padding:1rem;
  justify-content: space-between;
  flex-direction: row;
`;

export const Links = styled.div`
`;


export const Entrar = styled.button`
margin:1rem;
  background:${(props) => props.theme.buttonCard};
`;
