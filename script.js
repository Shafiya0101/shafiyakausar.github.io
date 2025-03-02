// Dynamic Projects Loading
const projects = [
    {
      title: "Project 1",
      description: "A brief description of your project.",
      link: "#"
    },
    // Add more projects here
  ];
  
  const projectGrid = document.querySelector('.project-grid');
  
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}">View Project</a>
    `;
    projectGrid.appendChild(projectCard);
  });
  
  // Smooth scroll for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });