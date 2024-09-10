import { Hero, Img, Text, LeftSection } from "./styles"
import Logo from "../../assets/Mateus.jpg"

function Main() {

    return (
        <Hero id="#">
            <LeftSection />
            <div className="container" data-aos="fade-up">
                <Text className='main-text'>
                    <h2>Olá eu sou o <span>Mateus Miranda!</span></h2>
                    <h3>Desenvolvedor Front-End</h3>
                    <p>
                        Sou especialista na construção de aplicativos web inovadores usando tecnologias como React e node.js.
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
