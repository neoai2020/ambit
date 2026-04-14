'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useStore } from '@/store/useStore';

const Icons = {
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  bell: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  command: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  ),
};

const pageTitles: Record<string, { title: string; subtitle?: string }> = {
  '/dashboard': { title: 'Dashboard', subtitle: 'Overview of your AI workspace' },
  '/agents': { title: 'Agents', subtitle: 'Browse and activate AI agents' },
  '/templates': { title: 'Templates', subtitle: 'Pre-built prompts for common tasks' },
  '/workflows': { title: 'Workflows', subtitle: 'Automate multi-step processes' },
  '/analytics': { title: 'Analytics', subtitle: 'Track your productivity metrics' },
  '/training': { title: 'Training', subtitle: 'Learn to maximize your results' },
  '/saved': { title: 'Saved Outputs', subtitle: 'Your generated content library' },
  '/support': { title: 'Support', subtitle: 'Get help when you need it' },
};

export default function Header() {
  const pathname = usePathname();
  const { user } = useStore();
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Get page info
  const getPageInfo = () => {
    // Check for exact match first
    if (pageTitles[pathname]) return pageTitles[pathname];
    
    // Check for agent pages
    if (pathname.startsWith('/agents/')) {
      return { title: 'Agent', subtitle: 'Execute AI tasks' };
    }
    
    // Check for unlock pages
    if (pathname.startsWith('/unlock/')) {
      return { title: 'Upgrade', subtitle: 'Unlock premium features' };
    }
    
    // Default
    return { title: 'AMBIT', subtitle: '' };
  };
  
  const pageInfo = getPageInfo();

  return (
    <header className="sticky top-0 z-30 bg-[var(--bg-base)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)]">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left - Page Title */}
        <div>
          <h1 className="text-lg font-semibold text-[var(--text-primary)]">{pageInfo.title}</h1>
          {pageInfo.subtitle && (
            <p className="text-xs text-[var(--text-muted)]">{pageInfo.subtitle}</p>
          )}
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:border-[var(--border-accent)] hover:text-[var(--text-secondary)] transition-all"
          >
            {Icons.search}
            <span className="text-sm hidden sm:inline">Search agents...</span>
            <span className="hidden sm:flex items-center gap-1 text-xs bg-[var(--bg-base)] px-1.5 py-0.5 rounded">
              {Icons.command}
              <span>K</span>
            </span>
          </button>

          {/* Notifications */}
          <button className="relative w-10 h-10 rounded-xl flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)] transition-colors">
            {Icons.bell}
            <span className="absolute top-2 right-2 w-2 h-2 bg-[var(--accent-primary)] rounded-full" />
          </button>

          {/* User Avatar */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-[var(--accent-primary)]/20 transition-shadow">
            <span className="text-sm font-bold text-[var(--bg-base)]">
              {user?.email?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
