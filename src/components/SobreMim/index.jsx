import { Container, Content, Text, CV, Habilidades } from './Styles';
import { FiDownload, FiAward, FiCode, FiLayout } from 'react-icons/fi';

const SobreMim = () => {
  return (
    <Container id="sobre">
      <Content className="text-content">
        <Text>
          <h2>Minha Jornada</h2>
          <p>
            Sou um desenvolvedor front-end apaixonado por criar experiências digitais 
            memoráveis. Com 3 anos de experiência, transformo ideias em realidade 
            através de código limpo e design intuitivo.
          </p>
          <p>
            Minha abordagem combina técnica criativa com soluções práticas, sempre 
            focado em performance e acessibilidade.
          </p>
        </Text>
        
        <CV>
          <a href="/curriculo.pdf" download className="cv-button">
            <FiDownload /> Baixar CV
          </a>
        </CV>
      </Content>

      <Content className="skills-content">
        <Habilidades>
          <h3>Minhas Habilidades</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <FiLayout className="skill-icon" />
              <span>UI/UX Design</span>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </div>
            {/* Adicione mais skills quando eu tiver tempo*/}
          </div>
        </Habilidades>
      </Content>
    </Container>
  );
}

export default SobreMim;