import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
	padding: 0;
	border: none;
	outline: none;
	list-style: none;
  /* overflow: visible; */
}

body{
  background: #F4F4F4;
  &::-webkit-scrollbar {
  display: none;
 }
}

body,
input,
button,
textarea {
  font-family: Roboto, sans-serif;
}
`;
