import { 
  ContactContainer, 
  ContactHeader, 
  ContactContent,
  ContactInfo,
  EmailLink, 
  SocialList,
  SocialItem,
  SocialLink,
  ContactDivider
} from './Styles';
import { FiMail, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const Contato = () => {
  return (
    <ContactContainer id="contato">
      <ContactHeader>
        <h1>Vamos conversar?</h1>
        <p>Estou disponível para oportunidades e colaborações</p>
      </ContactHeader>

      <ContactContent>
        <ContactInfo>
          <div className="contact-method">
            <FiMail className="contact-icon" />
            <div>
              <h3>E-mail</h3>
              <EmailLink href="mailto:contato_dayanepontes@gmail.com">
                contato_dayanepontes@gmail.com
              </EmailLink>
            </div>
          </div>

          <ContactDivider>ou</ContactDivider>

          <div className="contact-method">
            <h3>Redes Sociais</h3>
            <SocialList>
              <SocialItem>
                <SocialLink 
                  href="https://www.linkedin.com/in/dayane-pontes-0b1b4a1b2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FiLinkedin /> LinkedIn
                </SocialLink>
              </SocialItem>
              
              <SocialItem>
                <SocialLink 
                  href="https://github.com/DayanePontes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FiGithub /> GitHub
                </SocialLink>
              </SocialItem>
              
              <SocialItem>
                <SocialLink 
                  href="https://www.instagram.com/dayane.pontes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FiInstagram /> Instagram
                </SocialLink>
              </SocialItem>
            </SocialList>
          </div>
        </ContactInfo>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contato;