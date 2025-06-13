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
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  //flex-wrap: wrap; /* Permite os cards se ajustarem em telas menores */
  max-width: 1200px;
  margin: 0 auto;

  .card {
    background-color: #f9a602;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    width: 95%; /* Largura padrão para três cards lado a lado */
    min-width: 500px; /* Largura mínima para garantir boa visualização */
    text-align: center;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      width: 50%; /* Largura do texto */
      color: #000;

      @media (max-width: 768px) {
        width: 100%; /* Texto ocupa toda a largura em telas menores */
        text-align: center; /* Centraliza o texto */
      } 
    }

    img {
      max-width: 800px;
      width: 50%;
      height: 39vh;
      border-radius: 10px;
      margin:0 7px;
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
      text-align: left;
      line-height: 1.4;
    }

    button {
      position: relative;
      right: 11.2rem;
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


export const Skills = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SkillTag = styled.span`
  background-color:rgb(209, 209, 209);
  border-radius: 16px;
  padding: 7px 5px;
  font-size: 0.9rem;
  color: #fff;
  margin-top: 3px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;