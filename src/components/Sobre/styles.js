import styled from "styled-components";

// Container principal do componente
export const Container = styled.section`
  padding: 50px 20px;
  text-align: center;

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

// Seção principal com imagem e texto
export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* Permite quebra de linha em telas menores */
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
  background-color: #f9a602;
  border-radius: 10px;
  height: 380px;

  .icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
    margin-left: 38%;

    svg {
      font-size: 2.5rem;
      color: #000;
      transition: transform 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.2); /* Efeito ao passar o mouse */
      }
    }

  }

  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 100%;
    margin-bottom: auto;
  }

  .img-logo {
    flex: 1 1 300px; /* Flexibilidade para ajustar a largura */
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-width: 300px;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
    height: 400px;

    .icons{
      width: 11rem;
      margin-left: 40%;
    }
  }
`;

// Texto
export const Text = styled.div`
  flex: 2 1 500px; /* Ajusta largura proporcional */
  text-align: left;

  .text {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    margin-top: -20px;

    p {
      font-size: 19px;
      color: #000;
    }

    span {
      display: flex;
      justify-content: flex-start;

      .download-button {
        background-color: #000;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        transition: background-color 0.3s ease;
        margin-top: 10px;

        &:hover {
          background-color: #fff;
          color: #000;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .text {
      p{
        font-size: 17px;
      }
    }
  }
`;
