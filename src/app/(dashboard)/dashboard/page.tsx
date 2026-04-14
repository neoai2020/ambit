'use client';

import Link from 'next/link';
import { useStore } from '@/store/useStore';
import { agents } from '@/data/agents';
import { upsells } from '@/data/upsells';

// Icon components
const Icons = {
  play: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  ),
  agents: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  lightning: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  bookmark: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  ),
  grid: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  arrow: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  lock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  sparkle: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    </svg>
  ),
  clock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

const categories = [
  { id: 'writing', name: 'Writing', emoji: '✍️', count: agents.filter(a => a.category === 'writing').length },
  { id: 'marketing', name: 'Marketing', emoji: '📣', count: agents.filter(a => a.category === 'marketing').length },
  { id: 'social-media', name: 'Social Media', emoji: '📱', count: agents.filter(a => a.category === 'social-media').length },
  { id: 'coding', name: 'Coding', emoji: '💻', count: agents.filter(a => a.category === 'coding').length },
  { id: 'business', name: 'Business', emoji: '💼', count: agents.filter(a => a.category === 'business').length },
  { id: 'creative', name: 'Creative', emoji: '🎨', count: agents.filter(a => a.category === 'creative').length },
];

const featuredAgents = agents.slice(0, 6);

const trainingVideos = [
  { id: 1, title: 'Getting Started with AMBIT', duration: '5:32', thumbnail: '/thumb-1.jpg', category: 'Basics' },
  { id: 2, title: 'Master Content Creation', duration: '8:15', thumbnail: '/thumb-2.jpg', category: 'Writing' },
  { id: 3, title: 'Automate Your Workflow', duration: '6:48', thumbnail: '/thumb-3.jpg', category: 'Advanced' },
];

export default function DashboardPage() {
  const { user, savedOutputs, tasksCompleted } = useStore();

  const stats = [
    { 
      label: 'Available Agents', 
      value: agents.length.toString(), 
      icon: Icons.agents,
      color: '#f59e0b',
      change: null 
    },
    { 
      label: 'Tasks Completed', 
      value: tasksCompleted.toString(), 
      icon: Icons.lightning,
      color: '#84cc16',
      change: '+12%' 
    },
    { 
      label: 'Saved Outputs', 
      value: savedOutputs.length.toString(), 
      icon: Icons.bookmark,
      color: '#06b6d4',
      change: null 
    },
    { 
      label: 'Categories', 
      value: '12', 
      icon: Icons.grid,
      color: '#a78bfa',
      change: null 
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl mb-8 animate-fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/20 via-transparent to-[var(--accent-secondary)]/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-primary)]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        
        <div className="relative p-8 md:p-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="status-dot" />
            <span className="text-sm font-medium text-[var(--accent-secondary)]">System Online</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[var(--text-primary)]">Welcome back, </span>
            <span className="text-gradient">{user?.email?.split('@')[0] || 'Creator'}</span>
          </h1>
          
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-8">
            Your AI workforce is ready. Access {agents.length}+ specialized agents to write, code, market, and automate—all with a single click.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/agents" className="btn-primary">
              {Icons.sparkle}
              <span>Browse Agents</span>
              {Icons.arrow}
            </Link>
            <Link href="/training" className="btn-secondary">
              <span>Watch Tutorials</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 stagger">
        {stats.map((stat) => (
          <div key={stat.label} className="metric-card group">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
              style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
            >
              {stat.icon}
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-[var(--text-primary)] mb-1">{stat.value}</p>
                <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
              </div>
              {stat.change && (
                <span className="text-xs font-semibold text-[var(--accent-secondary)] bg-[var(--accent-secondary)]/10 px-2 py-1 rounded-md">
                  {stat.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Featured Agents */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Featured Agents</h2>
            <Link href="/agents" className="text-sm font-medium text-[var(--accent-primary)] hover:underline flex items-center gap-1">
              View All {Icons.arrow}
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 stagger">
            {featuredAgents.map((agent) => (
              <Link
                key={agent.id}
                href={`/agents/${agent.id}`}
                className="card card-hover p-5 group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{agent.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                      {agent.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] line-clamp-2">{agent.description}</p>
                    <div className="mt-3">
                      <span className="badge badge-amber">{agent.category}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Start Video */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Quick Start</h2>
            <Link href="/training" className="text-sm font-medium text-[var(--accent-primary)] hover:underline flex items-center gap-1">
              All Videos {Icons.arrow}
            </Link>
          </div>
          
          <div className="space-y-4 stagger">
            {trainingVideos.map((video) => (
              <Link
                key={video.id}
                href="/training"
                className="card card-hover p-4 flex gap-4 group"
              >
                {/* Video Thumbnail */}
                <div className="w-24 h-16 rounded-lg bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--bg-base)]/50" />
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-[var(--accent-primary)] transition-colors z-10">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-[var(--text-primary)] text-sm mb-1 group-hover:text-[var(--accent-primary)] transition-colors line-clamp-1">
                    {video.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="badge badge-lime">{video.category}</span>
                    <span className="flex items-center gap-1">
                      {Icons.clock}
                      {video.duration}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[var(--text-primary)]">Browse by Category</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 stagger">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/agents?category=${cat.id}`}
              className="card card-hover p-5 text-center group"
            >
              <span className="text-4xl mb-3 block group-hover:scale-110 transition-transform">{cat.emoji}</span>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">{cat.name}</h3>
              <p className="text-sm text-[var(--text-muted)]">{cat.count} agents</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Upsell Section */}
      <section className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Unlock More Power</h2>
            <p className="text-sm text-[var(--text-muted)] mt-1">Upgrade your experience with premium features</p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger">
          {upsells.map((upsell, index) => {
            const colors = ['#f59e0b', '#84cc16', '#06b6d4', '#a78bfa'];
            const color = colors[index % colors.length];
            
            return (
              <Link
                key={upsell.id}
                href={`/unlock/${upsell.id}`}
                className="card relative overflow-hidden p-5 group"
                style={{ borderColor: `${color}30` }}
              >
                {/* Gradient Background */}
                <div 
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: `linear-gradient(135deg, ${color}, transparent)` }}
                />
                
                <div className="relative">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${color}15`, color }}
                  >
                    {Icons.lock}
                  </div>
                  
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">{upsell.name}</h3>
                  <p className="text-sm text-[var(--text-muted)] line-clamp-2">{upsell.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
                    <span 
                      className="text-sm font-medium flex items-center gap-1"
                      style={{ color }}
                    >
                      Unlock Now {Icons.arrow}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
