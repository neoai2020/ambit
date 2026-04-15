type BrandLogoProps = {
  className?: string
  /** Bounding box height (square asset scales proportionally) */
  size?: 'sm' | 'md' | 'lg'
  /** Optional light panel (default off — logo PNG uses transparency) */
  pad?: boolean
}

const heightClass = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-12',
} as const

/** Bumped when replacing `public/ambit-mark.png` so browsers skip stale cache. */
const LOGO_SRC = '/ambit-mark.png?v=3'

export default function BrandLogo({ className = '', size = 'md', pad = false }: BrandLogoProps) {
  const img = (
    <img
      src={LOGO_SRC}
      alt="AMBIT"
      width={1024}
      height={1024}
      className={`${heightClass[size]} w-auto max-w-[min(100%,280px)] object-contain object-left ${className}`}
    />
  )

  if (!pad) return img

  return (
    <span className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-white/10">
      {img}
    </span>
  )
}
