import { Container, Section, Img, Text } from "./styles"
import portfolio from "../../assets/Foto_portfolio.png"
import { FaNode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiStyledcomponents } from "react-icons/si";

function Projetos() {

  return (
    <Container id="sobre">
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
              <h3>Júndiai, Sp</h3>
              <p>
                Me chamo Bruno, nascido em 2005, sou um dedicado desenvolvedor front-end, formado pelo Vai na Web. Minha experiência abrange projetos em diversos setores, incluindo arquitetura, assessoria jurídica, saúde e prestação de serviços. Comprometido com a entrega de soluções visuais e funcionais, estou sempre em busca de aprimorar minhas habilidades para oferecer resultados excepcionais em cada projeto que abraço.
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
