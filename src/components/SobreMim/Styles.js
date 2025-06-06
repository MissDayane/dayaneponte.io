import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 4rem;
  padding: 8rem 5%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Content = styled.div`
  flex: 1;

  &.text-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &.skills-content {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(10px);
  }
`;

export const Text = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #2424d8, #08b39f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    line-height: 1.8;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

export const CV = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .cv-button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: var(--primary-color);
    color: white;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
    width: fit-content;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(36, 36, 216, 0.3);
    }
  }

  .detalhes {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;

    span {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.9rem;
      opacity: 0.9;
    }
  }
`;

export const Habilidades = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: var(--primary-color);
  }

  .skills-grid {
    display: grid;
    gap: 1.5rem;
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .skill-icon {
    font-size: 1.5rem;
    color: var(--secondary-color);
  }

  .skill-bar {
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
  }

  .skill-level {
    height: 100%;
    background: var(--gradient-accent);
    border-radius: 3px;
    transition: width 1s ease;
  }
`;

