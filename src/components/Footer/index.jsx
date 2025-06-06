import { 
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterLinks,
  FooterNav,
  FooterSocial,
  FooterCopyright
} from './Styles';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
          <h2>Dayane Pontes</h2>
          <p>Desenvolvedora Front-end & UI Designer</p>
        </FooterLogo>

        <FooterLinks>
          <FooterNav>
            <h3>Navegação</h3>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </FooterNav>

          <FooterSocial>
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                <a href="https://github.com/DayanePontes" target="_blank" rel="noopener noreferrer">
                  <FiGithub /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dayane-pontes" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dayane.pontes" target="_blank" rel="noopener noreferrer">
                  <FiInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="mailto:contato_dayanepontes@gmail.com">
                  <FiMail /> E-mail
                </a>
              </li>
            </ul>
          </FooterSocial>
        </FooterLinks>
      </FooterContent>

      <FooterCopyright>
        <p>&copy; {new Date().getFullYear()} Dayane Pontes. Todos os direitos reservados.</p>
        <p>Desenvolvido com React e muito café ☕</p>
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;