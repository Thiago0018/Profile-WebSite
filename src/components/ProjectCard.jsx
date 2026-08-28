// src/components/ProjectCard.jsx
export function ProjectCard({ title, tag, description, technologies, demoUrl, githubUrl }) {
    return (
        <div className="project-card">
            <div className="project-header">
                <div className="project-icon-box">
                    {/* Ícone genérico do projeto */}
                    <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="project-title-area">
                    <h3>{title}</h3>
                    <span className="project-tag">{tag}</span>
                </div>
            </div>

            <p className="project-description">{description}</p>

            <div className="project-techs">
                {technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                ))}
            </div>

            <div className="project-footer">
                <a href={demoUrl} target="_blank" rel="noreferrer" className="link-demo">
                    Ver projeto &rarr;
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer" className="link-github" aria-label="Repositório GitHub">
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                </a>
            </div>
        </div>
    );
}