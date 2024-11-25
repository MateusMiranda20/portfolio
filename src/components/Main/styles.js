import styled from "styled-components";

export const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 5rem;
  background: #f5f5f5;
  min-height: 100vh;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    max-width: 1200px;
    width: 100%;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 3rem;
    }
  }
`;

export const LeftSection = styled.div`
  flex: 1;
`;

export const Text = styled.div`
  flex: 1;
  max-width: 600px;

  h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;

    span {
      color: #f9a602;
    }
  }

  h3 {
    font-size: 1.8rem;
    color: #666;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #777;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  span {
    display: flex;
    gap: 1rem;

    a {
      text-decoration: none;
    }

    .download-button,
    .linkedin {
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      color: #fff;
      background-color: #333;
      transition: background 0.3s ease;

      &:hover {
        background-color: #f9a602;
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }

    .download-button,
    .linkedin {
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
    }
  }
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 425px) {
    width: 200px;
    height: 200px;
  }
`;
