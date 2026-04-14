'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Check, Sparkles, Lock } from 'lucide-react'
import Link from 'next/link'
import { getUpsellById } from '@/data/upsells'
import { useStore } from '@/store/useStore'
import { UpsellInfo, UpsellType } from '@/types'

export default function UnlockPage() {
  const params = useParams()
  const router = useRouter()
  const [upsell, setUpsell] = useState<UpsellInfo | null>(null)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const { unlockUpsell, hasUpsell } = useStore()

  useEffect(() => {
    const upsellData = getUpsellById(params.id as string)
    if (upsellData) {
      // Check if already unlocked
      if (hasUpsell(upsellData.id)) {
        router.push(`/${upsellData.id}`)
        return
      }
      setUpsell(upsellData)
    } else {
      router.push('/dashboard')
    }
  }, [params.id, router, hasUpsell])

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!upsell || !email) return
    
    setLoading(true)
    
    // Simulate unlock process
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Unlock the upsell
    unlockUpsell(upsell.id as UpsellType)
    setUnlocked(true)
    
    // Redirect after showing success
    setTimeout(() => {
      router.push(`/${upsell.id}`)
    }, 2000)
  }

  if (!upsell) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        {/* Back Button */}
        <Link 
          href="/dashboard"
          className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-6"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="glass-card p-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--neon-purple)]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative">
            {unlocked ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-green-400" />
                </div>
                <h1 className="text-2xl font-bold mb-2">
                  {upsell.name} Unlocked!
                </h1>
                <p className="text-[var(--text-secondary)] mb-4">
                  Redirecting you to your new features...
                </p>
                <div className="loader mx-auto" />
              </motion.div>
            ) : (
              /* Unlock Form */
              <>
                <div className="text-center mb-8">
                  <span className="text-6xl mb-4 block">{upsell.icon}</span>
                  <h1 className="text-2xl font-bold mb-2">
                    Unlock {upsell.name}
                  </h1>
                  <p className="text-[var(--neon-purple)] font-medium mb-4">
                    {upsell.tagline}
                  </p>
                  <p className="text-[var(--text-secondary)]">
                    {upsell.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="bg-[var(--bg-tertiary)] rounded-xl p-4 mb-6">
                  <p className="text-sm font-medium text-[var(--text-muted)] mb-3">
                    What you'll get:
                  </p>
                  <ul className="space-y-2">
                    {upsell.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <Check size={14} className="text-[var(--neon-purple)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Unlock Form */}
                <form onSubmit={handleUnlock} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Confirm your email to unlock
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="input-field pl-11"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                    style={{
                      background: 'var(--gradient-brand)',
                    }}
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Sparkles size={18} />
                        Unlock {upsell.name}
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-xs text-center text-[var(--text-muted)]">
                  By unlocking, you agree to receive updates about this feature.
                </p>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
