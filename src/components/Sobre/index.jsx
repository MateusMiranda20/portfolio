import { Container, Section, Text } from "./styles"
import portfolio from "../../assets/Foto_portfolio.png"
import { FaNode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";

function Projetos() {

  return (
    <Container id="sobre" data-aos="fade-up">
      <h1>Sobre</h1>
      <Section>
              <div className="icons">
                <IoLogoJavascript />
                <FaReact /> 
                <BiLogoTypescript />
                <FaNode />
                <SiStyledcomponents />
              </div>
        <div className="main">
          <div className='img-logo'>
            <img src={portfolio} alt="Imagem Mateus " />
          </div>

          <Text>
            <div className="text">
                <p>
                Ola, meu nome é Mateus Miranda, sou desenvolvedor front-end nascido em 2001. Tenho atuado em projetos de áreas como imóveis e serviços, sempre focado em criar interfaces funcionais e atraentes. Meu objetivo é oferecer soluções criativas e práticas, tornando a experiência do usuário mais intuitiva. Estou em constante aprendizado para garantir entregas de qualidade e superar expectativas em cada trabalho.
                </p>
              <span>
                <a href="https://docs.google.com/document/d/1f1nWMW6_xdGtYiCIzUAc-ZA8wbC-i513DCd3K2hqk8U/edit?tab=t.0" target="_blank" alt="Meu Curriculo">
                  <button className="download-button">Currículo</button>
                </a>
              </span>
            </div>
          </Text>
        </div>
      </Section>
    </Container>
  )
}

export default Projetos
