import { Zap } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center animate-pulse">
            <Zap className="w-10 h-10 text-blue-600" />
          </div>
          <div className="absolute inset-0 bg-white rounded-2xl animate-ping opacity-20"></div>
        </div>
        <h2 className="text-white text-2xl font-bold mt-6">ALFATEC</h2>
        <p className="text-white/80 mt-2">Loading...</p>
        <div className="flex gap-1 justify-center mt-4">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}
