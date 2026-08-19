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
    <img width={size} height={size} className={className} src={'/logo.svg'} />
  )
}
