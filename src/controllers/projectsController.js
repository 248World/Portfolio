import { projects } from "../models/projects.js";
import { renderProjects } from "../views/projectsView.js";

export function displayProjects(container) {
    if (!container) return;

    container.innerHTML = renderProjects(projects);
}
