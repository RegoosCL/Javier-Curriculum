import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-teal-300 font-mono mb-4">¿Qué sigue?</p>
        <h2 className="text-4xl font-bold text-gray-200 mb-6">Ponte en Contacto</h2>
        <p className="text-gray-400 mb-12">
          Contáctame por WhatsApp si estás interesado en que realice mis prácticas en su empresa.
        </p>
        <Button variant="outline" className="text-teal-300 border-teal-300 hover:bg-teal-300/10" asChild>
          <a href="https://wa.me/+56984853052?text=¡Hola!%20👋%20Me%20gustaría%20contactarte%20para%20obtener%20más%20información%20sobre%20tus%20servicios.%20🤝%20¡Espero%20tu%20respuesta!%20😊%20¡Que%20tengas%20un%20excelente%20día!%20✨" target="_blank" rel="noopener noreferrer">
            Contáctame por WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}

