import { useEffect, useState } from 'react'

export function getPageFromHash() {
  const hash = window.location.hash.slice(1)
  if (hash === 'story') return 'story'
  if (hash === 'contact') return 'contact'
  return 'menu'
}

export default function usePage() {
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPageFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return page
}
