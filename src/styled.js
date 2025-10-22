import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --text: #AEB3B8; 
}`;

export const AppContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

  max-width: 90vw;
  box-sizing: border-box;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  
  hr {
    border-radius: 15%;
    background-color: yellow;
    max-width: 15%;
    height: 0.5rem;
    margin-left: 10px;
    border: none;
  }
`;
