import { Container, Section } from "./styles"
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

    



function Footer() {
  return (
    <Container id='contatos'>
      <Section>
        <div className="card">
          <a href="https://www.linkedin.com/in/mateus-miranda-inacio/" target="_blank" className="footer_button">
            <FaLinkedin /> 
            <p>Linkedin</p>
          </a>

          <a href="https://github.com/MateusMiranda20" target="_blank" className="footer_button"> 
            <FaGithub />
            <p>Github</p>
          </a>
         
          <a href="https://api.whatsapp.com/send/?phone=5512996676967" target="_blank" className="footer_button">
            <FaWhatsapp />
            <p>Whatsapp</p>
          </a>
          <span>Copyright © 2024 MM</span>
        </div>
      </Section>
    </Container>
  )
}




export default Footer
