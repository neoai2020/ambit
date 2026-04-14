'use client'

import Link from 'next/link'
import BrandLogo from '@/components/BrandLogo'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Zap, 
  Shield, 
  CheckCircle,
  ChevronRight,
  Star
} from 'lucide-react'
import { agents, categories } from '@/data/agents'

export default function HomePage() {
  const features = [
    {
      icon: Bot,
      title: '100+ AI Agents',
      description: 'Pre-configured agents for writing, marketing, coding, and more',
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'One click generates professional outputs in seconds',
    },
    {
      icon: Shield,
      title: 'No Prompt Engineering',
      description: 'We handle the complexity so you can focus on results',
    },
  ]

  const testimonials = [
    {
      quote: "AMBIT transformed how I create content. What used to take hours now takes minutes.",
      author: "Sarah M.",
      role: "Content Marketer",
    },
    {
      quote: "The pre-built agents are incredibly powerful. It's like having a team of specialists on demand.",
      author: "James K.",
      role: "Startup Founder",
    },
    {
      quote: "Finally, AI that just works. No complicated prompts, just results.",
      author: "Maria L.",
      role: "Freelance Writer",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border-primary)] bg-[var(--bg-primary)]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <BrandLogo size="md" />
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="btn-secondary text-sm">
              Sign In
            </Link>
            <Link href="/signup" className="btn-primary text-sm flex items-center gap-2">
              Get Started
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--neon-blue)]/10 text-[var(--neon-blue)] text-sm font-medium mb-6">
              <Sparkles size={16} />
              {agents.length}+ AI Agents Ready to Work
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your AI Workforce<br />
              <span className="gradient-text">Is Online</span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Access 100+ specialized AI agents that write, code, market, and automate like elite professionals. 
              One click. One agent. One perfect result.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup" className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
                <Sparkles size={20} />
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link href="/agents" className="btn-secondary text-lg px-8 py-4 flex items-center gap-2">
                Browse Agents
                <ChevronRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-8 text-sm text-[var(--text-muted)]"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2">4.9/5 rating</span>
            </div>
            <div>10,000+ users</div>
            <div>500,000+ outputs generated</div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI That Works <span className="gradient-text">For You</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
              No prompt engineering. No trial and error. Just click, generate, and use.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-[var(--neon-blue)]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-secondary)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Agents for <span className="gradient-text">Every Task</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-lg">
              12 categories of specialized AI agents
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-4 text-center hover:border-[var(--neon-blue)] transition-colors cursor-pointer"
              >
                <span className="text-3xl mb-2 block">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by <span className="gradient-text">Thousands</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-[var(--text-muted)]">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/10 to-[var(--neon-purple)]/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to 10X Your Productivity?
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-xl mx-auto">
                Join thousands of professionals using AMBIT to create better content, faster.
              </p>
              <Link href="/signup" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                <Sparkles size={20} />
                Get Started
                <ArrowRight size={20} />
              </Link>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[var(--text-muted)]">
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Instant access
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  84+ AI agents
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[var(--border-primary)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BrandLogo size="sm" />
            <span className="font-semibold text-[var(--text-primary)]">AMBIT</span>
          </div>
          
          <p className="text-sm text-[var(--text-muted)]">
            © 2026 AMBIT. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-[var(--text-secondary)]">
            <a href="#" className="hover:text-[var(--text-primary)]">Privacy</a>
            <a href="#" className="hover:text-[var(--text-primary)]">Terms</a>
            <a href="#" className="hover:text-[var(--text-primary)]">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
