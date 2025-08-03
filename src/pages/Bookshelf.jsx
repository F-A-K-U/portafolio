import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Github } from 'lucide-react';

const Tecnologias = [
    'React',
    'Node.js',
    'MongoDB',
    'Tailwind CSS',
    'Express.js',
]

const Caracteristicas = [
    'Responsive Design',
    'Autenticación (OAuth)',
    'API',
];

const Bookshelf = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-800 to-slate-800 text-white">
            {/* Botón de regreso */}
            <button
                onClick={handleBackClick}
                className={`fixed top-8 left-8 z-50 flex items-center gap-2 bg-gray-200/20 hover:bg-gray-300/40 cursor-pointer px-4 py-2 rounded-full transition-colors transition-300'} ${scrollY > 20 ? 'bg-slate-300/40 backdrop-blur-3xl' : 'bg-gray-200/20'}`}
            >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
            </button>

            {/* Contenido del proyecto */}
            <div className="container mx-auto px-8 py-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl font-bold mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Bookshelf
                    </h1>

                    <p className="text-xl text-gray-300 mb-12" style={{ fontFamily: 'Georgia, serif' }}>
                        Un sitio web para gestionar tu colección de libros.
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

                        {/* Placeholder para imágenes/videos */}
                        <div className="h-64 flex items-center justify-center mb-8 bg-white/10 border-1 border-white/20 backdrop-blur-lg shadow-lg p-6 rounded-2xl">
                            <span className="text-gray-400">Imagen/Video del proyecto</span>
                        </div>

                    <div className=''>
                        <button className="ml-5 bg-gray-200/20 hover:bg-gray-300/60 text-white font-bold py-2 px-4 rounded-xl transition-colors" onClick={() => window.open('https://bookshelf.faku.pro', '_blank')}>
                            Ver más
                        </button>
                        <button className="ml-5 bg-gray-200/20 hover:bg-gray-300/60 text-white font-bold py-2 px-4 rounded-xl transition-colors" onClick={() => window.open('https://github.com/F-A-K-U/book-tracker', '_blank')}>
                            <Github className="mr-2 w-5 h-5 inline-block" />
                            Codigo  
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Bookshelf;