import styled from "styled-components";

export const Hero = styled.section`
    padding: 80px 55px 0 10px;
    display: flex;
    justify-content: space-between;
    font-family: "Montserrat", sans-serif;
    

    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 80px;

        @media (max-width: 768px) {
            display: flex;
            flex-direction: row;
        }

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

  @media (max-width: 1024px){
    width: 25%;
  }

  @media (max-width: 768px){
    width: 28%;
    height: 90%;
  }


`;



export const Img = styled.img`
    height: auto;
    width: 90vh;
    border-radius: 20px;

    @media (max-width: 1024px) {
        margin: 0 0 9rem 0;
        width: 80vh;
    }

    @media (min-width: 1039px) {
        margin: 50px 0 90px 10em;
    }

    @media (max-width: 768px){
        width: 60vh;
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

        @media ( max-width: 768px){
                background-color: #0000FF;
                color: white;
            }
    }

        @media (max-width:768px){        
            
            h2 {
                font-size: 25px;
                font-weight: 300;
                margin: 10px 0;
                color: #000 ;
            }
            
            h3 {
                font-size: 30px;
                font-weight: 300;
                margin: 10px 0;
                color: #000 ;
            }
            
            p {
                font-size: 18px;
                font-weight: 500;
                line-height: 1.6;
                margin: 12px 0;
                width: 85%;
            } 
            
            button, a{
               position: relative;
               right: 0.5rem;
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
