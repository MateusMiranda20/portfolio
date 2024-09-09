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
`

export const Section = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
  flex-direction: row;

  .card{
    width: 350px;
    height: 320px;
    background-color: #F9A602;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  p{
    margin-top: 20px;
    text-align: center;
    font-size: 22px;
  }

  span{
    text-align: center;
    font-size: 18px;
  }

  img{
    max-width: 310px;
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

    a {
      text-decoration: none;
      font-weight: 700;
      color: white;
    }
  }
`
