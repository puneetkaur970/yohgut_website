import { useState, useRef, useEffect } from 'react'
import Hero from './Hero'
import Promotions from './Promotions'
import SeasonalRotation from './SeasonalRotation'
import YogurtGame from './YogurtGame'
import heroVideo from '../assets/hero-video.webm'
import heroPoster from '../assets/hero-poster.webp'

export default function HomePage() {
  const [videoReady, setVideoReady] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => setVideoReady(true)
      video.addEventListener('canplay', handleCanPlay)
      
      if (video.readyState >= 3) {
        setVideoReady(true)
      }
      
      return () => video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  const openMenu = () => {
    window.location.hash = 'menu'
  }

  return (
    <main id="home" className="mx-auto max-w-[1200px] px-4 pb-12 md:px-16 md:pb-24">
      <div className="relative -mx-4 md:mx-0 aspect-video overflow-hidden md:rounded-lg shadow-lg bg-surface-container">
        <img 
          src={heroPoster} 
          alt="" 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        />
        <video 
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/5">
          <h1 className="text-white text-5xl md:text-7xl text-center mb-6 px-4 drop-shadow-2xl" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>
            Gut friendly frozen yogurt
          </h1>
          <button
            onClick={openMenu}
            className="bg-primary text-on-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
          >
            Explore Flavors
          </button>
        </div>
      </div>
      <Hero />
      <SeasonalRotation />
      
      <YogurtGame />

      <section className="my-16 flex flex-col items-center rounded-[48px] bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 px-8 py-14 text-center yogurt-shadow md:px-16">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <span
            className="material-symbols-outlined text-4xl text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
            aria-hidden
          >
            restaurant_menu
          </span>
        </div>
        <h2 className="mb-3 text-headline-lg text-on-background">See the full menu</h2>
        <p className="mb-8 max-w-xl text-body-lg text-on-surface-variant">
          Browse our flavours and toppings, and build your swirl.
        </p>
        <a
          href="#menu"
          className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-label-bold text-on-primary shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <span className="relative z-10 flex items-center gap-2">
            View menu
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-secondary to-tertiary opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
        </a>
      </section>

      <Promotions />
    </main>
  )
}
