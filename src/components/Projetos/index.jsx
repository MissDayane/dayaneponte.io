import { useState } from 'react';
import { 
  Container, 
  SectionHeader,
  GridContainer, 
  ProjectCard, 
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechList,
  TechItem,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  LoadMoreButton
} from './Styles';
import { FiExternalLink, FiGithub, FiPlus } from 'react-icons/fi';

// dicionário de projetos
const allProjects = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Plataforma completa com carrinho e checkout.",
    image: "/projeto1.jpg",
    demoLink: "#",
    codeLink: "#",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Painel de visualização de dados em tempo real.",
    image: "/projeto2.jpg",
    demoLink: "#",
    codeLink: "#",
    technologies: ["TypeScript", "D3.js"]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Aplicativo para gerenciamento de tarefas.",
    image: "/projeto3.jpg",
    demoLink: "#",
    codeLink: "#",
    technologies: ["React Native", "Redux"]
  },
  {
    id: 4,
    title: "Rede Social",
    description: "Plataforma de conexão entre usuários.",
    image: "/projeto4.jpg",
    demoLink: "#",
    codeLink: "#",
    technologies: ["React", "GraphQL", "Firebase"]
  },
  {
    id: 5,
    title: "Sistema de Agendamento",
    description: "Agendamento de serviços online.",
    image: "/projeto5.jpg",
    demoLink: "#",
    codeLink: "#",
    technologies: ["Vue.js", "Laravel"]
  },
  {
    id: 6,
    title: "Aplicativo de Notícias",
    description: "Leitor de notícias personalizado.",
    image: "/projeto6.jpg",
    demoLink: "#",
    codeLink: "#",
    technologies: ["Flutter", "Firebase"]
  },
  {
    id: 7,
    title: "Plataforma de Cursos",
    description: "Sistema E-learning completo.",
    image: "/projeto7.jpg",
    demoLink: "#",
    codeLink: "#",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 8,
    title: "App de Finanças",
    description: "Controle financeiro pessoal.",
    image: "/projeto8.jpg",
    demoLink: "#",
    codeLink: "#",
    technologies: ["React Native", "Firebase"]
  },
  {
    id: 9,
    title: "Sistema de Chamados",
    description: "Helpdesk para suporte técnico.",
    image: "/projeto9.jpg",
    demoLink: "#",
    codeLink: "#",
    technologies: ["Angular", "NestJS"]
  }
];

const Projetos = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <Container id="projetos">
      <SectionHeader>
        <h2>Meus <span>Projetos</span></h2>
        <p>Alguns dos trabalhos que desenvolvi recentemente</p>
      </SectionHeader>

      <GridContainer>
        {allProjects.slice(0, visibleProjects).map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage>
              <img src={project.image} alt={project.title} />
              <div className="overlay" />
            </ProjectImage>
            
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechList>
                {project.technologies.map((tech, index) => (
                  <TechItem key={index}>{tech}</TechItem>
                ))}
              </TechList>
              
              <ButtonGroup>
                <PrimaryButton href={project.demoLink} target="_blank">
                  <FiExternalLink /> Demo
                </PrimaryButton>
                <SecondaryButton href={project.codeLink} target="_blank">
                  <FiGithub /> Código
                </SecondaryButton>
              </ButtonGroup>
            </ProjectContent>
          </ProjectCard>
        ))}
      </GridContainer>

      {visibleProjects < allProjects.length && (
        <LoadMoreButton onClick={loadMoreProjects}>
          <FiPlus /> Ver Mais Projetos
        </LoadMoreButton>
      )}
    </Container>
  );
};

export default Projetos;