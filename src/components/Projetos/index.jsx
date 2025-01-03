import { Container, Section } from "./styles"
import piscina from "../../assets/piscina.png"
import jacarnda from "../../assets/jacaranda.png"
import fazeres from "../../assets/fazeres.png"

function Projetos() {

  return (
    <Container id='projetos'>
      <h1>Últimos projetos</h1>
      <Section>
        <div className="card">
          <img src={fazeres} alt="To-do-list" />
          <p>Fazeres</p>
          <span>To-do-list personalizado</span>
          <button>
            <a href="https://react-test-omega-tan.vercel.app/" target="_blank">Veja mais</a>
          </button>
        </div>
        <div className="card">
          <img src={jacarnda} alt="Jacaranda móveis planejaveis" />
          <p>Jacarandá</p>
          <span>Uma nova visão sobre movelaria</span>
          <button>
            <a href="https://jacarandamovelaria.com.br/" target="_blank" >Veja mais</a>
          </button>
        </div>
        <div className="card">
          <img src={piscina} alt="Piscina " loading="lazy"/>
          <p>Piscina</p>
          <span>Sua piscina dos sonhos começa aqui!</span>
          <button>
            <a href="https://iridescent-blini-672674.netlify.app/" target="_blank">Veja mais</a>
          </button>
        </div>
      </Section>
    </Container>
  )
}

export default Projetos
