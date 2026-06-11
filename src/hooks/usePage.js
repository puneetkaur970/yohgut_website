import { useEffect, useState } from 'react'

export function getPageFromHash() {
  const hash = window.location.hash.slice(1)
  if (hash === 'story') return 'story'
  if (hash === 'contact') return 'contact'
  if (hash === 'toppings') return 'toppings'
  if (hash === 'careers') return 'careers'
  if (hash === 'home') return 'home'
  return 'home'
}

export default function usePage() {
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash())
      // Use instant scroll for reliability on mobile, then apply smooth scroll
      // to ensure page is at top even if content is still rendering
      window.scrollTo(0, 0)
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
      })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return page
}
