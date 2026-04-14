'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useStore } from '@/store/useStore';
import BrandLogo from '@/components/BrandLogo';

// Icons as SVG components for better control
const Icons = {
  dashboard: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  ),
  agents: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="m4.93 4.93 2.83 2.83" />
      <path d="m16.24 16.24 2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="m4.93 19.07 2.83-2.83" />
      <path d="m16.24 7.76 2.83-2.83" />
    </svg>
  ),
  training: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" />
    </svg>
  ),
  saved: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  ),
  support: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  ),
  analytics: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
  ),
  templates: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  ),
  workflows: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M19 6h-6a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h6" />
      <polyline points="15 15 19 18 15 21" />
    </svg>
  ),
  rocket: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  infinite: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z" />
    </svg>
  ),
  automation: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M6 8h.01" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
    </svg>
  ),
  dfy: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  chevronRight: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  logout: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
  lock: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
};

const mainNavItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Icons.dashboard },
  { href: '/agents', label: 'Agents', icon: Icons.agents },
  { href: '/templates', label: 'Templates', icon: Icons.templates },
  { href: '/workflows', label: 'Workflows', icon: Icons.workflows },
  { href: '/analytics', label: 'Analytics', icon: Icons.analytics },
];

const libraryItems = [
  { href: '/training', label: 'Training', icon: Icons.training },
  { href: '/saved', label: 'Saved', icon: Icons.saved },
  { href: '/support', label: 'Support', icon: Icons.support },
];

const upgradeItems = [
  { href: '/unlock/10x', label: '10X Mode', icon: Icons.rocket, color: '#f59e0b' },
  { href: '/unlock/infinite', label: 'Infinite', icon: Icons.infinite, color: '#84cc16' },
  { href: '/unlock/automation', label: 'Automation', icon: Icons.automation, color: '#06b6d4' },
  { href: '/unlock/dfy', label: 'DFY Packs', icon: Icons.dfy, color: '#a78bfa' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useStore();
  const [collapsed, setCollapsed] = useState(false);

  const NavLink = ({ href, icon, label, locked, color }: { 
    href: string; 
    icon: React.ReactNode; 
    label: string; 
    locked?: boolean;
    color?: string;
  }) => {
    const isActive = pathname === href || pathname.startsWith(href + '/');
    
    return (
      <Link
        href={href}
        className={`
          group relative flex items-center gap-3 px-3 py-2.5 rounded-xl
          transition-all duration-200 ease-out
          ${isActive 
            ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]' 
            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
          }
        `}
        style={isActive && color ? { 
          backgroundColor: `${color}15`,
          color: color 
        } : undefined}
      >
        {/* Active indicator */}
        {isActive && (
          <span 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full"
            style={{ backgroundColor: color || 'var(--accent-primary)' }}
          />
        )}
        
        <span className={`flex-shrink-0 transition-colors ${isActive ? '' : 'opacity-70 group-hover:opacity-100'}`}>
          {icon}
        </span>
        
        {!collapsed && (
          <>
            <span className="text-sm font-medium flex-1">{label}</span>
            {locked && (
              <span className="text-[var(--text-muted)]">{Icons.lock}</span>
            )}
          </>
        )}
      </Link>
    );
  };

  return (
    <aside 
      className={`
        fixed top-0 left-0 h-screen z-40
        bg-[var(--bg-surface)] border-r border-[var(--border-subtle)]
        flex flex-col transition-all duration-300 ease-out
        ${collapsed ? 'w-[72px]' : 'w-[260px]'}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[var(--border-subtle)]">
        <Link href="/dashboard" className={`flex items-center gap-3 min-w-0 ${collapsed ? 'justify-center' : ''}`}>
          {collapsed ? (
            <BrandLogo size="sm" />
          ) : (
            <BrandLogo size="md" />
          )}
        </Link>
        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`
            w-7 h-7 rounded-lg flex items-center justify-center
            text-[var(--text-muted)] hover:text-[var(--text-primary)]
            hover:bg-[var(--bg-hover)] transition-all
            ${collapsed ? 'rotate-180' : ''}
          `}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {/* Main Section */}
        <div className="space-y-1">
          {!collapsed && (
            <p className="px-3 py-2 text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              Main
            </p>
          )}
          {mainNavItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </div>

        {/* Divider */}
        <div className="my-4 mx-3 border-t border-[var(--border-subtle)]" />

        {/* Library Section */}
        <div className="space-y-1">
          {!collapsed && (
            <p className="px-3 py-2 text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              Library
            </p>
          )}
          {libraryItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </div>

        {/* Divider */}
        <div className="my-4 mx-3 border-t border-[var(--border-subtle)]" />

        {/* Upgrade Section */}
        <div className="space-y-1">
          {!collapsed && (
            <p className="px-3 py-2 text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              Upgrade
            </p>
          )}
          {upgradeItems.map((item) => (
            <NavLink key={item.href} {...item} locked color={item.color} />
          ))}
        </div>
      </nav>

      {/* Footer / User Section */}
      <div className="p-3 border-t border-[var(--border-subtle)]">
        {/* Quick Actions */}
        {!collapsed && (
          <div className="mb-3 p-3 rounded-xl bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 border border-[var(--border-accent)]">
            <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Pro Tip</p>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
              Press <kbd className="px-1.5 py-0.5 bg-[var(--bg-base)] rounded text-[10px]">⌘K</kbd> to quick search agents
            </p>
          </div>
        )}
        
        {/* User */}
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-[var(--bg-base)]">
              {user?.email?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
          
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[var(--text-primary)] truncate">
                {user?.email?.split('@')[0] || 'Demo User'}
              </p>
              <p className="text-[11px] text-[var(--text-muted)]">Member</p>
            </div>
          )}
          
          {!collapsed && (
            <button className="p-2 rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
              {Icons.logout}
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
