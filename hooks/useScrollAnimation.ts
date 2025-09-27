'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options
  
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (hasAnimated && triggerOnce) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting
        setIsInView(inView)
        
        if (inView && triggerOnce) {
          setHasAnimated(true)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce, hasAnimated])

  return { ref, isInView, hasAnimated }
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = scrollTop / docHeight
      setProgress(Math.min(Math.max(scrollProgress, 0), 1))
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return progress
}
