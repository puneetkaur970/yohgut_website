import { useLayoutEffect } from 'react'
import HomePage from './HomePage'
import StoryPage from './StoryPage'
import ContactPage from './ContactPage'
import MenuPage from './MenuPage'
import CareersPage from './CareersPage'

export default function PageContent({ page }) {
  // Scroll to top when page changes - runs synchronously after DOM update
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  switch (page) {
    case 'story':
      return <StoryPage />
    case 'contact':
      return <ContactPage />
    case 'menu':
      return <MenuPage />
    case 'careers':
      return <CareersPage />
    default:
      return <HomePage />
  }
}
