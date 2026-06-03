import Hero from './Hero'
import Promotions from './Promotions'
import SeasonalRotation from './SeasonalRotation'
import ToppingsBar from './ToppingsBar'
import frozenYohgutVideo from '../assets/Frozen_yohgut_in_cup_202606032218.mp4'

export default function HomePage() {
  const scrollToFlavors = (e) => {
    e.preventDefault()
    const flavorSection = document.getElementById('flavor-carousel-heading')
    if (flavorSection) {
      flavorSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main id="menu" className="mx-auto max-w-[1200px] px-4 pb-12 md:px-16 md:pb-24">
      <div className="relative">
        <video 
          className="w-full rounded-lg shadow-lg"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={frozenYohgutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 rounded-lg">
          <h1 className="text-white text-5xl md:text-7xl text-center mb-6 px-4 drop-shadow-2xl" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>
            Healthy and Gut friendly frozen yohgurt
          </h1>
          <button
            onClick={scrollToFlavors}
            className="bg-primary text-on-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
          >
            Explore Flavors
          </button>
        </div>
      </div>
      <Hero />
      <SeasonalRotation />
      <ToppingsBar />
      <Promotions />
    </main>
  )
}
