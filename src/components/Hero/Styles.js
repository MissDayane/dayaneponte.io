import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background: var(--background-color);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  padding: 2rem;

  &.text-content {
    max-width: 600px;
    
    h1 {
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
  }

  &.image-content {
    display: flex;
    justify-content: center;
  }
`;

export const CTA = styled.div`
  position: relative;
  margin-top: 2rem;
  
  .cta-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 18px 42px;
    background: var(--gradient-accent);
    color: white;
    border-radius: 50px;
    font-weight: 700;
    font-size: 1.1rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;

    /* Efeito de brilho animado */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: 0.5s;
      z-index: -1;
    }

    &:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);

      &::before {
        left: 100%;
      }
    }

    /* Ícone animado */
    svg {
      transition: transform 0.3s ease;
    }

    &:hover svg {
      transform: translateX(5px) rotate(45deg);
    }

    /* Efeito "magnetic" (será implementado com JS) */
    &.magnetic {
      transition: transform 0.2s ease;
    }
  }

  /* Elemento decorativo flutuante */
  .cta-decoration {
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--accent-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.6;
  }
`;

export const Dayane = styled.div`
  text-align: center;

  .profile-image {
    width: 100%;
    max-width: 500px;
    margin-bottom: 1.5rem;
  }

  .quote {
    font-style: italic;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;