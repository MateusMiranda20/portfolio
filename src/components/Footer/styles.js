import styled from "styled-components";

export const Container = styled.section`
    padding: 400px 0 0 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
`

export const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #F9A602;
  width: 100%;
  height: 100px;

  .card{
    display: flex;
    flex-direction: row;
    text-align: center;
    margin: auto;
    gap: 30px;
  }

  .footer_button{
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    color: white;
    display: flex;
    gap: 5px;
    background-color: black;
    padding: 10px;
    border-radius: 8px; 
  }

  a:active{
    transform: scale(0.99);   /* Simula um "pressionar" no clique */
  }

  p{
    text-align: center;

  }

  span{
    display: flex;
    align-items: center;
    margin-left: 18rem;
  }

  @media (max-width: 768px){
    width: 100%;
    height: 90px;

    .footer_button{
      text-decoration: none;
      text-align: center;
      font-size: 13px;
      color: white;
      display: flex;
      background-color: black;
      border-radius: 8px; 
    }

    p{
      text-align: center;
    }

    span{
      display: flex;
      align-items: center;
      margin-left: 8rem;
    }
  
  }
`
