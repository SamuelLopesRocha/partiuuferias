"use client"

import { motion } from "framer-motion"

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
}

const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } as const }
}

const link = "#servicos"

const services = [
    { label: "Passagens aéreas com até 50% OFF", icon: "✈️", href: link },
    { label: "Viagem internacional com a melhor experiência", icon: "🌍", href: link },
    { label: "Hospedagem perfeita com os melhores preços", icon: "🏨", href: link },
    { label: "Cruzeiros, uma experiência surreal", icon: "🚢", href: link },
    { label: "Seguro viagem ideal para sua viagem", icon: "🛡️", href: link },
]

const contacts = [
    { icon: "📧", label: "Contato@partiuuferias.com.br", href: "mailto:Contato@partiuuferias.com.br" },
    { icon: "📍", label: "Brasil", href: null },
]

export default function Footer() {
    return (
        <section
            id="contato"
            className="relative overflow-hidden text-white"
            style={{
                /* Mesmo azul do Hero — começa onde Serviços termina (#1a3380) */
                background: "linear-gradient(to bottom, #1a3380 0%, #1E3A8A 40%, #1a3380 100%)",
            }}
        >
            {/* Ondas decorativas — igual ao Hero */}
            <div className="pointer-events-none absolute -right-[120px] -top-[80px] w-[520px] h-[520px] rounded-full border-[60px] border-blue-400/10" />
            <div className="pointer-events-none absolute -right-[200px] -top-[160px] w-[680px] h-[680px] rounded-full border-[40px] border-blue-400/5" />
            <div className="pointer-events-none absolute -left-[80px] bottom-0 w-[400px] h-[400px] rounded-full border-[50px] border-blue-500/10" />

            {/* Brilho âmbar central atrás do título */}
            <div className="pointer-events-none absolute left-1/2 top-16 z-0 h-[400px] w-[600px] -translate-x-1/2
                bg-[radial-gradient(ellipse,_rgba(245,158,11,0.10)_0%,_transparent_70%)]" />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-80px" }}
                className="relative z-10"
            >
                {/* CTA Section */}
                <div className="relative z-10 mx-auto max-w-[800px] px-6 py-24 text-center md:py-[100px]">
                    <motion.h2
                        variants={item}
                        className="mb-6 text-[32px] font-black leading-[1.15] md:text-[56px]"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                        Pronto para sua<br />
                        <span className="text-amber-500">próxima viagem?</span>
                    </motion.h2>

                    <motion.p
                        variants={item}
                        className="mx-auto mb-10 max-w-[500px] text-lg leading-relaxed text-white/70"
                    >
                        Entre em contato e receba um atendimento exclusivo
                        para planejar a viagem dos seus sonhos do início ao fim.
                    </motion.p>

                    <motion.div variants={item}>
                        <a
                            href="https://api.whatsapp.com/send?phone=5511980127335&text=Vim%20do%20site!%20Quero%20falar%20com%20o%20consultor!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-2xl bg-amber-500 px-8 py-4 text-base
                                font-extrabold text-[#1E3A8A]
                                shadow-[0_8px_32px_rgba(245,158,11,0.35)]
                                transition-all hover:bg-amber-400 hover:-translate-y-1
                                hover:shadow-[0_12px_40px_rgba(245,158,11,0.5)]"
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L.057 23.572a.75.75 0 0 0 .921.921l5.715-1.478A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.727 9.727 0 0 1-4.964-1.36l-.355-.213-3.685.952.972-3.592-.232-.371A9.72 9.72 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                            </svg>
                            Falar com o Consultor
                        </a>
                    </motion.div>
                </div>

                {/* Divisor */}
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative border-t border-white/10">
                        <div className="absolute left-1/2 top-[-1px] h-[2px] w-24 -translate-x-1/2 bg-amber-500/60" />
                    </div>
                </div>

                {/* Grid */}
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Col 1 - Branding */}
                    <motion.div variants={item}>
                        <div className="mb-4 flex items-center gap-2.5">
                            <div className="h-8 w-1.5 rounded bg-amber-500" />
                            <h3 className="text-2xl font-black" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                Partiuuferias
                            </h3>
                        </div>
                        <p className="text-[15px] leading-relaxed text-white/70">
                            Especialista em viagens personalizadas — passagens,
                            hotéis, cruzeiros e muito mais. Atendimento exclusivo
                            do início ao fim para você viajar com tranquilidade.
                        </p>
                    </motion.div>

                    {/* Col 2 - Serviços */}
                    <motion.div variants={item}>
                        <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[2px] text-white/40">
                            Serviços
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {services.map(({ label, icon, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 text-[14px] text-white/70 transition-colors hover:text-amber-400"
                                    >
                                        <span>{icon}</span>{label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Col 3 - Contato */}
                    <motion.div variants={item}>
                        <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[2px] text-white/40">
                            Contato
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {contacts.map(({ icon, label, href }) => (
                                <li key={label}>
                                    {href ? (
                                        <a
                                            href={href}
                                            className="flex items-start gap-2.5 break-all text-[15px] text-white/70 transition-colors hover:text-amber-400"
                                        >
                                            <span>{icon}</span><span>{label}</span>
                                        </a>
                                    ) : (
                                        <span className="flex items-center gap-2.5 text-[15px] text-white/50">
                                            <span>{icon}</span>{label}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    variants={item}
                    className="max-w-7xl mx-auto px-6 mt-14 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 px-6 py-6 pb-12 select-none"
                >
                    <p className="text-white/30 text-sm flex items-center gap-2">
                        <span className="hidden sm:block text-white">|</span>

                        <span>
                            Desenvolvido por{" "}
                            <a
                                href="https://www.mathx8.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                            >
                                Matheus
                            </a>
                            {" "}e{" "}
                            <a
                                href="https://www.linkedin.com/in/samuel-lopes-gomes/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                            >
                                Samuel
                            </a>
                        </span>
                    </p>
                    <p className="text-sm text-white/30">
                        Brasil
                    </p>

                </motion.div>
            </motion.div>
        </section>
    )
}