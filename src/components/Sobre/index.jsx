import { Container, Section, Img, Text } from "./styles"
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
            <Img src={portfolio} alt="Imagem Mateus " />
          </div>

          <Text>
            <div className="text">
                <p>
                  Olá, sou Mateus Miranda, nascido em 2001, sou um desenvolvedor front-end  dedicado. Ao longo da minha jornada, trabalhei em projetos de diferentes setores, como alimentação e prestação de serviços. Minha missão é criar interfaces visuais impactantes e funcionais, sempre com o compromisso de entregar soluções inovadoras. Estou constantemente buscando aprimorar minhas habilidades para garantir resultados excepcionais em cada projeto que participo.
                </p>
              <span>
                <a href="/src/docs/Desenvolvedor front-end Mateus.pdf" download>
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
