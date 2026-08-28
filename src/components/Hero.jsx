// src/components/Hero.jsx
import { CodeCard } from './CodeCard';

export function Hero() {
    return (
        <section className="hero-section" id="inicio">
            <div className="hero-content">
                <span className="greeting">Olá, eu sou</span>
                <h1 className="hero-title">Thiago de Souza</h1>
                <h2 className="hero-subtitle">Desenvolvedor .NET em formação</h2>
                <p className="hero-description">
                    Estudante de Ciência da Computação apaixonado por tecnologia, desenvolvimento de software e criação de soluções que fazem a diferença no dia a dia das pessoas.
                </p>

                <div className="hero-buttons">
                    <a href="#projetos" className="btn-primary">
                        Ver Projetos &rarr;
                    </a>
                    <a href="#sobre" className="btn-secondary">
                        Sobre Mim &#128100;
                    </a>
                </div>

                <div className="social-links">
                    <a href="https://github.com/Thiago0018" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </a>
                    <a href="mailto:seu-email@gmail.com" aria-label="E-mail">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 6.888l3.824 3.099 3.83-3.106 5.551 6.861h-18.763l5.558-6.854zm10.201-1.142l4.623-3.743v9.447l-4.623-5.704z" /></svg>
                    </a>
                </div>
            </div>

            <div className="hero-card-wrapper">
                <CodeCard />
            </div>
        </section>
    );
}