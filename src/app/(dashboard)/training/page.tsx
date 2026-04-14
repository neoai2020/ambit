'use client'

import Link from 'next/link'

const Icons = {
  play: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  clock: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  checkCircle: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  book: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  ),
  target: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  zap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  lightbulb: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
    </svg>
  ),
  arrow: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
}

const lessons = [
  {
    id: 'getting-started',
    title: 'Getting Started with AMBIT',
    description: 'Learn the basics of using AI agents for your work',
    duration: '5 min',
    icon: '🚀',
    completed: false,
  },
  {
    id: 'choosing-agents',
    title: 'Choosing the Right Agent',
    description: 'How to find the perfect agent for your task',
    duration: '4 min',
    icon: '🎯',
    completed: false,
  },
  {
    id: 'input-optimization',
    title: 'Optimizing Your Inputs',
    description: 'Get better results with better inputs',
    duration: '6 min',
    icon: '✨',
    completed: false,
  },
  {
    id: 'workflows',
    title: 'Building Workflows',
    description: 'Chain agents together for complex tasks',
    duration: '8 min',
    icon: '⚡',
    completed: false,
  },
]

const useCases = [
  {
    title: 'Content Marketing',
    description: 'Create blog posts, social media content, and marketing copy',
    agents: ['Blog Post Writer', 'Instagram Caption', 'LinkedIn Post'],
    icon: '📝',
  },
  {
    title: 'Sales Outreach',
    description: 'Write cold emails, follow-ups, and sales scripts',
    agents: ['Cold Email Writer', 'Sales Script', 'Follow-Up Sequence'],
    icon: '💼',
  },
  {
    title: 'Coding Assistance',
    description: 'Debug code, generate documentation, convert languages',
    agents: ['Code Explainer', 'Code Debugger', 'Code Converter'],
    icon: '💻',
  },
  {
    title: 'Business Planning',
    description: 'Create business plans, proposals, and strategies',
    agents: ['Business Plan Writer', 'Pitch Deck Creator', 'SWOT Analysis'],
    icon: '📊',
  },
]

const tips = [
  {
    title: 'Be Specific',
    description: 'The more specific your input, the better the output. Include context, goals, and target audience.',
    icon: 'target',
  },
  {
    title: 'Use Options',
    description: 'Adjust tone, length, and style options to match your needs perfectly.',
    icon: 'zap',
  },
  {
    title: 'Iterate & Refine',
    description: "Don't settle for the first output. Regenerate or tweak your input for better results.",
    icon: 'lightbulb',
  },
]

export default function TrainingPage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card p-8 mb-8 relative overflow-hidden animate-fade-up">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative">
          <div className="flex items-center gap-2 text-[var(--accent-primary)] text-sm font-medium mb-3">
            {Icons.book}
            <span>Training Center</span>
          </div>
          
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-3">
            Master Your <span className="text-[var(--accent-primary)]">AI Workforce</span>
          </h1>
          
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
            Learn how to get the most out of AMBIT with our quick-start guides, 
            use case walkthroughs, and expert tips.
          </p>
        </div>
      </div>

      {/* Quick Start Lessons */}
      <section className="mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Quick Start Lessons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="card card-hover p-5 cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{lesson.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    {lesson.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1 text-[var(--text-muted)]">
                      {Icons.clock}
                      {lesson.duration}
                    </span>
                    {lesson.completed && (
                      <span className="flex items-center gap-1 text-[var(--accent-secondary)]">
                        {Icons.checkCircle}
                        Completed
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-[var(--bg-hover)] group-hover:bg-[var(--accent-primary)] transition-colors">
                  <span className="text-[var(--text-secondary)] group-hover:text-white transition-colors">
                    {Icons.play}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Agents for Use Cases */}
      <section className="mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Best Agents For...</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="card p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{useCase.icon}</span>
                <h3 className="font-semibold text-[var(--text-primary)]">{useCase.title}</h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                {useCase.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {useCase.agents.map((agent) => (
                  <Link
                    key={agent}
                    href={`/agents?search=${encodeURIComponent(agent)}`}
                    className="px-3 py-1 rounded-full text-xs bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-colors"
                  >
                    {agent}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pro Tips */}
      <section className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Pro Tips</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="card p-5"
            >
              <div className="p-3 rounded-xl bg-[var(--accent-primary)]/10 w-fit mb-4 text-[var(--accent-primary)]">
                {Icons[tip.icon as keyof typeof Icons]}
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-2">{tip.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-10 text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <Link href="/agents" className="btn-primary inline-flex items-center gap-2">
          Start Using Agents
          {Icons.arrow}
        </Link>
      </div>
    </div>
  )
}
