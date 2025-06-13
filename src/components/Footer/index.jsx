import { Container, Section } from "./styles"
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

function Footer() {
  return (
    <Container id='contatos'>
      <Section>
        <div className="card">
          <a href="https://www.linkedin.com/in/mateus-miranda-inacio/" target="_blank" className="footer_button">
            <FaLinkedin />
          </a>

          <a href="https://github.com/MateusMiranda20" target="_blank" className="footer_button">
            <FaGithub />
          </a>

          <a href="https://api.whatsapp.com/send/?phone=5512996676967" target="_blank" className="footer_button">
            <FaWhatsapp />
          </a>

          <a className="footer_button" href="#top">
            <FaArrowAltCircleUp />
          </a>
        </div>
      </Section>
      <span>Copyright © 2025 Mateus Miranda Inacio</span>
    </Container>
  )
}




export default Footer
