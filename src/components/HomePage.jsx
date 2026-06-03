import Hero from './Hero'
import Promotions from './Promotions'
import SeasonalRotation from './SeasonalRotation'
import ToppingsBar from './ToppingsBar'

export default function HomePage() {
  return (
    <main id="menu" className="mx-auto max-w-[1200px] px-4 pb-12 md:px-16 md:pb-24">
      <Hero />
      <SeasonalRotation />
      <ToppingsBar />
      <Promotions />
    </main>
  )
}
