import React, { useState } from 'react';
import { Moon, Sun, Menu, Linkedin, Instagram, Github } from 'lucide-react';
import './App.css'


function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "JWT-Authentication-API",
      description: "Uma API em Node.js e Express para autenticação de usuários com criptografia bcrypt e geração de tokens JWT. Oferece endpoints seguros para registro, login e acesso a informações do usuário.",
      image: "https://cdn-icons-png.flaticon.com/512/10169/10169741.png",
      githubLink: "https://github.com/alexandrediogenes/JWT-Authentication-API"
    },
    {
      id: 2,
      title: "Text-Translation-API",
      description: "Uma API em Node.js e Express que utiliza o Google Cloud Translation para fornecer serviços de tradução de texto. Permite conversão simples entre idiomas através de endpoints dedicados.",
      image: "https://cdn-icons-png.flaticon.com/512/10169/10169741.png", 
      githubLink: "https://github.com/alexandrediogenes/Text-Translation-API"
    },
    {
      id: 3,
      title: "Note-app",
      description: "Aplicação em React e TypeScript para gerenciamento de notas, permitindo criação, edição e exclusão de anotações. Possui interface responsiva construída com CSS e utiliza componentes funcionais para gerenciamento de estado.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      githubLink: "https://github.com/alexandrediogenes/Note-App"
    }
  ];

  return (
    <section id="projects" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map(project => (
          <div 
            key={project.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img 
              alt={`${project.title} thumbnail`}
              className="w-full h-48 object-contain"
              src={project.image}
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                <Github className="mr-2" /> Ver no Github
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Fechar menu mobile após selecionar
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="font-roboto bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen">
        <header className="bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="text-2xl font-bold">Alexandre Diógenes Pereira</div>
            
            <nav className="hidden md:flex space-x-4">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Projects', id: 'projects' },
                { name: 'About', id: 'about' },
                { name: 'Contacts', id: 'contacts' }
              ].map(item => (
                <button 
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme} 
                className="text-gray-700 dark:text-gray-300 focus:outline-none"
              >
                {darkMode ? <Sun /> : <Moon />}
              </button>
              
              <div className="md:hidden">
                <button 
                  onClick={toggleMobileMenu} 
                  className="text-gray-700 dark:text-gray-300 focus:outline-none"
                >
                  <Menu />
                </button>
              </div>
            </div>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Projects', id: 'projects' },
                { name: 'About', id: 'about' },
                { name: 'Contacts', id: 'contacts' }
              ].map(item => (
                <button 
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </header>
        
        <section 
          id="home"
          className="relative bg-cover bg-center h-screen" 
          style={{backgroundImage: 'url("https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2Fada65f4d9e2a-Como-se-tornar-um-desenvolvedor-Android.jpg")'}}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">DESENVOLVEDOR FULL-STACK</h1>
            <p className="text-lg md:text-2xl mb-8">
              Criando sites, sistemas e aplicativos
            </p>
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Veja os meus projetos
            </button>
          </div>
        </section>
        
        <Projects />
        
        <section id="about" className="container mx-auto py-16">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col items-center justify-center">
            <img 
              alt="Profile picture" 
              className="w-48 h-48 rounded-full mb-8" 
              src="https://i.imgur.com/YLT2AfE.jpeg"
            />
            <div className="text-center">
              {[
                { label: 'Name', value: 'Alexandre Diogenes' },
                { label: 'Age', value: '31 years' },
                { label: 'Location', value: 'Fortaleza, CE' },
                { label: 'Email', value: 'alexandrediogenes92@gmail.com' },
                { label: 'Phone', value: '85987780633 / 85984058167' },
                { label: 'Education', value: 'Análise e desenvolvimento de sistemas na Estácio' },
                { label: 'Technologies', value: 'Javascript, Node.js, React, Typescript, CSS, HTML, Figma, Angular' }
              ].map(({label, value}) => (
                <p key={label} className="text-lg mb-4">
                  <strong>{label}: </strong>{value}
                </p>
              ))}
              <a 
                href="https://www.linkedin.com/in/alexandre-diogenes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
        
        <footer id="contacts" className="bg-gray-800 text-white py-8">
          <div className="container mx-auto text-center">
            <p>© 2023 Web Designer. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/alexandre-diogenes' },
                { Icon: Instagram, href: 'https://www.instagram.com/ale_xandrediogenes/profilecard/?igsh=eXRvbTNzYWphbTI0' },
                { Icon: Github, href: 'https://github.com/alexandrediogenes' }
              ].map(({Icon, href}) => (
                <a 
                  key={href} 
                  href={href} 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-white hover:text-gray-400"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default App
