import HomePage from './HomePage'
import StoryPage from './StoryPage'
import ContactPage from './ContactPage'
import ToppingsPage from './ToppingsPage'
import CareersPage from './CareersPage'

export default function PageContent({ page }) {
  switch (page) {
    case 'story':
      return <StoryPage />
    case 'contact':
      return <ContactPage />
    case 'toppings':
      return <ToppingsPage />
    case 'careers':
      return <CareersPage />
    default:
      return <HomePage />
  }
}
