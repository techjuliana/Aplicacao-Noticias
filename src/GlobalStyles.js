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
  :hover {
    border: 0.1rem solid ${(props) => props.theme.amarelo};
  }
 }

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border:none;
  outline: none;
  text-decoration:none;
  color:inherit;
}

li {
  list-style-type: none;
  position:relative;
  margin-bottom:0.5em;
}
li:before {
  content: '•';
  display: inline-block;
  position: absolute;
  left: -1em;
  color:${(props) => props.theme.amarelo};
}

`;
