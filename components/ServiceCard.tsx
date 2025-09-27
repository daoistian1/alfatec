'use client'

import { useState } from 'react'
import { CheckCircle, ArrowRight, LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  icon: LucideIcon
  description: string
  features: string[]
  color: string
  index: number
}

export default function ServiceCard({ 
  title, 
  icon: Icon, 
  description, 
  features, 
  color, 
  index 
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-300 blur-xl`}></div>
      <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
        <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 ${isHovered ? 'rotate-6 scale-110' : ''}`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="w-full py-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl font-medium group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
          Learn More
          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
        </button>
      </div>
    </div>
  )
}
