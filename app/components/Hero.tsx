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
    <section
      id="home"
      className="relative flex items-center min-h-[90vh] md:min-h-screen overflow-hidden pt-[70px] 
      bg-gradient-to-br from-[#1E3A8A] to-[#1a3380]"
    >
      {/* Ondas decorativas */}
      <div className="pointer-events-none absolute -left-[120px] -bottom-[80px] w-[520px] h-[520px] rounded-full border-[60px] border-blue-500/10" />
      <div className="pointer-events-none absolute -left-[200px] -bottom-[160px] w-[680px] h-[680px] rounded-full border-[40px] border-blue-500/5" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 px-5 md:px-12 py-10 md:py-16 text-center md:text-left">

        {/* ESQUERDA */}
        <div
          className={`flex-1 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-7"
            }`}
        >
          <h1 className="font-extrabold uppercase text-white leading-tight 
            text-[24px] sm:text-[30px] md:text-[42px] lg:text-[50px] mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Sua próxima viagem<br />
            começa com uma<br />
            <span className="text-amber-500">conversa</span>
          </h1>

          <p className="text-white/80 leading-relaxed max-w-[420px] mx-auto md:mx-0 mb-7 text-[13px] sm:text-sm md:text-base">
            Chega de gastar horas comparando preços em dezenas de sites.
            Eu faço isso por você! Encontro as melhores passagens, hotéis
            e pacotes para o destino que você sempre sonhou, com
            atendimento exclusivo do início ao fim.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=5511980127335&text=Vim%20do%20site!%20Quero%20falar%20com%20o%20consultor!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 
            bg-amber-500 text-[#1E3A8A] font-extrabold uppercase 
            px-6 py-3.5 sm:px-8 sm:py-4 rounded-lg transition-all duration-300
            hover:bg-amber-400 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(245,158,11,0.45)]
            w-full md:w-auto text-sm sm:text-base"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="text-[22px] leading-none">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L.057 23.572a.75.75 0 0 0 .921.921l5.715-1.478A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.727 9.727 0 0 1-4.964-1.36l-.355-.213-3.685.952.972-3.592-.232-.371A9.72 9.72 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
            </span>
            Quero falar com o consultor!
          </a>
        </div>

        {/* DIREITA */}
        <div
          className={`flex-shrink-0 flex justify-center items-center transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-7"
            }`}
        >
          <div className="relative w-[260px] sm:w-[300px] md:w-[380px] h-[320px] sm:h-[360px] md:h-[460px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35)]">

            {/* Borda dourada */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-amber-500/40 z-20" />

            {/* Gradiente inferior */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-[#1E3A8A]/40 to-transparent z-10" />

            <Image
              src="/hero.webp"
              alt="Viajante contemplando o mar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}