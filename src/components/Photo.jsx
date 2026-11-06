import { useState } from 'react'
import Icon from './Icon'

export default function Photo({ src, alt, icon = 'helmet', className = '', eager = false }) {
  const [failed, setFailed] = useState(!src)

  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`photo-fallback ${className}`}>
        <Icon name={icon} className="text-5xl opacity-80" />
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}
