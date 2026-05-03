/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const destinations = [
    {
        name: "Orlando",
        country: "Estados Unidos",
        tag: "Família",
        description: "Magia, parques temáticos e experiências inesquecíveis para toda a família.",
        image: "https://images.unsplash.com/photo-1575931953324-fcac7094999e?w=800&q=80",
        accent: "#60A5FA",
        accentDim: "rgba(96,165,250,0.25)",
    },
    {
        name: "Paris",
        country: "França",
        tag: "Romântico",
        description: "A cidade do amor, moda e gastronomia. Uma experiência única e sofisticada.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
        accent: "#FB7185",
        accentDim: "rgba(251,113,133,0.25)",
    },
    {
        name: "Cancún",
        country: "México",
        tag: "Praia",
        description: "Praias paradisíacas, águas cristalinas e a vibrante cultura mexicana.",
        image: "https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=800&q=80",
        accent: "#22D3EE",
        accentDim: "rgba(34,211,238,0.25)",
    },
    {
        name: "Dubai",
        country: "Emirados Árabes",
        tag: "Luxo",
        description: "Arquitetura futurista, shopping de alto padrão e deserto ao pôr do sol.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
        accent: "#FCD34D",
        accentDim: "rgba(252,211,77,0.25)",
    },
    {
        name: "Buenos Aires",
        country: "Argentina",
        tag: "Gastronomia",
        description: "Tango, cultura europeia e a melhor carne do mundo a poucos voos de distância.",
        image: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800&q=80",
        accent: "#34D399",
        accentDim: "rgba(52,211,153,0.25)",
    },
    {
        name: "Lisboa",
        country: "Portugal",
        tag: "Cultural",
        description: "Fado, pastéis de Belém, tuk-tuks e uma das cidades mais charmosas da Europa.",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
        accent: "#FB923C",
        accentDim: "rgba(251,146,60,0.25)",
    },
]

const GAP = 24;

export default function Viagens() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const maxIndex = destinations.length - 2;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        resetPause();
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
        resetPause();
    };

    const resetPause = () => {
        setPaused(true);
        setTimeout(() => setPaused(false), 5000);
    };

    useEffect(() => {
        if (paused) return;
        const interval = setInterval(handleNext, 4000);
        return () => clearInterval(interval);
    }, [paused, currentIndex]);

    return (
        <section
            id="viagens"
            className="relative overflow-hidden py-24 md:py-32"
            style={{
                background: "linear-gradient(to bottom, #1a3380 0%, #112060 12%, #0F1F4B 30%, #0a1a3d 65%, #0d1b40 100%)",
            }}
        >
            <style>{`
                @keyframes fillBar { from { width: 0%; } to { width: 100%; } }
            `}</style>

            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <span className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[3px] text-amber-400">
                        Destinos Selecionados
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Para onde você quer <span className="text-amber-500">viajar?</span>
                    </h2>
                </div>

                <div className="relative group mb-16">
                    {/* Setas */}
                    <button onClick={handlePrev} className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all hover:scale-110 border border-gray-100"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
                    <button onClick={handleNext} className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all hover:scale-110 border border-gray-100"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>

                    <div className="overflow-hidden">
                        <motion.div
                            className="flex"
                            animate={{ x: `calc(-${currentIndex * 50}% - ${currentIndex * (GAP / 2)}px)` }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                            style={{ gap: GAP }}
                        >
                            {destinations.map((dest, idx) => (
                                <motion.a
                                    key={idx}
                                    href={`https://api.whatsapp.com/send?phone=5511980127335&text=Quero%20viajar%20para%20${dest.name}`}
                                    target="_blank"
                                    className="relative shrink-0 group/card rounded-3xl overflow-hidden border border-white/10"
                                    style={{ width: `calc(50% - ${GAP / 2}px)`, height: 420 }}
                                >
                                    <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                                        <span className="text-[10px] font-black uppercase tracking-widest mb-3 px-3 py-1 rounded-full self-start" style={{ backgroundColor: dest.accentDim, color: dest.accent }}>{dest.tag}</span>
                                        <h3 className="text-2xl font-black text-white mb-2">{dest.name}</h3>
                                        <p className="text-sm text-white/60 leading-relaxed max-h-0 opacity-0 group-hover/card:max-h-24 group-hover/card:opacity-100 transition-all duration-500 overflow-hidden">{dest.description}</p>
                                    </div>
                                    <div className="absolute top-0 left-0 right-0 h-1.5 opacity-70" style={{ backgroundColor: dest.accent }} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* --- SEÇÃO MELHORADA: PROGRESSO / OUTROS --- */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/10">

                    {/* Lado Esquerdo: Contador e Barra de Progresso */}
                    <div className="flex items-center gap-6 w-full md:w-auto">
                        <div className="flex items-baseline gap-1 font-mono text-white">
                            <span className="text-2xl font-black text-amber-500">{(currentIndex + 1).toString().padStart(2, '0')}</span>
                            <span className="text-white/30 text-sm">/</span>
                            <span className="text-white/30 text-sm">{(maxIndex + 1).toString().padStart(2, '0')}</span>
                        </div>

                        <div className="relative h-[2px] w-48 bg-white/10 rounded-full overflow-hidden">
                            {/* Trilho de Fundo */}
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                                initial={false}
                                animate={{
                                    width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%`
                                }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            />
                            {/* Brilho do Autoplay */}
                            {!paused && (
                                <div
                                    className="absolute top-0 left-0 h-full bg-white/40"
                                    style={{
                                        width: '100%',
                                        animation: `fillBar 4000ms linear infinite`
                                    }}
                                />
                            )}
                        </div>
                    </div>

                    {/* Lado Direito: Chamada para Ação */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="text-center md:text-right">
                            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[2px] mb-1">Personalizado</p>
                            <p className="text-white/80 text-sm font-medium">Não encontrou o que procurava?</p>
                        </div>

                        <a
                            href="https://api.whatsapp.com/send?phone=5511980127335&text=Olá! Quero um roteiro personalizado."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex items-center gap-3 bg-transparent border border-amber-500/40 hover:border-amber-500 px-6 py-3 rounded-full transition-all duration-300 overflow-hidden"
                        >
                            {/* Efeito de brilho ao passar o mouse */}
                            <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                            <span className="text-amber-500 text-sm font-black uppercase tracking-widest">
                                Consultar Especialista
                            </span>

                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-[#0F1F4B] group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.312l-.539 2.001 2.045-.537c.915.51 1.946.865 3.237.866 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm3.435 8.16c-.147.415-.852.766-1.168.808-.316.042-.628.217-1.787-.24-1.405-.552-2.311-1.984-2.381-2.078-.07-.094-.574-.764-.574-1.459 0-.696.363-1.037.493-1.178.13-.14.283-.175.378-.175.094 0 .188 0 .27.005.088.005.205-.033.322.247.117.283.4.972.435 1.043.035.07.059.153.012.247-.047.095-.071.153-.141.235-.07.082-.148.183-.212.247-.071.07-.145.147-.063.288.082.141.365.602.783.976.539.481.993.63 1.134.7.141.07.223.059.306-.035.082-.094.352-.412.446-.553.094-.141.188-.118.318-.07.13.047.824.388.965.459.141.07.235.106.27.165.035.059.035.341-.112.756z" />
                                </svg>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}