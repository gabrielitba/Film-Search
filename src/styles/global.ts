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
}

body{
  background: #F4F4F4;
}

body,
input,
button,
textarea {
  font-family: Roboto, sans-serif;
}
`;
