// Get the menu icon, body, and menu elements
// Burger icon script
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

(() => {
    // Function to toggle description visibility
    function toggleDescriptionOnHover(project, description) {
        project.addEventListener('mouseover', () => {
            description.classList.remove('hidden');  // Show description on hover
        });
        
        project.addEventListener('mouseout', () => {
            description.classList.add('hidden');  // Hide description when mouse leaves
        });
    }

    // List of all projects with their respective descriptions
    const projects = [
        { projectClass: '.llm_project', descriptionId: '#llm_description' },
        { projectClass: '.creatives_project', descriptionId: '#creatives_description' },
        { projectClass: '.puzzle_project', descriptionId: '#puzzle_description' },
        { projectClass: '.deck_project', descriptionId: '#deck_description' },
        { projectClass: '.bus_project', descriptionId: '#bus_description' },
        { projectClass: '.chinookmusic_project', descriptionId: '#chinookmusic_description' },
        { projectClass: '.acmetravel_project', descriptionId: '#acmetravel_description' },
        { projectClass: '.battleship_project', descriptionId: '#battleship_description' },
        { projectClass: '.recognition_project', descriptionId: '#recognition_description' },
        { projectClass: '.calculator_project', descriptionId: '#calculator_description' },
        { projectClass: '.airquality_project', descriptionId: '#airquality_description' }
    ];

    // Loop through each project and apply the hover effect
    projects.forEach(({ projectClass, descriptionId }) => {
        const projectElement = document.querySelector(projectClass);
        const descriptionElement = document.querySelector(descriptionId);

        if (projectElement && descriptionElement) {
            toggleDescriptionOnHover(projectElement, descriptionElement);
        }
    });
})();





//

// Dynamically generate date
let currentDate = new Date();
let fullYear = currentDate.getFullYear();
footerDate = document.querySelector("#footerYear");
footerDate.textContent = fullYear;