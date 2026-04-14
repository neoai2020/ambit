type BrandLogoProps = {
  className?: string
  /** Visual height of the wordmark */
  size?: 'sm' | 'md' | 'lg'
  /** Light backing so the logo reads on dark UI */
  pad?: boolean
}

const heightClass = {
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-11',
} as const

export default function BrandLogo({ className = '', size = 'md', pad = true }: BrandLogoProps) {
  const img = (
    <img
      src="/ambit-logo.png"
      alt="AMBIT"
      width={200}
      height={56}
      className={`${heightClass[size]} w-auto max-w-[200px] object-contain object-left ${className}`}
    />
  )

  if (!pad) return img

  return (
    <span className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-white/10">
      {img}
    </span>
  )
}
