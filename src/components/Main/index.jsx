import { Hero, Img, Text, Content } from "./styles"
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

            <Content data-aos="fade-up">
                <Text>
                    <p>
                        Sou desenvolvedor de software movido pela curiosidade e paixão por tecnologia. Tenho experiência com
                        Javascript, React.js, Typescript, Node, SQL e Docker, sempre focado em transformar ideias em soluções
                        simples e eficientes. Gosto de unir código limpo com uma boa experiência do usuário. Valorizo o trabalho
                        em equipe, metodologias ágeis e estou sempre buscando melhorar como profissional e pessoa. Acredito
                        que tecnologia é tão sobre pessoas quanto sobre código.
                    </p>
                    <span>
                        <a
                            href="/curriculo.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="download-button">Baixar Currículo</button>
                        </a>
                        <a href="https://www.linkedin.com/in/mateus-miranda-inacio/" target="_blank" alt="Minha Url do linkedin">
                            <button className="linkedin">Linkedin</button>
                        </a>
                    </span>
                </Text>


                <div className='img-logo'>
                    <Img src={Logo} alt="Imagem Mateus " />
                </div>
            </Content>
        </Hero>
    )
}


export default Main
