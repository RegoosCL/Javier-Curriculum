import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Sistema de Gestión de Productos",
    description:
      "Proyecto desarrollado en Flask para la gestión de productos en una tienda de bicicletas. Incluye funcionalidades como CRUD de productos, autenticación de usuarios y control de stock. Evaluación del ramo 'Taller de Aplicaciones'.",
    technologies: ["Flask", "Python", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/RegoosCL/Taller-de-aplicaciones/tree/main/proyecto_taller",
    image: "/proyect1-img.png?height=300&width=500",
  },
  {
    title: "API REST para Gestión de Datos",
    description:
      "Desarrollo de una API REST con Django y Django REST Framework para la gestión de datos en una aplicación. Implementa autenticación, control de permisos y manejo eficiente de solicitudes. Evaluación del ramo 'Backend'.",
    technologies: ["Django REST Framework", "Python"],
    github: "https://github.com/RegoosCL/Eva3-Backed",
    image: "/proyect2-img.png?height=300&width=500",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="section-heading">Algunas cosas que he contruido</h2>
      <div className="space-y-24">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`relative grid md:grid-cols-2 gap-4 md:gap-8 ${index % 2 === 0 ? "" : "md:text-right"}`}
          >
            <div className={`md:absolute inset-0 z-0 ${index % 2 === 0 ? "md:left-1/2" : "md:right-1/2"}`}>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-teal-300/10 mix-blend-multiply" />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className={`relative z-10 ${index % 2 === 1 && "md:col-start-2"}`}>
              <p className="text-teal-300 font-mono text-sm mb-2">Proyecto destacado</p>
              <h3 className="text-2xl font-bold text-gray-200 mb-4">{project.title}</h3>
              <div className="bg-[#112240] p-6 rounded-lg shadow-xl mb-4">
                <p className="text-gray-400">{project.description}</p>
              </div>
              <ul className={`flex flex-wrap gap-4 text-sm font-mono mb-8 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                {project.technologies.map((tech) => (
                  <li key={tech} className="text-gray-400">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className={`flex gap-4 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-teal-300" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
      
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <p className="text-teal-300 font-mono text-sm mb-2">Todo fue contruido en mi localhost</p>
      </div>
    </section>
  )
}

