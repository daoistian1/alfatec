import { Zap, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-blue-400 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ALFATEC</span>
            </div>
            <p className="text-gray-400">
              Industrial Engineering and Automation with excellence and innovation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Electrical Panels</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Automation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Lighting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#differentials" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Receive news and tips about electrical engineering.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} ALFATEC Engineering and Automation. All rights reserved.</p>
          <p className="mt-2 text-sm">Made with excellence and commitment to quality</p>
        </div>
      </div>
    </footer>
  )
}
