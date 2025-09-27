'use client'

import { useEffect, useState, useRef } from 'react'

interface StatCounterProps {
  value: string
  label: string
  index: number
}

export default function StatCounter({ value, label, index }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  // Extract numeric value from string
  const numericValue = parseInt(value.replace(/\D/g, '')) || 100
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      const currentRef = ref.current
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    const increment = numericValue / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep === steps) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(increment * currentStep))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, numericValue])

  return (
    <div 
      ref={ref}
      className="text-center animate-in" 
      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
    >
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-200">{label}</div>
    </div>
  )
}
