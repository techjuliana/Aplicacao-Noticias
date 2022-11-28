import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 body {
  background: ${(props) => props.theme.body};
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.text};
 }

 button{
  border-radius: 2rem;
  padding: 1rem;
  font-weight:bold;
 }

 * {
 list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border:none;
  outline: none;
  text-decoration:none;
  color:inherit;
}
`;
