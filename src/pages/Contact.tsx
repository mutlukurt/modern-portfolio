import React, { useState } from 'react'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'
import { Input } from '@/components/Input'
import { Textarea } from '@/components/Textarea'
import { SEO } from '@/components/SEO'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@boost.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  ]

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch. Let's discuss your next project."
        keywords="contact, hire, collaborate"
      />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-neon-lime min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-boozt-blue mb-6 leading-none">
            LET'S TALK
          </h1>
          <p className="text-2xl font-bold text-boozt-blue mb-16 uppercase">
            Ready to boost your project?
          </p>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSuccess ? (
                <div className="p-12 bg-boozt-blue text-center border-4 border-black">
                  <CheckCircle className="text-neon-lime mx-auto mb-6" size={64} />
                  <h3 className="text-4xl font-black text-neon-lime mb-4 uppercase">
                    Message Sent!
                  </h3>
                  <p className="text-white text-lg font-medium">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name}
                    placeholder="Your name"
                    required
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="your.email@example.com"
                    required
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-boozt-blue text-neon-lime font-black uppercase hover:bg-boozt-purple transition-colors disabled:opacity-50 border-4 border-black flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'SENDING...' : (
                      <>
                        SEND MESSAGE
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-8 bg-white border-4 border-black">
                <h2 className="text-3xl font-black text-boozt-blue mb-6 uppercase">
                  Contact Info
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-neon-lime flex items-center justify-center flex-shrink-0 border-2 border-black">
                          <Icon className="text-boozt-blue" size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-black uppercase text-gray-600 mb-1">{info.label}</p>
                          <p className="font-bold text-black">{info.value}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="p-8 bg-boozt-blue text-white border-4 border-black">
                <h3 className="font-black uppercase text-neon-lime mb-3 text-xl">Response Time</h3>
                <p className="font-medium">
                  I typically respond within 24-48 hours
                </p>
              </div>

              <div className="p-8 bg-neon-pink text-white border-4 border-black">
                <h3 className="font-black uppercase mb-3 text-xl">Available Now</h3>
                <p className="font-medium">
                  Open for freelance and collaborations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
