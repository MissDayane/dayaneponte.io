import Header from "./components/Header"
import GlobalStyle from './Styles/Global';
import Hero from "./components/Hero";
import SobreMim from "./components/SobreMim";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";


const App = () => {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <SobreMim />
      <Projetos />
      <Contato />
      <Footer />
      
      
    </>
  )
}

export default App
