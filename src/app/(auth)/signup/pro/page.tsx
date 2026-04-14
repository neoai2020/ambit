'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import BrandLogo from '@/components/BrandLogo'
import { createClient } from '@/lib/supabase/client'

const Icons = {
  user: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  mail: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  lock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  eye: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  eyeOff: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ),
  arrow: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  star: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
}

export default function ProSignupPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            user_type: 'pro',
          },
        },
      })

      if (error) {
        setError(error.message)
      } else {
        // Since email confirmation is disabled, redirect immediately
        router.push('/dashboard')
        router.refresh()
      }
    } catch {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const features = [
    'All 84+ specialized AI agents',
    'Priority support & updates',
    'Advanced automation tools',
    'Unlimited generations',
  ]

  return (
    <div className="w-full max-w-md animate-fade-up">
      <div className="card p-8 relative overflow-hidden">
        {/* Pro badge gradient background */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--brand-orange)] via-[var(--brand-blue)] to-[var(--brand-orange)]" />
        
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <BrandLogo size="lg" />
          <span className="text-xs font-semibold tracking-wider text-[var(--accent-primary)] uppercase">
            Pro account
          </span>
        </div>

        <h1 className="text-2xl font-bold text-center mb-2 text-[var(--text-primary)]">Create Pro Account</h1>
        <p className="text-[var(--text-secondary)] text-center mb-6">
          Unlock the full power of your AI workforce
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <div className="w-5 h-5 rounded-full bg-[var(--brand-blue)]/25 flex items-center justify-center text-[var(--accent-primary)]">
                {Icons.star}
              </div>
              {feature}
            </div>
          ))}
        </div>

        {error && (
          <div className="p-4 mb-6 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm animate-fade-up">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                {Icons.user}
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="input-field pl-12"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Email
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                {Icons.mail}
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input-field pl-12"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                {Icons.lock}
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-field pl-12 pr-12"
                minLength={6}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                {showPassword ? Icons.eyeOff : Icons.eye}
              </button>
            </div>
            <p className="mt-1.5 text-xs text-[var(--text-muted)]">
              Must be at least 6 characters
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
          >
            {loading ? (
              <div className="loader !w-5 !h-5 !border-2" />
            ) : (
              <>
                Create Pro Account
                {Icons.arrow}
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-center text-[var(--text-secondary)] text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-amber-400 hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
