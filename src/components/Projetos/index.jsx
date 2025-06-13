import piscina from "../../assets/piscina.png"
import jacarnda from "../../assets/jacaranda.png"
import fazeres from "../../assets/fazeres.png"

import { Container, Section, Skills, SkillTag } from "./styles"

function Projetos() {

  const skillsOneProject = ["Javascript", "React", "Html5", "Styled-components", "Typescript", "Git", "Vercel"]
  const skillsTwooProject = ["Javascript", "React", "Html5", "Styled-components", "Typescript", "Git", "Vercel"]
  const skillsThreeProject = ["Javascript", "React", "Html5", "Styled-components", "Typescript", "Git", "Vercel"]

  return (
    <Container id='projetos'>
      <h1>Últimos projetos</h1>
      <Section>
        <div className="card">
          <div className="text">
            <p>Jacarandá</p>
            <span>Projeto de site institucional desenvolvido para uma movelaria especializada em móveis sob medida.
              O objetivo deste projeto foi criar uma presença digital elegante e funcional para a Jacarandá Movelaria, transmitindo a identidade da marca com um visual moderno.</span>
            <Skills>
              {skillsThreeProject.map((skills, index) => (
                <SkillTag key={index}>{skills}</SkillTag>
              ))}
            </Skills>
            <button>
              <a href="https://jacarandamovelaria.com.br/" target="_blank" >Visite o site</a>
            </button>
          </div>
          <img src={jacarnda} alt="Jacaranda móveis planejaveis" />
        </div>

        <div className="card">
          <div className="text">
            <p>Piscina</p>
            <span>Landing page institucional para empresa especializada em instalação e manutenção de piscinas.
              Este projeto foi desenvolvido com foco em conversão e apresentação de serviços de forma clara, moderna e responsiva.</span>
            <Skills>
              {skillsTwooProject.map((skills, index) => (
                <SkillTag key={index}>{skills}</SkillTag>
              ))}
              </Skills>
            <button>
              <a href="https://piscinasjj.netlify.app/" target="_blank">Visite o site</a>
            </button>
          </div>
          <img src={piscina} alt="Piscina " loading="lazy" />
        </div>

        <div className="card">
          <div className="text">
            <p>Fazeres</p>
            <span>Neste projeto de to-do list, meu foco principal foi praticar e aprimorar minhas habilidades em React. A aplicação permite adicionar tarefas, filtrar por status (todas, ativas e concluídas) e também limpar a lista.</span>
            <Skills>
              {skillsOneProject.map((skills, index) => (
                <SkillTag key={index}>{skills}</SkillTag>
              ))}
            </Skills>
            <button>
              <a href="https://react-test-omega-tan.vercel.app/" target="_blank">Visite o site</a>
            </button>
          </div>
          <img src={fazeres} alt="To-do-list" />
        </div>
      </Section>
    </Container>
  )
}

export default Projetos
