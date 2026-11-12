import { displayProjects } from "./controllers/projectsController.js";

// Find the projects container on the homepage
const projectsContainer = document.querySelector(".projects__container");

// Display the projects
displayProjects(projectsContainer);