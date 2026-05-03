"use client";
import { FaWhatsapp } from "react-icons/fa";
export default function Whatsapp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511980127335&text=Vim%20do%20site!%20Quero%20falar%20com%20o%20consultor!"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "60px",
        height: "60px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        zIndex: 9999,
        color: "white",
        textDecoration: "none",
      }}
    >
      <FaWhatsapp size={32} />
    </a>
  );
}