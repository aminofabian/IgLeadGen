"use client"

import { useState } from 'react'
import { Send, CheckCircle2, User, Mail, Building2, MessageSquare } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // TODO: Replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulated API call
      setIsSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="py-24 relative overflow-hidden" id="contact">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      {/* Floating shapes */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/30 opacity-20 blur-3xl" />
      <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-primary/30 opacity-20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Let's Connect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to transform your Instagram presence? We're here to help you succeed.
          </p>
        </div>

        <div className="relative">
          {/* Card container with glass effect */}
          <div className="max-w-2xl mx-auto rounded-2xl backdrop-blur-sm border border-white/10 bg-white/5 overflow-hidden">
            {isSubmitted ? (
              <div className="p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="relative">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground mb-8">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 lg:p-12 relative">
                <div className="grid gap-8">
                  {/* Input group */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div className="relative">
                      <label htmlFor="name" className="inline-flex items-center gap-1 text-sm font-medium mb-2">
                        <User className="w-4 h-4 text-primary/70" />
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border-2 ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } focus:border-primary/50 focus:outline-none transition-colors placeholder:text-muted-foreground/50`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                          <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email field */}
                    <div className="relative">
                      <label htmlFor="email" className="inline-flex items-center gap-1 text-sm font-medium mb-2">
                        <Mail className="w-4 h-4 text-primary/70" />
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border-2 ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        } focus:border-primary/50 focus:outline-none transition-colors placeholder:text-muted-foreground/50`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                          <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company field */}
                  <div className="relative">
                    <label htmlFor="company" className="inline-flex items-center gap-1 text-sm font-medium mb-2">
                      <Building2 className="w-4 h-4 text-primary/70" />
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border-2 border-white/10 focus:border-primary/50 focus:outline-none transition-colors placeholder:text-muted-foreground/50"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label htmlFor="message" className="inline-flex items-center gap-1 text-sm font-medium mb-2">
                      <MessageSquare className="w-4 h-4 text-primary/70" />
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border-2 ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      } focus:border-primary/50 focus:outline-none transition-colors placeholder:text-muted-foreground/50`}
                      placeholder="Tell us about your needs..."
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                        <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary font-medium transition-all
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 left-8 top-8 w-24 h-24 rounded-full bg-primary/30 blur-2xl" />
          <div className="absolute -z-10 right-8 bottom-8 w-24 h-24 rounded-full bg-primary/30 blur-2xl" />
        </div>
      </div>
    </div>
  )
}
