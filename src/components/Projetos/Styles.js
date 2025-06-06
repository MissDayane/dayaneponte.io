import styled from 'styled-components';

export const Container = styled.section`
  padding: 5rem 5%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    
    span {
      color: var(--primary-color);
    }
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const ProjectImage = styled.div`
  height: 220px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    opacity: 0.7;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

export const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: white;
`;

export const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.2rem;
  flex-grow: 1;
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
`;

export const TechItem = styled.li`
  background: rgba(36, 36, 216, 0.2);
  color: var(--primary-color);
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

export const PrimaryButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary-color);
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;

  &:hover {
    background: #1a1ac5;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

export const LoadMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 3rem auto 0;
  padding: 0.8rem 2rem;
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(36, 36, 216, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(36, 36, 216, 0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: rotate(90deg);
  }
`;