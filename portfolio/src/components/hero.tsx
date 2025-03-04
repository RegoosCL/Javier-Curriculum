"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import dynamic from "next/dynamic";
import { motion } from 'framer-motion';

const Typewriter = dynamic(
  () => import("react-simple-typewriter").then((mod) => mod.Typewriter),
  { ssr: false }
);

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-teal-300 font-mono mb-5"
        >
          Curriculum de Javier Poblete
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 mb-4"
        >
          <Typewriter
            words={["Javier Poblete.", "Javier Poblete.", "Javier Poblete."]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-8"
        >
          Estudiante de Inacap.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="max-w-xl text-gray-400 text-lg mb-12"
        >
          Soy estudiante de Inacap y lo que estoy estudiando es Ingeniería en Informática.
        </motion.p>

        <a href="/cv-javier-poblete.pdf" download>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            <Button variant="outline" className="w-fit text-teal-300 border-teal-300 hover:bg-teal-300/10">
              Download CV
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </a>
      </div>
    </section>
  );
}
