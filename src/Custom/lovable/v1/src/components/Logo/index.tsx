type LogoMarkProps = {
  size?: number
  className?: string
}

/**
 * Conceptica mark: an eclipse-like "C" — one circle shifted over another,
 * the moment a familiar shape reveals a different view. The focal dot marks
 * the concept that clicks into place.
 */
export function LogoMark({ size = 28, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Conceptica"
      className={className}
    >
      <defs>
        <mask id="conceptica-eclipse">
          <rect width="48" height="48" fill="black" />
          <circle cx="24" cy="24" r="18" fill="white" />
          <circle cx="33" cy="24" r="14" fill="black" />
        </mask>
      </defs>

      {/* outer thin orbit */}
      <circle
        cx="24"
        cy="24"
        r="21.25"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="1.5"
      />

      {/* the crescent: familiar circle seen from a shifted angle */}
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="#3457A1"
        mask="url(#conceptica-eclipse)"
      />

      {/* focal point */}
      <circle cx="34.5" cy="24" r="3" fill="currentColor" />
    </svg>
  )
}
