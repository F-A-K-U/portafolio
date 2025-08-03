import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ChevronDown, Play, Github } from 'lucide-react';

// Importa tus páginas adicionales
import ProyectoA from './pages/Horizon';
import Bookshelf from './pages/Bookshelf';
import Itica from './pages/Itica';
import cv from './assets/FACUNDO_PRESA_CV_ENG.pdf';

// Tu componente Portfolio original pero con la sección de experiencias actualizada
const Portfolio = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const sections = [
        'home',
        'philosophy',
        'experiences',
        'contact'
    ];

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();

            if (isScrolling) return;

            setIsScrolling(true);

            if (e.deltaY > 0 && currentSection < sections.length - 1) {
                setCurrentSection(prev => prev + 1);
            } else if (e.deltaY < 0 && currentSection > 0) {
                setCurrentSection(prev => prev - 1);
            }

            setTimeout(() => setIsScrolling(false), 800);
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => window.removeEventListener('wheel', handleWheel);
    }, [currentSection, isScrolling, sections.length]);

    const scrollToSection = (index) => {
        if (isScrolling) return;
        setIsScrolling(true);
        setCurrentSection(index);
        setTimeout(() => setIsScrolling(false), 800);
    };

    return (
        <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 text-white relative">
            {/* Navigation dots */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
                {sections.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSection === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div>

            {/* Sections Container */}
            <div
                className="h-full transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateY(-${currentSection * 100}vh)`
                }}
            >
                {/* Section 1: Home */}
                <section className="h-screen flex flex-col items-center justify-center px-8">
                    <div className="text-center">
                        <h1 className="text-7xl font-bold mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Facundo Presa
                        </h1>
                        <p className="text-2xl text-gray-300" style={{ fontFamily: 'Georgia, serif' }}>
                            Desarrollador Fullstack y diseñador
                        </p>
                    </div>
                </section>

                {/* Section 2: Philosophy */}
                <section className="h-screen flex flex-col items-center justify-center px-8">
                    <div className="text-center max-w-4xl">
                        <h2 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Facundo Presa
                        </h2>

                        <blockquote className="text-3xl leading-relaxed mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                            "Creo en la <span className="font-semibold">libertad</span> de poder crear lo que uno es y lo que uno quiere mostrar al mundo."
                        </blockquote>

                        <p className="text-xl text-gray-300" style={{ fontFamily: 'Georgia, serif' }}>
                            Mis creaciones son un <span className="italic" style={{fontFamily: 'Georgia, serif'}}>reflejo de quien soy</span>
                        </p>
                    </div>
                </section>

                {/* Section 3: Experiences - ACTUALIZADA */}
                <ExperiencesSection />

                {/* Section 4: Contact */}
                <section className="h-screen flex flex-col items-center justify-center px-8">
                    <div className="text-center max-w-4xl">
                        <h2 className="text-5xl font-bold mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Facundo Presa
                        </h2>

                        <p className="text-2xl mb-16" style={{ fontFamily: 'Georgia, serif' }}>
                            ¿Quieres contactarme?
                        </p>

                        <div className="text-left max-w-md mx-auto mb-12">
                            <div className="flex items-center mb-6">
                                <span className="text-xl w-24" style={{ fontFamily: 'Georgia, serif' }}>Mail</span>
                                <a className="text-xl" style={{ fontFamily: 'Georgia, serif' }} href="mailto:trabajos@faku.pro">trabajos@faku.pro</a>
                            </div>

                            <div className="flex items-center mb-6">
                                <span className="text-xl w-24" style={{ fontFamily: 'Georgia, serif' }}>LinkedIn</span>
                                <a href="https://linkedin.com/in/fakup" className="text-xl underline hover:text-gray-300 transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                                    linkedin.com/in/fakup
                                </a>
                            </div>

                            <div className="flex items-center mb-8">
                                <span className="text-xl w-24" style={{ fontFamily: 'Georgia, serif' }}>CV</span>
                                <button className="bg-gray-600 hover:bg-gray-500 hover:cursor-pointer text-white px-4 py-2 rounded-full text-sm transition-colors" onClick={() => window.open(cv, '_blank')}>
                                    Descargar CV
                                </button>
                            </div>

                            <div className="flex gap-4 mb-8">
                                <a href="https://github.com/F-A-K-U" target="_blank" rel="noopener noreferrer">
                                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                                        <Github className="w-6 h-6" />
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="border-t border-gray-600 pt-8">
                            <blockquote className="text-2xl leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                "Busco mostrarle al mundo que hay en mi mente y como yo veo las cosas"
                            </blockquote>
                        </div>
                    </div>
                </section>
            </div>

            {/* Scroll indicator */}
            {currentSection < sections.length - 1 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-gray-400" />
                </div>
            )}
        </div>
    );
};

// Componente de Experiencias actualizado con navegación
const ExperiencesSection = () => {
    const navigate = useNavigate();

    const handleExperienceClick = (route) => {
        navigate(route);
    };

    return (
        <section className="h-screen flex flex-col items-center justify-center px-8">
            <div className="text-center max-w-4xl">
                <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Facundo Presa
                </h2>

                <p className="text-xl text-gray-300 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
                    Mis creaciones son un <span className="italic" style={{fontFamily: 'Georgia, serif'}}>reflejo de quien soy</span>
                </p>

                <h3 className="text-4xl mb-16" style={{ fontFamily: 'Georgia, serif' }}>
                    Mis experiencias
                </h3>

                <div className="flex justify-center gap-8">
                    {/* Experiencia 1 */}
                    <div
                        className="w-24 h-24 bg-gray-200/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300/60 transition-colors group"
                        onClick={() => handleExperienceClick('/proyecto-a')}
                    >
                        <div className="text-center">
                            <Play className="w-10 h-10 text-gray-300 mx-auto" />
                        </div>
                    </div>

                    {/* Experiencia 2 */}
                    <div
                        className="w-24 h-24 bg-gray-200/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300/60 transition-colors group"
                        onClick={() => handleExperienceClick('/Bookshelf')}
                    >
                        <div className="text-center">
                            <Play className="w-10 h-10 text-gray-300 mx-auto" />
                        </div>
                    </div>
                    
                    {/* Experiencia 3 */}
                    <div
                        className="w-24 h-24 bg-gray-200/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300/60 transition-colors group"
                        onClick={() => handleExperienceClick('/Itica')}
                    >
                        <div className="text-center">
                            <Play className="w-10 h-10 text-gray-300 mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// App principal con Router
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/proyecto-a" element={<ProyectoA />} />
                <Route path="/Bookshelf" element={<Bookshelf />} />
                <Route path="/Itica" element={<Itica />} />
            </Routes>
        </Router>
    );
};

export default App;