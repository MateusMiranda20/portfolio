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
    background-color: #F9A602;
    width: 95%;
    height: 26rem;
    border-radius: 10px;
    
    .icons{
        font-size: 2.2rem;
        margin-top: 20px;
        display: flex;
        gap: 100px;
        justify-content: center;
        margin-left: 16rem;
        cursor: pointer;
    }

    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        padding: 32px 20px 0 8px;
        margin: 0;
    }

`

export const Text = styled.div`
    width: 1000px;

    span{
            font-size: 1.50rem;
            font-weight: bolder;
            font-family: 'Courier New', Courier, monospace;
            letter-spacing: 2px;
    }

    p{
            margin-top: 25px;
            padding: 0 50px 10px 0;
            font-size: 1.50rem;
            line-height: 2.25rem;
    }
    

    .download-button {
        background-color: #000;
        border: none;
        color: white;
        padding: 10px 30px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
        font-weight: 700;
    }
`
export const Img = styled.img`
   width: 90%;

   .img-logo{
        margin: 0;
        padding: 0;
   }
`