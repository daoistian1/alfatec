import React from 'react'

interface BackgroundPatternProps {
  className?: string
  variant?: 'dots' | 'grid' | 'gradient' | 'noise'
}

export const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ 
  className = '', 
  variant = 'dots' 
}) => {
  const patterns = {
    dots: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-pattern)" />
      </svg>
    ),
    grid: (
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.05"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
    ),
    gradient: (
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5" />
    ),
    noise: (
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {patterns[variant]}
    </div>
  )
}
