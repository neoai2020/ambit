/** Avoid static caching of auth pages at the edge (pairs with Cache-Control in next.config). */
export const dynamic = "force-dynamic"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--bg-base)]">
      {/* Background Effects */}
      <div className="app-bg" />
      <div className="noise-overlay" />
      
      {children}
    </div>
  )
}
