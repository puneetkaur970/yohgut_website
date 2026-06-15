import { useState } from 'react'

export default function LoadingImage({ 
  src, 
  alt, 
  className = '', 
  wrapperClassName = '',
  placeholderColor = 'bg-surface-container'
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <div 
        className={`absolute inset-0 ${placeholderColor} transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`} 
      />
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
