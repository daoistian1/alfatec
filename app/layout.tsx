import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ALFATEC Engineering and Automation | Electrical Solutions in Três Rios, RJ',
  description: 'ALFATEC offers specialized solutions in electrical projects and industrial automation with quality, safety and innovation. NR10 certified professionals.',
  keywords: 'electrical engineering, industrial automation, electrical panels, industrial lighting, electrical projects, NR10, Três Rios, Rio de Janeiro, ALFATEC',
  authors: [{ name: 'ALFATEC' }],
  creator: 'ALFATEC Engineering and Automation',
  publisher: 'ALFATEC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'ALFATEC Engineering and Automation',
    description: 'Specialized solutions in electrical projects and industrial automation',
    url: 'https://alfatec.com.br',
    siteName: 'ALFATEC',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ALFATEC Engineering and Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALFATEC Engineering and Automation',
    description: 'Specialized solutions in electrical projects and industrial automation',
    creator: '@alfatec',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased min-h-screen relative overflow-x-hidden`}>
        {/* Animated Background Layers */}
        <div className="fixed inset-0 z-[-10]">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50"></div>
          <div className="absolute inset-0 mesh-gradient opacity-30"></div>
          <div className="absolute inset-0 bg-pattern opacity-50"></div>
        </div>
        
        {/* Floating Shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        {/* Aurora Effect */}
        <div className="fixed top-0 left-0 w-full h-96 aurora-gradient opacity-10 blur-3xl z-[-8]"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="fixed inset-0 z-[-7] overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-20 w-96 h-96 bg-gradient-to-br from-green-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-20 right-40 w-72 h-72 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" style={{ animationDelay: '6s' }}></div>
        </div>
        
        {/* Content */}
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  )
}
