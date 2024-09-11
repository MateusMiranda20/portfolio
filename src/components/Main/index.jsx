import { Hero, Img, Text, LeftSection } from "./styles"
import Logo from "../../assets/Mateus.jpg"
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {

    const [isAnimated, setIsAnimated] = useState('');

    useEffect(() => {
        AOS.init({ duration: 1500 });
        setTimeout(() => {
            setIsAnimated(false);
        }, 1000);
    }, []);

    return (
        <Hero id="#" 
            data-aos={isAnimated ? "fade-down" : ""}
        >
            <LeftSection />
            <div className="container" data-aos="fade-up">
                <Text className='main-text'>
                    <h2>Olá eu sou o <span>Mateus Miranda!</span></h2>
                    <h3>Desenvolvedor Front-End</h3>
                    <p>
                        Sou especialista na construção de aplicativos web usando tecnologias como React.js e node.js
                    </p>
                    <span>
                        <a href="/src/docs/Desenvolvedor front-end Mateus.pdf" download>
                            <button className="download-button">Currículo</button>
                        </a>
                        <a href="https://www.linkedin.com/in/mateus-miranda-inacio/" target="_blank" alt="Minha Url do linkedin">
                            <button className="linkedin">Linkedin</button>
                        </a>
                    </span>

                </Text>

                <div className='img-logo'>
                    <Img src={Logo} alt="Imagem Mateus " />
                </div>
            </div>
        </Hero>
    )
}

export default Main
