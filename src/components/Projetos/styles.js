import styled from "styled-components";

export const Container = styled.section`
    padding: 90px 0 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;

    h1{
        text-align: center;
        margin: auto;
        padding: 0 0 40px 0 ;
    }

    @media (max-width: 425px){
      h1{
        text-align: center;
        margin-left: 22rem ;
        margin-top: 12rem;
      }
    }

`

export const Section = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  flex-direction: row;

  @media (max-width: 425px){
    display: flex;
    flex-direction: column;
    margin-left: 23rem;
  }

  .card{
    width: 350px;
    height: 320px;
    background-color: #F9A602;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width:1024px){
      width: 16rem;
      height: 20rem;
      gap: 4px;
    }

    @media (max-width:768px){
      width: 11rem;
      height: 14rem;
      gap: 4px;
    }

    @media (max-width: 425px){
      width: 25rem;
    }
  }

  p{
    margin-top: 20px;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
  }

  span{
    text-align: center;
    font-size: 18px;
  }

  img{
    width: 90% ;
    border-radius: 10px 10px 0 0;
    margin: 10px 20px;
  }

  button{
    padding: 5px;
    width: 9rem;
    height: 2rem;
    margin: auto;
    border-radius: 10px;
    border: none;
    background-color: #000;
    cursor: pointer;

    a {
      text-decoration: none;
      font-weight: 700;
      color: white;
    }
  }

  @media (max-width:1024px){
    img{
      width: 220px;
      border-radius: 10px 10px 0 0;
      margin: 10px 20px;
    }

    button{
      padding: 5px;
      width: 10rem;
      height: 2.5rem;
      margin: auto;
    }
  }

  @media (max-width:768px){
    p{
      margin-top: 10px;
      text-align: center;
      font-size: 14px;
    }

    span{
      text-align: center;
      font-size: 13px;
      cursor: pointer;
    }

    img{
      width: 140px;
      border-radius: 10px 10px 0 0;
      margin: 10px 20px;
    }

  }
`
