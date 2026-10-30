import FlavorCarousel from './FlavorCarousel'
import ToppingsPage from './ToppingsPage'

export default function MenuPage() {
  return (
    <main>
      <div className="mx-auto max-w-[1200px] px-4 pt-12 md:px-16 md:pt-24">
        <FlavorCarousel />
      </div>
      <ToppingsPage />
    </main>
  )
}
