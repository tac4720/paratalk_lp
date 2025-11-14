import Image from "next/image"
import type React from "react"

const AiChat: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
      role="img"
      aria-label="いつでもどこでもAIにChatできる"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-primary/10 to-transparent" />
      
      {/* Radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 rounded-full blur-3xl" />
      
      {/* Image container with faded edges */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-3">
        <div 
          className="relative w-full h-full"
          style={{
            maskImage: "radial-gradient(ellipse 92% 92% at 50% 50%, black 45%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.3) 80%, transparent 95%)",
            WebkitMaskImage: "radial-gradient(ellipse 92% 92% at 50% 50%, black 45%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.3) 80%, transparent 95%)",
          }}
        >
          <Image
            src="/images/Screenshot from 2025-11-12 18-40-13.png"
            alt="いつでもどこでもAIにChatできる"
            width={800}
            height={600}
            className="w-full h-full object-contain opacity-90"
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default AiChat

