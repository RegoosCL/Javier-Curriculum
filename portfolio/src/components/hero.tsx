import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import ParticlesBackground from "./ParticlesBackground"

export default function Hero() {
  const handleDownload = () => {
    
    const link = document.createElement('a')
    link.href = '/Curriculum Vitae Javier Poblete.pdf'
    link.download = 'JavierPoblete-CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10">
        <p className="text-teal-300 font-mono mb-5">Curriculum de Javier Poblete</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 mb-4">Javier Poblete.</h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-8">
          Estudiante de Inacap.
        </h2>
        <p className="max-w-xl text-gray-400 text-lg mb-12">
          Soy estudiante de inacap y lo que estoy estudiando es ingenieria en informatica.
        </p>
        <Button 
          variant="outline" 
          className="w-fit text-teal-300 border-teal-300 hover:bg-teal-300/10"
          onClick={handleDownload}>
          Download CV
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
