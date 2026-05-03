"use client"

import { motion } from "framer-motion"

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } as const},
}

const link = "https://encontresuaviagem.com.br/consultores/roney-borges-coelho/"

const services = [
    {
        icon: "✈️",
        title: "Passagens Aéreas",
        subtitle: "Até 50% OFF",
        description:
            "Acesso a tarifas exclusivas e combinações de voos que você não encontra nos comparadores comuns. Nacionais e internacionais.",
        href: link,
        highlight: true,
    },
    {
        icon: "🌍",
        title: "Viagem Internacional",
        subtitle: "Experiência completa",
        description:
            "Planejamento completo para sua viagem internacional: passagem, hotel, seguro, passeios e tudo o mais que precisar.",
        href: link,
        highlight: false,
    },
    {
        icon: "🏨",
        title: "Hospedagem",
        subtitle: "Melhores preços",
        description:
            "Hotéis, resorts e pousadas selecionados com custo-benefício imbatível, do econômico ao luxo cinco estrelas.",
        href: link,
        highlight: false,
    },
    {
        icon: "🚢",
        title: "Cruzeiros",
        subtitle: "Experiência surreal",
        description:
            "Navegue pelos destinos mais deslumbrantes do mundo. Cabines, itinerários e promoções que cabem no seu bolso.",
        href: link,
        highlight: false,
    },
    {
        icon: "🛡️",
        title: "Seguro Viagem",
        subtitle: "Viaje protegido",
        description:
            "O seguro ideal para cada tipo de viagem. Proteção médica, bagagem e cancelamentos — viajar seguro é viajar melhor.",
        href: link,
        highlight: false,
    },
    {
        icon: "📋",
        title: "Consultoria Personalizada",
        subtitle: "Atendimento exclusivo",
        description:
            "Do roteiro ao retorno: monto sua viagem completa com atenção a cada detalhe. Você só precisa fazer as malas.",
        href: "https://api.whatsapp.com/send?phone=5511980127335&text=Vim%20do%20site!%20Quero%20uma%20consultoria%20personalizada!",
        highlight: false,
    },
]

export default function Servicos() {
    return (
        <section
            id="servicos"
            className="relative overflow-hidden py-24 md:py-32"
            style={{
                /* Une a saída de Viagens (#0d1b40) → Footer (#0F1F4B) sem corte */
                background:
                    "linear-gradient(to bottom, #0d1b40 0%, #0e1c42 30%, #0F1F4B 70%, #0F1F4B 100%)",
            }}
        >
            {/* linhas diagonais decorativas */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(135deg, #F59E0B 0px, #F59E0B 1px, transparent 1px, transparent 48px)",
                }}
            />
            {/* brilho superior direito */}
            <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(ellipse,_rgba(245,158,11,0.07)_0%,_transparent_70%)]" />

            <div className="relative z-10 mx-auto max-w-6xl px-6">

                {/* cabeçalho */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[3px] text-amber-400">
                        O que ofereço
                    </span>
                    <h2
                        className="mb-5 text-[32px] font-black uppercase leading-tight text-white md:text-[52px]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        Serviços feitos para<br />
                        <span className="text-amber-500">simplificar sua vida</span>
                    </h2>
                    <p className="mx-auto max-w-[500px] text-base text-white/50 leading-relaxed">
                        Cuido de tudo para que você apenas se preocupe em aproveitar cada momento da sua viagem.
                    </p>
                </motion.div>

                {/* grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((svc) => (
                        <motion.a
                            key={svc.title}
                            variants={item}
                            href={svc.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer block
                ${svc.highlight
                                    ? "border-amber-500/50 bg-amber-500/10"
                                    : "border-white/10 bg-white/5 hover:border-white/20"
                                }`}
                        >
                            {svc.highlight && (
                                <div className="absolute right-4 top-4 rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0F1F4B]">
                                    Popular
                                </div>
                            )}

                            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-amber-500/10 to-transparent" />

                            <div className="relative z-10">
                                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-3xl group-hover:scale-110 transition-transform duration-300">
                                    {svc.icon}
                                </div>

                                <h3
                                    className="mb-1 text-lg font-black text-white"
                                    style={{ fontFamily: "Montserrat, sans-serif" }}
                                >
                                    {svc.title}
                                </h3>
                                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-400/80">
                                    {svc.subtitle}
                                </p>
                                <p className="text-sm leading-relaxed text-white/55 group-hover:text-white/75 transition-colors">
                                    {svc.description}
                                </p>

                                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-amber-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                                    <span>Saiba mais</span><span>→</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}