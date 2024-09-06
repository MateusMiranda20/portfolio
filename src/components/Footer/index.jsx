import { Container, Section } from "./styles"


function Footer() {
  return (
    <Container id='contatos'>
      <h1>Projetos</h1>
      <Section>
        <div className="card">
          <a href="https://react-test-omega-tan.vercel.app/" target="_blank">Veja mais
          <p>Fazeres</p>
          </a>
          <a href="https://jacarandamovelaria.com.br/" target="_blank">Veja mais
          <p>Jacarandá</p></a>
         
          <a href="https://iridescent-blini-672674.netlify.app/" target="_blank">Veja mais
          <p>Barbearia</p></a>

        </div>

      </Section>
    </Container>
  )
}




export default Footer
