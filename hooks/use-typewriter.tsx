"use client"

import { useState, useEffect } from "react"

interface UseTypewriterProps {
  text: string
  speed?: number
  delay?: number
  start?: boolean
}

export function useTypewriter({ text, speed = 100, delay = 0, start = true }: UseTypewriterProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!start) return

    let timeoutId: NodeJS.Timeout
    
    const startTyping = () => {
      let index = 0
      
      const type = () => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
          timeoutId = setTimeout(type, speed)
        } else {
          setIsComplete(true)
        }
      }
      
      type()
    }

    const delayTimeout = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(delayTimeout)
      clearTimeout(timeoutId)
    }
  }, [text, speed, delay, start])

  return { displayedText, isComplete }
}

