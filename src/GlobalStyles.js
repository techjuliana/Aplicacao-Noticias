import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 body {
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.body};
  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme.text};
 }

 button{
  border-radius: 2rem;
  padding: 1rem;
  font-weight:bold;
  cursor: pointer;
 }

 * {
 ${"" /* list-style: none; */}
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border:none;
  outline: none;
  text-decoration:none;
  color:inherit;
}

`;
