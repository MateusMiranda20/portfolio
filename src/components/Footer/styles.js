import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap; /* Permite quebra de linha em telas menores */
  background-color: #f9a602;
  width: 100%;
  padding: 25px;
  margin-top: 20%;

  .card {
    display: flex;
    flex-wrap: wrap; /* Itens quebram em telas menores */
    gap: 20px;
    justify-content: space-around; /* Centraliza itens em telas pequenas */
    text-align: center;
  }

  .footer_button {
    text-decoration: none;
    font-size: 16px;
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: black;
    padding: 15px 20px;
    border-radius: 8px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05); /* Efeito de hover */
    }

    &:active {
      transform: scale(0.95); /* Efeito ao clicar */
    }
  }

  span {
    margin-top: 10px;
    font-size: 14px;
    text-align: center;
    color: white;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .footer_button {
      font-size: 14px;
      padding: 8px 12px;
    }

    span {
      font-size: 12px;
    }
  }

  @media (max-width: 425px) {
    .card {
      flex-direction: row; /* Empilha itens verticalmente */
      gap: 10px;
    }

    .footer_button {
      font-size: 12px;
      padding: 6px 10px;
    }

    span {
      font-size: 10px;
    }
  }
`;
