import styled from "styled-components";

export const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 5rem;
  background: #f5f5f5;
  min-height: 100vh;
  
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  max-width: 1500px;
  width: 100%;

  @media (max-width: 790px) {
    display: flex;
    flex-direction: column;
    align-items: center; 
    font-size: 1rem;
  }

  @media (max-width: 375px) {
    padding: 1rem;
  }
  
  @media (max-width: 320px) {
    padding: 10px;
  }
`;


export const Text = styled.div`
  flex: 1;
  max-width: 1000px;
  padding: 2rem;

  p {
    font-size: 1.5rem;
    color: #777;
    line-height: 1.5;
  }

  span {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    
    a {
      text-decoration: none;
      color: #000;
    }

    .download-button,
    .linkedin {
      padding: 0.8rem 1.5rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      background-color: #777;
      transition: background 0.3s ease;

      &:hover {
        background-color: #f9a602;
      }
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }

    .download-button,
    .linkedin {
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
    }
  }

@media (max-width: 375px) {
    p{
      font-size: 1rem;
    }
  }
  
`;

export const Img = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 425px) {
    width: 200px;
    height: 200px;
  }
`;
