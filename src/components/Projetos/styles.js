import styled from "styled-components";

export const Container = styled.section`
    padding: 90px 0 10px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

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
    height: 290px;
    background-color: #F9A602;
    border-radius: 10px;
  }

  p{
    margin-top: 20px;
    text-align: center;
  }

  img{
    max-width: 310px;
    border-radius: 10px 10px 0 0;
    margin: 10px 20px;
    cursor: pointer;
  }
`
