import styled from "styled-components";

// Container principal
export const Container = styled.section`
  padding: 50px 20px;
  text-align: center;
  background: #f5f5f5;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #333;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

// Área dos cards
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  //flex-wrap: wrap; /* Permite os cards se ajustarem em telas menores */
  max-width: 1200px;
  margin: 0 auto;

  .card {
    background-color: #f9a602;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 100%; /* Largura padrão para três cards lado a lado */
    min-width: 600px; /* Largura mínima para garantir boa visualização */
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;

    img {
      width: 50%;
      height: auto;
      border-radius: 10px;
      margin-bottom: 15px;
    }

    p {
      font-size: 1.5rem;
      font-weight: bold;
      color: #000;
      margin: 10px 0;
    }

    span {
      font-size: 1rem;
      color: #000;
      margin-bottom: 20px;
    }

    button {
      margin-top: auto;
      background-color: #000;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
      }

      &:hover{
        transform: scale(1.05); /* Efeito de hover */
      }
    }
  }

  /* Responsividade */
  @media (max-width: 1024px) {
    .card {
      width: 45%; /* Dois cards lado a lado em telas médias */
    }
  }

  @media (max-width: 768px) {
    .card {
      width: 100%; /* Um card por linha em telas menores */
    }
  }
`;
