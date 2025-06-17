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
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    width: 95%; /* Largura padrão para três cards lado a lado */
    min-width: 120px; /* Largura mínima para garantir boa visualização */
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
    }

    img {
      max-width: 800px;
      width: 50%;
      height: 55vh;
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

  @media (max-width: 778px) {
    .card {
      display: flex;
      flex-direction: column; /* Coloca os cards em coluna em telas pequenas */


      .text{
        width: 100%; /* Texto ocupa toda a largura em telas menores */
        text-align: center; /* Centraliza o texto */
      }

      img{
        width: 100%; /* Imagem ocupa toda a largura em telas menores */
        height: auto; /* Mantém a proporção da imagem */
        padding: 5px 18px;
        border-radius: 10px;
      }

      button{
        right: 15rem;
      }
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 100%; /* Largura total em telas muito pequenas */
      padding: 10px; /* Ajusta o padding para telas pequenas */

      button {
        right: 0; /* Centraliza o botão em telas pequenas */
        margin-top: 10px; /* Espaço entre o botão e o texto */
        font-size: 10px;
      }
    }
  }
  
  @media (max-width: 320px) {
    .card {

      button{
        right: 0; /* Centraliza o botão em telas muito pequenas */
      }
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