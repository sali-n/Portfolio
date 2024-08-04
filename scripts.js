document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const navbar = document.getElementById('navbar');
    const navName = document.getElementById('nav-name');
    const header = document.getElementById('home');

    // Lazy loading
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            if (!project.querySelector('.project-description')) {
                const description = project.getAttribute('data-description');
                const link = project.getAttribute('data-link');
                const descriptionElement = document.createElement('div');
                descriptionElement.classList.add('project-description');
                descriptionElement.textContent = description;

                const linkElement = document.createElement('a');
                linkElement.href = link;
                linkElement.target = '_blank';
                linkElement.textContent = 'View on GitHub';

                project.appendChild(descriptionElement);
                project.appendChild(linkElement);
            }
        });

        project.addEventListener('mouseleave', () => {
            const descriptionElement = project.querySelector('.project-description');
            const linkElement = project.querySelector('a');
            if (descriptionElement) {
                descriptionElement.remove();
            }
            if (linkElement) {
                linkElement.remove();
            }
        });

        project.addEventListener('mouseover', () => {
            const randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            const randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            project.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
        });

        project.addEventListener('mouseout', () => {
            project.style.background = '#000000'; /* Black background */
        });
    });

    // Random gradient for sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            const randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            const randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            section.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
        });

        section.addEventListener('mouseleave', () => {
            section.style.background = '#000000'; /* Black background */
        });
    });

    // navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > header.offsetHeight) {
            navbar.classList.add('sticky');
            navName.style.display = 'block';
        } else {
            navbar.classList.remove('sticky');
            navName.style.display = 'none';
        }
    });

    // Random gradient for skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseover', () => {
            const randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            const randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            category.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
        });

        category.addEventListener('mouseout', () => {
            category.style.background = '#000000'; 
        });
    });

    // fade-in 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = entry.target;
                target.classList.add('fade-in');
                target.classList.add('animated'); 

                target.addEventListener('animationend', () => {
                    target.classList.remove('fade-in');
                }, { once: true });
            } else if (!entry.isIntersecting && entry.target.classList.contains('animated')) {
                entry.target.classList.remove('animated'); 
            }
        });
    }, {
        threshold: 0.1 
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
