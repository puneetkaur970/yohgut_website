import HomePage from './HomePage'
import StoryPage from './StoryPage'
import ContactPage from './ContactPage'
import ToppingsPage from './ToppingsPage'

export default function PageContent({ page }) {
  switch (page) {
    case 'story':
      return <StoryPage />
    case 'contact':
      return <ContactPage />
    case 'toppings':
      return <ToppingsPage />
    default:
      return <HomePage />
  }
}
