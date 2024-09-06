import Header from "../../src/components/Header"
import Main from "../../src/components/Main"
import Projetos from "../../src/components/Projetos"
import Footer from "../../src/components/Footer"
import Sobre from "../../src/components/Sobre"

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <Sobre />
            <Projetos />
            <Footer />
        </>
    )
}

export default Home