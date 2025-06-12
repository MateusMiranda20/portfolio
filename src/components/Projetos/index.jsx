import piscina from "../../assets/piscina.png"
import jacarnda from "../../assets/jacaranda.png"
import fazeres from "../../assets/fazeres.png"

import { Container, Section, Skills, SkillTag } from "./styles"

function Projetos() {

  const skillsOneProject = ["Javascript", "React", "Html5", "Styled-components", "Typescript"]

  return (
    <Container id='projetos'>
      <h1>Últimos projetos</h1>
      <Section>
        <div className="card">
          <div className="text">
            <p>Fazeres</p>
            <span>Neste projeto de to-do list, meu foco principal foi praticar e aprimorar minhas habilidades em React. A aplicação permite adicionar tarefas, filtrar por status (todas, ativas e concluídas) e também limpar a lista. É uma solução simples, mas funcional, desenvolvida com atenção à organização e usabilidade</span>
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

        <div className="card">
          <div className="text">
            <p>Jacarandá</p>
            <span>Uma nova visão sobre movelaria</span>
            <button>
              <a href="https://jacarandamovelaria.com.br/" target="_blank" >Veja mais</a>
            </button>
          </div>
          <img src={jacarnda} alt="Jacaranda móveis planejaveis" />
        </div>

        <div className="card">
          <div className="text">
            <p>Piscina</p>
            <span>Sua piscina dos sonhos começa aqui!</span>
            <button>
              <a href="https://piscinasjj.netlify.app/" target="_blank">Veja mais</a>
            </button>
          </div>
          <img src={piscina} alt="Piscina " loading="lazy" />
        </div>
      </Section>
    </Container>
  )
}

export default Projetos
