import styled from "styled-components";

export const Hero = styled.section`
    padding: 80px 55px 0 10px;
    display: flex;
    flex-wrap: wrap;
    font-family: "Montserrat", sans-serif;

    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 80px;
    }

    @media (max-width: 999px) {
        padding: 20px;
        justify-content: space-around;
        align-items: center;
    }

    @media (max-width: 877px) {
        padding: 20px 35px 0 10px;
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

    @media (max-width: 768px) {
        .container {
            flex-direction: row;
            gap: 40px;
        }
    }

    @media (max-width: 425px) {
        .container {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 90px 0;
            margin-left: 11rem;

                h2{
                    font-size: 39px;
                    font-weight: 500;
                    margin: 10px 0;
                    color: #000 ;
                }

                h3 {
                    font-size: 39px;
                    font-weight: 500;
                    margin: 10px 0;
                    color: #000 ;
                }
            
                p {
                    font-size: 25px;
                    font-weight: 500;
                    line-height: 1.6;
                    margin: auto;
                }

                button, a{
                    font-size: 29px;
                    max-width: 57%;
                    position: relative;
                    left: 12px;
                    top: 10px;
                    padding: 15px;
                }
        }
    }

    @media (max-width: 375px) {
        .container {
            margin-top: 0;
            padding: 20px;
            width: 100%;
        }
    }

    @media (max-width: 320px) {
        gap: 20px;
        .container {
            padding: 10px;
            gap: 15px;
        }
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

        @media (max-width: 877px) {
            width: 19%;
            height: 85%;
        }

        @media (max-width: 768px) {
            width: 23%;
            
        }

        @media (max-width: 425px), (max-width: 375px), (max-width: 320px) {
        display: none;
    }
`;



export const Img = styled.img`
    width: 80vh;
    height: auto;
    margin-bottom: 140px;
    border-radius: 20px;
    object-fit: contain;
    flex-shrink: 0; /* Impede que a imagem diminua quando a tela encolher */

    @media (max-width: 1024px) {
        margin: 0 0 9rem 0;
        width: 60vh;
    }

    @media (max-width: 877px) {
        max-width: 70vh;
    }

    @media (max-width: 768px){
        width: 45vh;
        border-radius: 10px;
    }

    @media ( max-width: 425px){
      position: relative;
      bottom: 15px;
      margin: 0;
      right: 10px;
      width: 65vh;
    }

`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 600px;
    color: #000;
    padding: 0 0 130px 10px;
    margin-right: 50px;

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

    .download-button {
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
       
`;
