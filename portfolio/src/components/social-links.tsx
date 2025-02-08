import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SocialLinks() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/RegoosCL", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/javier-poblete-a6544834a/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/TheRegoosCL", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/jvieer.r/", label: "Instagram" },
  ]

  return (
    <>
      
      <div className="fixed left-4 bottom-0 hidden xl:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-32 after:bg-gray-400">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <Button
            key={label}
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-teal-300 hover:-translate-y-1 transition-all"
            asChild
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </a>
          </Button>
        ))}
      </div>

      
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-3 flex justify-center gap-6 xl:hidden">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <Button
            key={label}
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-teal-300 hover:-translate-y-1 transition-all"
            asChild
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="h-6 w-6" />
              <span className="sr-only">{label}</span>
            </a>
          </Button>
        ))}
      </div>
    </>
  )
}
