import styled from "styled-components";

export const Hero = styled.section`
    padding: 80px 55px 0 10px;
    display: flex;
    flex-wrap: wrap;
    font-family: "Montserrat", sans-serif;
    

    .container {
        height: 100vh;
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

    @media (max-width: 877px) {
    padding: 50px 25px 0 10px;
    .container {
      gap: 30px;
    }
  }

    @media (max-width: 425px) {
        padding: 30px 15px 0 10px;
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
   
  
        @media (max-width: 1024px) {
            width: 18%;
            height: 100%;
            position: absolute;
        }

        @media (max-width: 877px) {
            width: 19%;
            height: 85%;
        }

        @media (max-width: 768px) {
            width: 22%;
        }


`;



export const Img = styled.img`
    width: 80vh;
    height: auto;
    border-radius: 20px;
    object-fit: contain;
    flex-shrink: 0; /* Impede que a imagem diminua quando a tela encolher */

    @media (max-width: 1024px) {
        margin: 0 0 9rem 0;
    }

    @media (max-width: 877px) {
        max-width: 70vh;
    }

    @media (max-width: 768px){
        width: 70vh;
        border-radius: 10px;
    }

`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 600px;
    width: 100%;
    align-items: left;
    color: #000;
    padding: 0 0 130px 10px; 

    h2 {
        font-size: 3rem;
        font-weight: 300;
        margin: 10px 0;
    }

    h3 {
        font-size: 2rem;
        font-weight: 300;
        margin: 10px 0;
    }

    p {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.6;
        margin: 12px 0;
        width: 100%;
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

            @media ( max-width: 768px){
                font-size: 13px;
            }
        }

    .linkedin {
        background-color: #0000FF;
        border: none;
        color: #fff;
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
           font-size: 13px;
        }

    }   
        @media (max-width: 877px) {

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
                font-size: 15px;
                font-weight: 500;
                line-height: 1.6;
                margin: 12px 0;
                width: 85%;
            } 
            
            button, a{
               max-width: 50%;
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
               max-width: 50%;
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
