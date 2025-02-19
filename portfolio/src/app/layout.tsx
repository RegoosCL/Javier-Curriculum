"use client"; 

import { Inter } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import type React from "react"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const playClickSound = () => {
      const audio = new Audio("/click.mp3"); // Asegúrate de que el archivo esté en /public
      audio.play();
      audio.volume = 0.3
    };
    

    document.addEventListener("click", playClickSound);

    return () => {
      document.removeEventListener("click", playClickSound);
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0a192f] text-gray-300`}>
        {children}
      </body>
    </html>
  );
}
