export default function About() {
  const technologies = ["JavaScript", "CSS", "React", "Django", "Node.js", "Flask"]

  return (
    <section id="about" className="py-20">
      <h2 className="section-heading">About Me</h2>
      <div className="grid md:grid-cols-[2fr,1fr] gap-8">
        <div className="space-y-4">
          <p>
            Hola! mi nombre es Javier y soy un estudiante apasionado por la tecnología y el
            desarrollo de software, actualmente cursando Ingeniería en Informática. Me destaco por mi capacidad 
            de aprender rápidamente y mi entusiasmo por crear soluciones tecnológicas innovadoras. 
          </p>
          <p>
            Me especializo más en front end que en otras cosas, es lo que más me a gustado y lo que más me a interesado de esta carrera.
          </p>
          <p>
            Busco mi primera oportunidad de práctica profesional donde pueda aplicar mis conocimientos y seguir 
            creciendo en el mundo del desarrollo de software.
          </p>
          <p>También tengo un poco de conocimiento sobre esto:</p>
          <ul className="grid grid-cols-2 gap-2 mt-4">
            {technologies.map((tech) => (
              <li key={tech} className="flex items-center gap-2 text-sm">
                <span className="text-teal-300">▹</span> {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <div className="relative z-10">
            <img
              src="/Pica-enhance-20250131013903.PNG?height=300&width=300"
              alt="Portrait"
              className="rounded grayscale hover:grayscale-0 transition-all"
            />
            <div className="absolute inset-0 border-2 border-teal-300 rounded translate-x-5 translate-y-5 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  )
}

