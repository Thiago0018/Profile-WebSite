// src/components/ProjectsSection.jsx
import { projectsData } from '../data/projectsData';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
    return (
        <section className="projects-section" id="projetos">
            <span className="section-label">MEUS PROJETOS</span>
            <h2 className="section-title">Projetos em Destaque</h2>

            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
}