"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    company: "Enseñanza Basica Completa",
    title: "Colegio Santo Tomás",
    period: "1° básico a 8° básico",
    description: [
      "Participé en diversas actividades académicas y extracurriculares, desarrollando habilidades básicas en matemáticas, lenguaje y ciencias.",
      "Formé parte de eventos escolares y talleres que fomentaron el trabajo en equipo y la creatividad."
    ],
    technologies: [],
  },
  {
    company: "Enseñanza Media Completa",
    title: "Liceo Politécnico Carlos Condell",
    period: "1° medio a 4° medio",
    description: [
      "Especialización en Mecánica Automotriz, adquiriendo conocimientos en diagnóstico.",
      "Experiencia práctica en mantenimiento como cambio de aceite, pastillas, filtro de aire, etc.",
      "Participación en proyectos como exposiciones de automóviles.."
    ],
    technologies: [],
  },
  {
    company: "Enseñanza Superior",
    title: "INACAP, Chile - La Granja",
    period: "(Cursando 5° semestre)",
    description: [
      "Carrera: Ingeniería en Informática.",
      "Desarrollo de aplicaciones web y móviles, bases de datos, front end y backend.",
      
    ],
    technologies: [
      "MySQL (básico)", "CSS (intermedio)", "Windows Server (básico)",
      "Django (intermedio)", "Python (intermedio)", "JavaScript (intermedio)",
      "HTML (intermedio)", "Flask (intermedio)", "MongoDB (básico)",
      "React (intermedio)", "API REST (intermedio)", "Diseño UX/UI (básico)"
    ],
  },
];


export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-20">
      <h2 className="section-heading">FORMACION ACADEMICA</h2>
      <div className="grid md:grid-cols-[200px,1fr] gap-4">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
          {experiences.map((exp, index) => (
            <Button
              key={exp.company}
              variant="ghost"
              className={`justify-start px-4 py-2 text-sm font-mono whitespace-nowrap ${
                activeTab === index ? "text-teal-300 bg-teal-300/10" : "text-gray-400"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {exp.company}
            </Button>
          ))}
        </div>
        <div className="min-h-[320px]">
          {experiences.map((exp, index) => (
            <div key={exp.company} className={`space-y-6 ${activeTab === index ? "block" : "hidden"}`}>
              <div>
                <h3 className="text-xl font-semibold text-gray-200">
                  {exp.title} <span className="text-teal-300">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
              </div>
              <ul className="space-y-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-teal-300 shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-teal-300/10 text-teal-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

