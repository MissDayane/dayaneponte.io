import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 6rem 5%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const ContactHeader = styled.div`
  margin-bottom: 4rem;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #2424d8, #08b39f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const ContactContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  max-width: 800px;
  margin: 0 auto;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .contact-method {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h3 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: white;
    }
  }

  .contact-icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
`;

export const EmailLink = styled.a`
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  word-break: break-all;

  &:hover {
    color: #08B39F;
    text-decoration: underline;
  }
`;

export const ContactDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 1rem 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SocialItem = styled.li`
  list-style: none;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1rem;

  &:hover {
    background: rgba(36, 36, 216, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(36, 36, 216, 0.2);
  }

  svg {
    font-size: 1.2rem;
  }
`;