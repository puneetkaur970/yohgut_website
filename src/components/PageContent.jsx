import HomePage from './HomePage'
import StoryPage from './StoryPage'
import ContactPage from './ContactPage'

export default function PageContent({ page }) {
  switch (page) {
    case 'story':
      return <StoryPage />
    case 'contact':
      return <ContactPage />
    default:
      return <HomePage />
  }
}
