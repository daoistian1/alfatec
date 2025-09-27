'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

// Define a estrutura dos dados do formulário
interface FormDataState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function ContactForm() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  // Estados para controlar a interface durante o envio
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Sua chave de acesso pública do Web3Forms
  const WEB3FORMS_ACCESS_KEY = 'b494c74b-cf58-4ceb-b596-503c0cc97dc3'

  // Atualiza o estado quando o usuário digita em um campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Função chamada quando o formulário é enviado
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento da página
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // Usa FormData, o método mais compatível com Web3Forms
      const submissionData = new FormData();
      
      // Adiciona todos os campos necessários
      submissionData.append("access_key", WEB3FORMS_ACCESS_KEY);
      submissionData.append("subject", `ALFATEC - Nova Solicitação de ${formData.name}`);
      submissionData.append("from_name", "Site ALFATEC");
      submissionData.append("name", formData.name);
      submissionData.append("email", formData.email);
      submissionData.append("phone", formData.phone);
      submissionData.append("service", formData.service);
      submissionData.append("message", formData.message);
      
      // Envia os dados para a URL CORRETA do Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submissionData,
      });

      const data = await response.json();

      if (data.success) {
        // Se o envio for bem-sucedido
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' }); // Limpa o formulário
        setTimeout(() => setSubmitStatus('idle'), 5000); // Esconde a mensagem de sucesso
      } else {
        // Se o Web3Forms retornar um erro
        console.error("Erro retornado pelo Web3Forms:", data);
        throw new Error(data.message || 'Falha ao enviar mensagem');
      }
    } catch (error) {
      // Se ocorrer qualquer outro erro (rede, etc.)
      setSubmitStatus('error');
      setErrorMessage('Erro ao enviar solicitação. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false); // Garante que o botão seja reativado
    }
  }

  // Abre o WhatsApp com os dados preenchidos
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento.\n\n` +
      `Nome: ${formData.name || '[preencher]'}\n` +
      `Email: ${formData.email || '[preencher]'}\n` +
      `Telefone: ${formData.phone || '[preencher]'}\n` +
      `Serviço: ${formData.service || '[preencher]'}\n` +
      `Mensagem: ${formData.message || '[preencher]'}`
    )
    window.open(`https://wa.me/5524993206240?text=${message}`, '_blank')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
      
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-fadeIn">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="text-green-700">Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex flex-col gap-2 animate-fadeIn">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-700">{errorMessage}</p>
          </div>
          <button
            type="button"
            onClick={openWhatsApp}
            className="text-sm text-blue-600 hover:text-blue-700 underline text-left"
          >
            Clique aqui para enviar via WhatsApp
          </button>
        </div>
      )}
      
      <div className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome Completo" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" />
        <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-500 data-[filled=true]:text-gray-900" data-filled={!!formData.service} >
            <option value="">Selecione um Serviço</option>
            <option value="Montagem de Painéis">Montagem de Painéis</option>
            <option value="Automação Industrial">Automação Industrial</option>
            <option value="Iluminação">Iluminação</option>
            <option value="Projetos Elétricos">Projetos Elétricos</option>
            <option value="Outro">Outro</option>
        </select>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Descreva seu projeto" rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none" ></textarea>
        <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]" >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Enviando...
            </>
          ) : (
            <>
              Enviar Solicitação
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}