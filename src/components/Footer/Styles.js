import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #0a0a0a;
  color: #fff;
  padding: 4rem 5% 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const FooterLogo = styled.div`
  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, #08b39f, #2424d8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterNav = styled.nav`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: all 0.3s;
    font-size: 0.95rem;

    &:hover {
      color: #08b39f;
      padding-left: 5px;
    }
  }
`;

export const FooterSocial = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: #fff;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;

    &:hover {
      color: #08b39f;
    }

    svg {
      font-size: 1.1rem;
    }
  }
`;

export const FooterCopyright = styled.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);

  p:first-child {
    margin-bottom: 0.5rem;
  }
`;