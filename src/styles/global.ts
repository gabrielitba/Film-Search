import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
	padding: 0;
	border: none;
	outline: none;
}

body{
  overflow-x: hidden;
  background: #fff;

&::-webkit-scrollbar {
 width: 10px;
 height: 10px;
}
&::-webkit-scrollbar-thumb {
 background: #b8b1b1;
 border-radius: 10px;
}

&::-webkit-scrollbar-track{
 background: #ffffff;
 border-radius: 10px;
 box-shadow: inset 7px 10px 12px #f0f0f0;
}
}

body,
input,
button,
textarea {
  font-family: Roboto, sans-serif;
}
`;
