"use client"

import { motion } from "framer-motion"

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
}

const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" as const } }
}

const services = [
    { label: "Passagens aéreas com até 50% OFF", icon: "✈️", href: "https://encontresuaviagem.com.br/passagem_aerea/passagens-aereas/" },
    { label: "Viagem internacional com a melhor experiência", icon: "🌍", href: "https://encontresuaviagem.com.br/viagem_internacional/viagem-internacional/" },
    { label: "Hospedagem perfeita com os melhores preços", icon: "🏨", href: "https://encontresuaviagem.com.br/hospedagem/hospedagem/" },
    { label: "Cruzeiros, uma experiência surreal", icon: "🚢", href: "https://encontresuaviagem.com.br/cruzeiros/cruzeiros/" },
    { label: "Seguro viagem ideal para sua viagem", icon: "🛡️", href: "https://encontresuaviagem.com.br/seguro_viagem/seguro-viagem/" },
]

const contacts = [
    { icon: "📧", label: "Contato@partiuuferias.com.br", href: "mailto:Contato@partiuuferias.com.br" },
    { icon: "📍", label: "Brasil", href: null },
]

export default function Footer() {
    return (
        <section id="contato" style={{ background: '#0F1F4B', color: 'white', position: 'relative', overflow: 'hidden' }}>
            {/* Padrão diagonal de linhas */}
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.07,
                backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    #F59E0B 0px,
                    #F59E0B 1px,
                    transparent 1px,
                    transparent 40px
                )`,
                pointerEvents: 'none',
            }} />
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-80px" }}
                style={{ position: 'relative', zIndex: 1 }}
            >
                {/* CTA */}
                {/* Luz de fundo atrás do título */}
                <div style={{
                    position: 'absolute',
                    top: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '400px',
                    background: 'radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0,
                }} 
                />

                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '100px 24px 80px', position: 'relative', zIndex: 1 }}>
                    <motion.h2 variants={item} style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, lineHeight: 1.15, margin: '0 0 24px' }}>
                        Pronto para sua<br />
                        <span style={{ color: '#F59E0B' }}>próxima viagem?</span>
                    </motion.h2>

                    <motion.p variants={item} style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '500px', margin: '0 auto 40px', lineHeight: 1.7 }}>
                        Entre em contato e receba um atendimento exclusivo
                        para planejar a viagem dos seus sonhos do início ao fim.
                    </motion.p>

                    <motion.div variants={item}>
                        <a
                            href="https://api.whatsapp.com/send?phone=5511980127335&text=Vim%20do%20site!%20Quero%20falar%20com%20o%20consultor!"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                background: '#F59E0B',
                                color: '#1E3A8A',
                                fontWeight: 800,
                                fontSize: '16px',
                                padding: '16px 32px',
                                borderRadius: '16px',
                                textDecoration: 'none',
                                boxShadow: '0 8px 32px rgba(245,158,11,0.25)',
                                transition: 'transform 0.2s',
                            }}
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
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '50%', top: '-1px', transform: 'translateX(-50%)', width: '96px', height: '2px', background: 'rgba(245,158,11,0.6)' }} />
                    </div>
                </div>

                {/* Grid */}
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px' }}>

                    {/* Col 1 */}
                    <motion.div variants={item}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                            <div style={{ width: '6px', height: '32px', background: '#F59E0B', borderRadius: '4px' }} />
                            <h3 style={{ fontSize: '22px', fontWeight: 900, margin: 0 }}>Partiuuferias</h3>
                        </div>
                        <p style={{ fontSize: '15px', color: 'rgba(209,213,219,1)', fontWeight: 400, lineHeight: 1.8, margin: 0 }}>
                            Especialista em viagens personalizadas — passagens,
                            hotéis, cruzeiros e muito mais. Atendimento exclusivo
                            do início ao fim para você viajar com tranquilidade.
                        </p>
                    </motion.div>

                    {/* Col 2 */}
                    <motion.div variants={item}>
                        <h4 style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', marginBottom: '20px' }}>
                            Serviços
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {services.map(({ label, icon }) => (
                                <li key={label}>
                                    <span
                                        style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'rgba(255,255,255,0.75)', cursor: 'pointer', transition: 'color 0.2s' }}
                                        onMouseEnter={e => (e.currentTarget.style.color = '#F59E0B')}
                                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
                                    >
                                        <span>{icon}</span>{label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Col 3 */}
                    <motion.div variants={item}>
                        <h4 style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.35)', marginBottom: '20px' }}>
                            Contato
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {contacts.map(({ icon, label, href }) => (
                                <li key={label}>
                                    {href ? (
                                        <a
                                            href={href}
                                            style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '15px', color: 'rgba(209,213,219,1)', fontWeight: 400, textDecoration: 'none', wordBreak: 'break-all' }}
                                            onMouseEnter={e => (e.currentTarget.style.color = '#F59E0B')}
                                            onMouseLeave={e => (e.currentTarget.style.color = 'rgb(209,213,219)'
)}
                                        >
                                            <span>{icon}</span><span>{label}</span>
                                        </a>
                                    ) : (
                                        <span
                                            style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.6)', fontWeight: 400 }}
                                        >
                                            <span>{icon}</span>{label}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Rodapé */}
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 24px 48px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
                        © 2025 Partiuuferias — Todos os direitos reservados
                    </p>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', margin: 0 }}>
                        Brasil
                    </p>
                </div>

            </motion.div>
        </section>
    )
}