import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Github } from 'lucide-react';

const Tecnologias = [
    'React',
    'Node.js',
    'Tailwind CSS',
]

const Caracteristicas = [
    'Responsive Design',
];



const Bookshelf = () => {
    const navigate = useNavigate();

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [scrollY, setScrollY] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-800 to-slate-800 text-white">
            <button
                onClick={handleBackClick}
                className={`fixed top-8 left-8 z-50 flex items-center gap-2 bg-gray-200/20 hover:bg-gray-300/40 cursor-pointer px-4 py-2 rounded-full transition-colors transition-300'} ${scrollY > 20 ? 'bg-slate-300/40 backdrop-blur-3xl' : 'bg-gray-200/20'}`}
            >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
            </button>

            <div className="container mx-auto px-8 py-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl font-bold mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Itica
                    </h1>

                    <p className="text-xl text-gray-300 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
                        Web para empresa B2B
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white/10 border-1 border-white/20 backdrop-blur-lg shadow-lg p-6 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Tecnologías
                            </h3>
                            <ul className="text-gray-300" style={{ fontFamily: 'Georgia, serif' }}>
                                {Tecnologias.map((tecnologia, index) => (
                                    <li key={index}>• {tecnologia}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/10 border-1 border-white/20 backdrop-blur-lg shadow-lg p-6 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                                Características
                            </h3>
                            <ul className="text-gray-300" style={{ fontFamily: 'Georgia, serif' }}>
                                {Caracteristicas.map((caracteristica, index) => (
                                    <li key={index}>• {caracteristica}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                        <div className="h-64 flex items-center justify-center mb-8 bg-white/10 border-1 border-white/20 backdrop-blur-lg shadow-lg p-6 rounded-2xl">
                            <span className="text-gray-400">Imagen/Video del proyecto</span>
                        </div>

                    <div>
                        <button className="ml-5 bg-gray-200/20 hover:bg-gray-300/60 text-white font-bold py-2 px-4 rounded-xl transition-colors" onClick={() => window.open('https://itica.lat', '_blank')}>
                            Ver Mas
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Bookshelf;