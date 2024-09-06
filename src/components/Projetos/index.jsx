import { Container, Section } from "./styles"
import barbearia from '../../assets/barbearia.png'
import jacarnda from "../../assets/jacaranda.png"
import fazeres from "../../assets/fazeres.png"

function Projetos() {

  return (
    <Container id='projetos'>
      <h1>Projetos</h1>
      <Section>
        <div className="card">
          <img src={fazeres} alt="To-do-list" />
          <p>Fazeres</p>
          <button>
            <a href="https://react-test-omega-tan.vercel.app/" target="_blank">Veja mais</a>
          </button>
        </div>
        <div className="card">
          <img src={jacarnda} alt="Jacaranda móveis planejaveis" />
          <p>Jacarandá</p>
          <button>
            <a href="https://jacarandamovelaria.com.br/" target="_blank">Veja mais</a>
          </button>
        </div>
        <div className="card">
          <img src={barbearia} alt="Barbearia " loading="lazy"/>
          <p>Barbearia</p>
          <button>
            <a href="https://iridescent-blini-672674.netlify.app/" target="_blank">Veja mais</a>
          </button>
        </div>
      </Section>
    </Container>
  )
}

export default Projetos
