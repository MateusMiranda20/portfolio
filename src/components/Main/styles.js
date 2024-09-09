import styled from "styled-components";

export const Hero = styled.section`
    padding: 80px 55px 0 10px;
    display: flex;
    justify-content: space-between;
    font-family: "Montserrat", sans-serif;
    
    @media (max-width: 768px) {
        padding: 80px 55px 0 70px;
        display: flex;
        justify-content: space-between; 
        }
    

    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 80px;

        @media (max-width: 768px) {
            flex-direction: column-reverse;
            gap: 50px;
            max-width: 1000px;
        }

        
        /* @media (min-width: 768px) {
            max-width: 900px;
            display: flex;
            flex-direction: row;


            .img-logo {
                display: block;
            }
        } */
    }

    @media (max-width: 425px) {
        padding: 120px 0 40px 0;
    }

    @media (max-width: 375px) {
        padding: 100px 0 20px 0;
    }

    @media (max-width: 320px) {
        padding: 80px 0 10px 0;
        gap: 25px;
    }
`;

export const LeftSection = styled.div`
  background-color: #F9A602;
  width: 20%;
  height: 100%;
  border-radius: 0 50px 50px 0;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 10px;

  @media (max-width: 768px) {
    background-color: #fff;
    
   }
`;



export const Img = styled.img`
    height: auto;
    width: 90vh;
    border-radius: 20px;

    @media (min-width: 1039px) {
        margin: 50px 0 90px 10em;
    }

    @media (max-width: 1000px) {
        margin: 10px 0 10px;
        max-width: 300px;
    }

    @media (max-width: 768px){
        max-width: 500px;
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        top: 25px;
        right: 12px;

        border-radius: 0;
    }

`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    color: #000;
    padding: 0 0 130px 10px; 
   

    h2 {
        font-size: 3rem;
        font-weight: 300;
        margin: 10px 0;
        color: #000 ;
    }

    h3 {
        font-size: 2.0rem;
        font-weight: 300;
        margin: 10px 0;
        color: #000 ;
    }

    p {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.6;
        margin: 12px 0;
        width: 75%;
    } 

    .download-button{
            background-color: #000;
            border: none;
            color: white;
            padding: 8px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 15px 2px;
            cursor: pointer;
            border-radius: 4px;
            font-weight: 700;
        }

       .linkedin {
            background-color: white;
            border: none;
            color: #0000FF;
            padding: 8px 10px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 15px 2px;
            cursor: pointer;
            border-radius: 4px;
            font-weight: 700;
        }

    
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
        
        h2, h3, p{
        width: 70%;
        text-align: center;
        margin: auto;
       }

       span, a, button{
        margin: auto;
       }
    }


    @media (max-width: 468px) {
       width: 100%;
        max-width: 100%; /* Remove a limitação da largura em telas menores */

         h2{
            font-size: 2rem;
        }

        p{
            font-size: 15px;
        } 
    } 
    
`;
