import Hero from './Hero'
import Promotions from './Promotions'
import SeasonalRotation from './SeasonalRotation'
import YogurtGame from './YogurtGame'
import heroVideo from '../assets/hero-video.webm'

export default function HomePage() {
  const scrollToFlavors = (e) => {
    e.preventDefault()
    const flavorSection = document.getElementById('flavor-carousel-heading')
    if (flavorSection) {
      flavorSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main id="home" className="mx-auto max-w-[1200px] px-4 pb-12 md:px-16 md:pb-24">
      <div className="relative -mx-4 md:mx-0">
        <video 
          className="w-full md:rounded-lg shadow-lg"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={heroVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5 md:rounded-lg">
          <h1 className="text-white text-5xl md:text-7xl text-center mb-6 px-4 drop-shadow-2xl" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>
            Gut friendly frozen yogurt
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
      
      <YogurtGame />
      
      <section className="my-16 flex flex-col items-center justify-center rounded-[48px] bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 px-8 py-16 text-center yogurt-shadow md:px-16">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm">
          <span
            className="material-symbols-outlined text-5xl text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            breakfast_dining
          </span>
        </div>
        <h3 className="mb-4 text-headline-lg text-on-background">
          Toppings Bar
        </h3>
        <p className="mb-8 max-w-2xl text-body-lg text-on-surface-variant">
          Elevate your swirl with our hand-curated selection of premium toppings,
          prepared fresh in-house every morning. Explore our complete collection!
        </p>
        <a
          href="#toppings"
          className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-label-bold text-on-primary shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore All Toppings
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-tertiary opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
        </a>
      </section>

      <Promotions />
    </main>
  )
}
