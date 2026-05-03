"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Lato:wght@300;400;600&display=swap');

        #home {
          min-height: 100vh;
          background: linear-gradient(120deg, #1E3A8A 55%, #1a3380 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
          position: relative;
          font-family: 'Lato', sans-serif;
          padding-top: 70px;
        }

        /* Ondas decorativas */
        #home::before {
          content: '';
          position: absolute;
          left: -120px;
          bottom: -80px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          border: 60px solid rgba(59,130,246,0.12);
          pointer-events: none;
        }
        #home::after {
          content: '';
          position: absolute;
          left: -200px;
          bottom: -160px;
          width: 680px;
          height: 680px;
          border-radius: 50%;
          border: 40px solid rgba(59,130,246,0.07);
          pointer-events: none;
        }

        .hero-inner {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 60px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
          position: relative;
          z-index: 1;
        }

        /* ── ESQUERDA ── */
        .hero-left {
          flex: 1;
          opacity: 0;
          transform: translateX(-28px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .hero-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .hero-headline {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(26px, 3.8vw, 50px);
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.12;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .hero-headline .gold {
          color: #F59E0B;
        }

        .hero-sub {
          font-size: clamp(14px, 1.4vw, 16px);
          color: rgba(255,255,255,0.8);
          line-height: 1.8;
          max-width: 460px;
          margin-bottom: 36px;
          font-weight: 400;
        }

        .btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #F59E0B;
          color: #1E3A8A;
          font-family: 'Montserrat', sans-serif;
          font-size: 15px;
          font-weight: 800;
          padding: 17px 34px;
          border-radius: 10px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          transition: all 0.25s ease;
          border: none;
          cursor: pointer;
        }
        .btn-cta:hover {
          background: #FBBF24;
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(245,158,11,0.45);
        }

        /* ── DIREITA (imagem) ── */
        .hero-right {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(28px);
          transition: opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s;
        }
        .hero-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .hero-img-wrap {
          position: relative;
          width: 380px;
          height: 460px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 28px 64px rgba(0,0,0,0.35);
        }

        /* Borda dourada sutil */
        .hero-img-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          border: 2px solid rgba(245,158,11,0.45);
          z-index: 2;
          pointer-events: none;
        }

        /* Gradiente sutil embaixo da foto */
        .hero-img-wrap::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 35%;
          background: linear-gradient(to top, rgba(30,58,138,0.4), transparent);
          z-index: 1;
          pointer-events: none;
          border-radius: 0 0 24px 24px;
        }

        /* ── RESPONSIVO ── */
        @media (max-width: 900px) {
          .hero-inner {
            flex-direction: column;
            padding: 50px 28px 60px;
            text-align: center;
            gap: 40px;
          }
          .hero-sub { margin: 0 auto 36px; }
          .hero-img-wrap {
            width: 100%;
            max-width: 360px;
            height: 380px;
          }
          .btn-cta { width: 100%; justify-content: center; }
        }

        @media (max-width: 480px) {
          .hero-headline { font-size: 24px; }
          .hero-img-wrap { height: 300px; }
        }
      `}</style>

      <section id="home">
        <div className="hero-inner">

          {/* ════ ESQUERDA ════ */}
          <div className={`hero-left${visible ? " visible" : ""}`}>
            <h1 className="hero-headline">
              Sua próxima viagem<br />
              começa com uma<br />
              <span className="gold">conversa</span>
            </h1>

            <p className="hero-sub">
              Chega de gastar horas comparando preços em dezenas de sites.
              Eu faço isso por você — encontro as melhores passagens, hotéis
              e pacotes para o destino que você sempre sonhou, com
              atendimento exclusivo do início ao fim.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=5511980127335&text=Vim%20do%20site!%20Quero%20falar%20com%20o%20consultor!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
            <span style={{ fontSize: '22px', lineHeight: 1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.535 5.874L.057 23.215a.75.75 0 0 0 .916.948l5.503-1.44A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.523-5.204-1.427l-.364-.216-3.768.987.998-3.65-.236-.38A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
            </span>
            Quero falar com o consultor!
            </a>
          </div>

          {/* ════ DIREITA — IMAGEM ════ */}
          <div className={`hero-right${visible ? " visible" : ""}`}>
            <div className="hero-img-wrap">
              {/*
                Coloque o arquivo da imagem dentro de /public com o nome hero.webp
                O arquivo que você enviou era: Imagem_partiuuferias.webp
                Renomeie para hero.webp e jogue em /public
              */}
              <Image
                src="/hero.webp"
                alt="Viajante contemplando o mar"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}