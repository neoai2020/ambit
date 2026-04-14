'use client'

import { useState } from 'react'

const Icons = {
  helpCircle: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  book: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  messageCircle: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  chevronDown: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  chevronUp: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  ),
  checkCircle: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  send: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
}

const faqs = [
  {
    question: 'How do I get started with AMBIT?',
    answer: 'Simply browse our Agents directory, select an agent that matches your task, fill in the input fields, and click Generate. Your AI-powered output will appear instantly.',
  },
  {
    question: 'What are the different agent categories?',
    answer: 'We have 12 categories: Writing, Marketing, Social Media, Email, Coding, Business, Translation, SEO, Creative, Education, Sales, and Automation. Each contains specialized agents for specific tasks.',
  },
  {
    question: 'How do I save my generated outputs?',
    answer: 'After generating content, click the "Save" button next to the output. All saved outputs can be found in the Saved Outputs section, where you can organize, copy, or delete them.',
  },
  {
    question: 'What is 10X Mode?',
    answer: '10X Mode generates 10 variations of your content with a single click. Perfect for A/B testing, brainstorming, or when you need multiple options to choose from.',
  },
  {
    question: 'How does the Automation feature work?',
    answer: 'Automation allows you to chain multiple agents together. For example, you can create a workflow that takes an idea, generates a script, creates a caption, and produces a CTA - all automatically.',
  },
  {
    question: 'Can I customize the AI prompts?',
    answer: 'The base plan uses our pre-optimized prompts for best results. Premium plans may include prompt customization features for advanced users.',
  },
  {
    question: 'What happens to my data?',
    answer: 'Your inputs and outputs are processed securely. Saved outputs are stored in your account. We do not use your content to train AI models.',
  },
  {
    question: 'How do I get better results from agents?',
    answer: 'Be specific in your inputs, provide context, and use the available options (tone, length, style) to guide the output. Check our Training Center for detailed tips.',
  },
]

const systemStatus = [
  { name: 'API Services', status: 'operational' },
  { name: 'Authentication', status: 'operational' },
  { name: 'Agent Processing', status: 'operational' },
  { name: 'Data Storage', status: 'operational' },
]

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setContactForm({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-10 animate-fade-up">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-3">How Can We Help?</h1>
        <p className="text-[var(--text-secondary)] text-lg">
          Find answers, get support, or contact our team
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <a href="#faq" className="card card-hover p-5 text-center">
          <div className="text-[var(--accent-primary)] mx-auto mb-3">{Icons.helpCircle}</div>
          <h3 className="font-semibold text-[var(--text-primary)] mb-1">FAQ</h3>
          <p className="text-sm text-[var(--text-secondary)]">Quick answers to common questions</p>
        </a>
        
        <a href="/training" className="card card-hover p-5 text-center">
          <div className="text-[var(--accent-secondary)] mx-auto mb-3">{Icons.book}</div>
          <h3 className="font-semibold text-[var(--text-primary)] mb-1">Training Center</h3>
          <p className="text-sm text-[var(--text-secondary)]">Learn how to use AMBIT</p>
        </a>
        
        <a href="#contact" className="card card-hover p-5 text-center">
          <div className="text-[var(--accent-tertiary)] mx-auto mb-3">{Icons.messageCircle}</div>
          <h3 className="font-semibold text-[var(--text-primary)] mb-1">Contact Us</h3>
          <p className="text-sm text-[var(--text-secondary)]">Get in touch with our team</p>
        </a>
      </div>

      {/* System Status */}
      <section className="mb-10 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">System Status</h2>
        <div className="card p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[var(--accent-secondary)]">{Icons.checkCircle}</span>
            <span className="font-medium text-[var(--accent-secondary)]">All Systems Operational</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {systemStatus.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)]" />
                <span className="text-sm text-[var(--text-secondary)]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-[var(--bg-hover)] transition-colors"
              >
                <span className="font-medium text-[var(--text-primary)] pr-4">{faq.question}</span>
                <span className={openFaq === index ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'}>
                  {openFaq === index ? Icons.chevronUp : Icons.chevronDown}
                </span>
              </button>
              
              {openFaq === index && (
                <div className="px-5 pb-5">
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Contact Us</h2>
        
        <div className="card p-6">
          {submitted ? (
            <div className="text-center py-10">
              <div className="text-[var(--accent-secondary)] mx-auto mb-4 w-12 h-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Message Sent!</h3>
              <p className="text-[var(--text-secondary)]">
                We&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Your name"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="you@example.com"
                    className="input-field"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Subject
                </label>
                <select
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="input-field"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="general">General Question</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing Inquiry</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Message
                </label>
                <textarea
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Describe your question or issue..."
                  className="input-field min-h-[120px] resize-y"
                  rows={5}
                  required
                />
              </div>
              
              <button type="submit" className="btn-primary flex items-center gap-2">
                {Icons.send}
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
