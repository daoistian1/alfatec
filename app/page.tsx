'use client'

import { useState, useEffect } from 'react'
import {
  Menu,
  X,
  ChevronRight,
  Shield,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Settings,
  Cpu,
  Lightbulb,
  FileText,
  Users,
  Target,
  TrendingUp,
  ArrowRight,
  Star
} from 'lucide-react'
import ContactForm from '../components/ContactForm'
import Gallery from '../components/Gallery'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeService, setActiveService] = useState(0)
  // Removi os estados do formulário antigo, pois agora estão no ContactForm.tsx

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    {
      title: 'Montagem de Painéis Elétricos',
      icon: Settings,
      description: 'Painéis industriais com máxima segurança, organização e confiabilidade',
      features: ['Alta qualidade', 'Certificação NR10', 'Organização exemplar'],
      bgClass: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Automação Industrial',
      icon: Cpu,
      description: 'Projetos de automação para máxima eficiência e controle',
      features: ['Painéis de comando', 'CLPs e supervisórios', 'Monitoramento real-time'],
      bgClass: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Iluminação Industrial',
      icon: Lightbulb,
      description: 'Projetos de iluminação eficientes e modernos',
      features: ['Eficiência energética', 'Ambientes internos/externos', 'Soluções LED'],
      bgClass: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Projetos e Esquemas Técnicos',
      icon: FileText,
      description: 'Documentação técnica completa e detalhada',
      features: ['Diagramas unifilares', 'Esquemas técnicos', 'Projetos elétricos'],
      bgClass: 'from-green-500 to-green-700'
    }
  ]

  const stats = [
    { value: '50+', label: 'Projetos Realizados' },
    { value: '5+', label: 'Anos de Experiência' },
    { value: '100%', label: 'Satisfação' },
    { value: '24/7', label: 'Suporte Técnico' }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism shadow-xl py-2 md:py-3' : 'bg-transparent py-3 md:py-5'
      }`}>
        <nav className="container flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src="/logo.png"
              alt="ALFATEC Logo"
              className={`h-12 md:h-16 lg:h-20 w-auto transition-all duration-300 ${
                scrolled ? '' : 'filter brightness-0 invert'
              }`}
            />
            <span className={`text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}>
              ALFATEC
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <a href="#home" className={`transition-colors font-medium text-sm lg:text-base ${
              scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
            }`}>
              Início
            </a>
            <a href="#about" className={`transition-colors font-medium text-sm lg:text-base ${
              scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
            }`}>
              Sobre
            </a>
            <a href="#services" className={`transition-colors font-medium text-sm lg:text-base ${
              scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
            }`}>
              Serviços
            </a>
            <a href="#gallery" className={`transition-colors font-medium text-sm lg:text-base ${
              scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
            }`}>
              Galeria
            </a>
            <a href="#differentials" className={`transition-colors font-medium text-sm lg:text-base ${
              scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
            }`}>
              Diferenciais
            </a>
            <a href="#contact" className={`transition-colors font-medium text-sm lg:text-base ${
              scrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-blue-200'
            }`}>
              Contato
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/10 text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg">
            <div className="container py-4 space-y-3">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Início
              </a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Sobre
              </a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Serviços
              </a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Galeria
              </a>
              <a href="#differentials" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Diferenciais
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-primary-600 transition-colors">
                Contato
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 aurora-gradient opacity-20"></div>
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/10 to-black/10"></div>
        
        {/* Animated Mesh Background - Reduced opacity on mobile */}
        <div className="absolute inset-0 mesh-gradient opacity-5 md:opacity-10"></div>
        
        {/* Floating Elements - Hidden on mobile for better performance */}
        <div className="hidden lg:block absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float"></div>
        <div className="hidden lg:block absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-secondary-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="hidden xl:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="relative z-10 container text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Mobile-optimized hero content */}
            <div className="md:animate-in">
              {/* Logo and Title - Better spacing on mobile */}
              <div className="flex flex-col items-center mb-6 md:mb-8">
                <img
                  src="/logo.png"
                  alt="ALFATEC Logo"
                  className="h-24 md:h-32 lg:h-40 w-auto filter brightness-0 invert mb-6 md:mb-8"
                />
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                  ALFATEC
                </h1>
              </div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-6 md:mb-8">
                Engenharia e Automação
              </h2>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-100 md:animate-in px-4 md:px-0" style={{ animationDelay: '0.2s' }}>
              Soluções especializadas em projetos elétricos e automação industrial
              com qualidade, segurança e inovação
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:animate-in px-4 md:px-0" style={{ animationDelay: '0.4s' }}>
              <a href="#services" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-primary-700 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base">
                Nossos Serviços
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                Fale Conosco
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Stats - Mobile optimized grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20 px-4 md:px-0">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:animate-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator - Smaller on mobile */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-1.5 md:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/98 md:backdrop-blur-sm"></div>
        <div className="hidden md:block absolute inset-0 holographic opacity-5"></div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="px-4 md:px-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">
                Sobre a ALFATEC
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                A ALFATEC Engenharia e Automação é uma empresa especializada em soluções
                elétricas e de automação industrial, comprometida com a excelência em cada projeto.
              </p>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <div className="flex gap-3 md:gap-4">
                  <Target className="w-10 h-10 md:w-12 md:h-12 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Nossa Missão</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Garantir qualidade, segurança e inovação em cada projeto,
                      superando as expectativas de nossos clientes.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 md:gap-4">
                  <Award className="w-10 h-10 md:w-12 md:h-12 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Nossos Valores</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Profissionalismo, ética e compromisso são os pilares que
                      sustentam nossa atuação no mercado.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 md:gap-4">
                  <TrendingUp className="w-10 h-10 md:w-12 md:h-12 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Nossa Expertise</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Montagem de painéis, infraestrutura elétrica, automação e
                      iluminação com tecnologia de ponta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative px-4 md:px-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 rounded-3xl transform rotate-3"></div>
              <div className="relative glass-card rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
                <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6">
                  <div className="text-center p-3 md:p-4 lg:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl md:rounded-2xl">
                    <Shield className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-600 mx-auto mb-2 md:mb-3" />
                    <h4 className="font-semibold text-sm md:text-base">Segurança</h4>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">NR10 Certificada</p>
                  </div>
                  <div className="text-center p-3 md:p-4 lg:p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl md:rounded-2xl">
                    <CheckCircle className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600 mx-auto mb-2 md:mb-3" />
                    <h4 className="font-semibold text-sm md:text-base">Qualidade</h4>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">ISO Standards</p>
                  </div>
                  <div className="text-center p-3 md:p-4 lg:p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl md:rounded-2xl">
                    <Clock className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-purple-600 mx-auto mb-2 md:mb-3" />
                    <h4 className="font-semibold text-sm md:text-base">Prazo</h4>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Entrega Pontual</p>
                  </div>
                  <div className="text-center p-3 md:p-4 lg:p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl md:rounded-2xl">
                    <Users className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-orange-600 mx-auto mb-2 md:mb-3" />
                    <h4 className="font-semibold text-sm md:text-base">Equipe</h4>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">Profissionais Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-blue-50/50 to-white/95 md:backdrop-blur-sm"></div>
        <div className="hidden md:block absolute inset-0 mesh-gradient opacity-5"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">
              Nossos Serviços
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Oferecemos soluções completas em engenharia elétrica e automação,
              com tecnologia de ponta e profissionais altamente qualificados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
            {services.map((service, index) => {
              const ServiceIcon = service.icon
              return (
                <div
                  key={index}
                  className={`relative group cursor-pointer ${activeService === index ? 'scale-105' : ''}`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="relative glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col group overflow-hidden">
                    <div className="hidden md:block absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.bgClass} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
                      <ServiceIcon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{service.description}</p>
                    <ul className="space-y-1.5 md:space-y-2 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs md:text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Differentials Section */}
      <section id="differentials" className="py-16 md:py-20 lg:py-28 relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-700"></div>
        <div className="hidden md:block absolute inset-0 aurora-gradient opacity-10"></div>
        <div className="hidden md:block absolute inset-0 mesh-gradient opacity-5"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Por que escolher a ALFATEC?
            </h2>
            <p className="text-base md:text-lg text-gray-200">
              Nossos diferenciais fazem toda a diferença no sucesso do seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0">
            {[
              {
                icon: Users,
                title: 'Profissionais Qualificados',
                description: 'Equipe técnica especializada e certificada nos mais altos padrões do mercado'
              },
              {
                icon: Award,
                title: 'Certificação NR10',
                description: 'Todos os profissionais certificados em segurança com eletricidade'
              },
              {
                icon: Shield,
                title: 'Cursos Técnicos',
                description: 'Equipe em constante atualização com as últimas tecnologias'
              },
              {
                icon: Star,
                title: 'Atendimento Personalizado',
                description: 'Soluções customizadas para cada necessidade específica'
              },
              {
                icon: Clock,
                title: 'Compromisso com Prazos',
                description: 'Entrega pontual sem comprometer a qualidade'
              },
              {
                icon: CheckCircle,
                title: 'Segurança Garantida',
                description: 'Rigorosos padrões de segurança em todos os projetos'
              }
            ].map((item, index) => (
              <div key={index} className="group h-full">
                <div className="crystal-gradient rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/20 transition-all duration-300 md:hover:scale-105 h-full flex flex-col relative overflow-hidden">
                  <div className="hidden md:block absolute inset-0 holographic opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <item.icon className="w-10 h-10 md:w-12 md:h-12 text-secondary-400 mb-3 md:mb-4 relative z-10" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-200 flex-grow">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 lg:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-gray-50/95 backdrop-blur-sm"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text">
              Entre em Contato
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Estamos prontos para atender você. Entre em contato e solicite um orçamento.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 px-4 md:px-0">
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-1">Telefone / WhatsApp</h3>
                  <a href="tel:+5521999293265" className="text-sm md:text-base text-gray-600 hover:text-primary-600 transition-colors block">
                    (21) 99929-3265
                  </a>
                  <a
                    href="https://wa.me/5521999293265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-green-600 hover:text-green-700 transition-colors flex items-center gap-1 mt-1"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-1">E-mail</h3>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alfatecengenhariaautomacao@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-gray-600 hover:text-primary-600 transition-colors">                    alfatecengenhariaautomacao@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-1">Localização</h3>
                  <p className="text-sm md:text-base text-gray-600">Três Rios, Rio de Janeiro</p>
                  <p className="text-sm md:text-base text-gray-600">Atendimento em toda região</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl md:rounded-2xl p-4 md:p-6">
                <h3 className="font-semibold text-base md:text-lg mb-2 md:mb-3">Horário de Atendimento</h3>
                <p className="text-sm md:text-base text-gray-700">Segunda a Sexta: 8h às 18h</p>
                <p className="text-sm md:text-base text-gray-700">Sábado: 8h às 12h</p>
                <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-3">
                  * Atendimento emergencial 24/7 para clientes
                </p>
              </div>
            </div>
            
            {/* O formulário antigo foi removido e substituído por este componente */}
            <ContactForm />

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-white py-8 md:py-12 overflow-hidden">
        <div className="hidden md:block absolute inset-0 mesh-gradient opacity-5"></div>
        <div className="hidden md:block absolute inset-0 aurora-gradient opacity-5"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8 px-4 md:px-0">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <img src="/logo.png" alt="ALFATEC Logo" className="h-12 md:h-16 lg:h-20 w-auto" />
                <span className="text-xl md:text-2xl font-bold">ALFATEC</span>
              </div>
              <p className="text-sm md:text-base text-gray-400">
                Engenharia e Automação Industrial com excelência e inovação.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Serviços</h4>
              <ul className="space-y-1.5 md:space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Painéis Elétricos</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Automação</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Iluminação</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Projetos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Links Rápidos</h4>
              <ul className="space-y-1.5 md:space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors text-sm md:text-base">Sobre Nós</a></li>
                <li><a href="#services" className="hover:text-white transition-colors text-sm md:text-base">Serviços</a></li>
                <li><a href="#differentials" className="hover:text-white transition-colors text-sm md:text-base">Diferenciais</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors text-sm md:text-base">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Newsletter</h4>
              <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4">
                Receba novidades e dicas sobre engenharia elétrica.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 md:px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary-500 focus:outline-none text-sm md:text-base"
                />
                <button className="px-3 md:px-4 py-2 bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-400 px-4 md:px-0">
            <p className="text-xs md:text-sm">© 2024 ALFATEC Engenharia e Automação. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}