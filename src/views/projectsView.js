
export function renderProjects(projects) {
    return projects.map(project => `
        <div class="project-card">
            <div class="project-card__image">
                <img
                    src="${import.meta.env.BASE_URL}${project.image}"
                    alt="${project.title}"
                >

                <div class="project-card__overlay">
                    ${project.demo ? `
                        <a
                            href="${project.demo}"
                            class="project-card__link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View ${project.title}"
                        >
                            <i class="bx bx-link-external"></i>
                        </a>
                    ` : ""}
                </div>
            </div>

            <div class="project-card__content">
                <h3
                    class="project-card__title"
                    data-en="${project.title}"
                    data-fr="${project.titleFr}"
                >${project.title}</h3>

                <p
                    class="project-card__description"
                    data-en="${project.description}"
                    data-fr="${project.descriptionFr}"
                >${project.description}</p>

                <div class="project-card__tech">
                    ${project.technologies.map(tech =>
                        `<span class="tech-tag">${tech}</span>`
                    ).join("")}
                </div>

                <a
                    href="${project.github}"
                    class="project-card__github"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="bx bxl-github"></i>
                    <span data-en="View Code" data-fr="Voir le code">View Code</span>
                </a>
            </div>
        </div>
    `).join("");
}
