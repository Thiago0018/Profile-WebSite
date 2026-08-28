export function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <span className="logo-icon">&lt;/&gt;</span>
                <strong>Thiago</strong> <span>de Souza</span>
            </div>

            <nav className="navbar-links">
                <a href="#inicio" className="active">Início</a>
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#tecnologias">Tecnologias</a>
                <a href="#contato">Contato</a>
            </nav>

            <a href="/curriculo.pdf" download className="btn-download-cv">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Download CV
            </a>
        </header>
    );
}