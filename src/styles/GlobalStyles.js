import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  body::-webkit-scrollbar{
    width: 6px;
  }

  body::-webkit-scrollbar-track{
    background-color:  #F9A602 ;

  }

  body::-webkit-scrollbar-thumb{
    background-color:  #000 ;
  }

`