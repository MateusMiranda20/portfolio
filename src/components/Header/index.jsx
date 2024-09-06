import { useState, useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Container, Headerr, H1, Nav, Ul } from './styles.js';

const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [isAnimated, setIsAnimated] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    // Função para verificar qual seção está visível
    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Ajuste o valor para considerar o header
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        setActiveLink(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Remove o listener de scroll quando o componente for desmontado
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
        setTimeout(() => {
            setIsAnimated(false);
        }, 1000);
    }, []);

    return (
        <Container
            data-aos={isAnimated ? "fade-down" : ""}
            className={!isAnimated ? "fixed-header" : ""}
        >
            <Headerr id="home">
                <div className="logo-container">
                    <H1>Mateus Miranda<span>.</span></H1>
                </div>
                <Nav>
                    <Ul>
                        <li>
                            <a
                                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                                href="#"
                                onClick={() => handleLinkClick('home')}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className={`nav-link ${activeLink === 'sobre' ? 'active' : ''}`}
                                href="#sobre"
                                onClick={() => handleLinkClick('sobre')}
                            >
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a
                                className={`nav-link ${activeLink === 'projetos' ? 'active' : ''}`}
                                href="#projetos"
                                onClick={() => handleLinkClick('projetos')}
                            >
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a
                                className={`nav-link ${activeLink === 'contatos' ? 'active' : ''}`}
                                href="#contatos"
                                onClick={() => handleLinkClick('contatos')}
                            >
                                Contatos
                            </a>
                        </li>
                    </Ul>
                </Nav>
            </Headerr>
            {/* End header*/}
        </Container>
    );
};

export default Header;
