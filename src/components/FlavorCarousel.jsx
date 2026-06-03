import { useCallback, useRef, useState } from 'react'
import { IMAGES } from '../constants/images'

const FLAVOR_SLIDES = [
  {
    name: 'Original Frozen Yoghurt',
    badge: 'Classic Signature',
    description:
      'Our house classic—creamy, balanced, and the foundation every swirl starts from.',
    image: IMAGES.wildBerrySwirl,
  },
  {
    name: 'Mango',
    badge: 'Tropical Favorite',
    description:
      'Sun-ripe mango folded into tart yogurt for a bright, golden spoonful every time.',
    image: IMAGES.flavorMango,
  },
  {
    name: 'Strawberry',
    badge: 'Berry Fresh',
    description:
      'Sweet strawberries blended smooth—light, fruity, and perfect with crunchy toppings.',
    image: IMAGES.flavorStrawberry,
  },
  {
    name: 'Vanilla',
    badge: 'Timeless Classic',
    description:
      'Pure Madagascar vanilla swirled into creamy yogurt—silky, subtle, and perfect with any topping.',
    image: IMAGES.flavorVanilla,
  },
  {
    name: 'Coconut',
    badge: 'Island Cream',
    description:
      'Toasted coconut notes meet cool yogurt for a silky, vacation-worthy scoop.',
    image: IMAGES.flavorCoconut,
  },
  {
    name: 'Chocolate',
    badge: 'Rich Indulgence',
    description:
      'Deep cocoa richness balanced with our signature tang—decadent without the heaviness.',
    image: IMAGES.flavorChocolate,
  },
  {
    name: 'Acai',
    badge: 'Superfruit Boost',
    description:
      'Antioxidant-packed acai with a naturally vibrant finish—bold color, clean finish.',
    image: IMAGES.flavorAcai,
  },
]

const SLIDE_COUNT = FLAVOR_SLIDES.length
const VISIBLE_SLIDES = 5
const SIDE_SLIDES = Math.floor(VISIBLE_SLIDES / 2)

const SWIPE_THRESHOLD_PX = 48
const DRAG_START_PX = 10

function getVisibleSlides(activeIndex) {
  const slides = []
  for (let i = -SIDE_SLIDES; i <= SIDE_SLIDES; i++) {
    const index = ((activeIndex + i) % SLIDE_COUNT + SLIDE_COUNT) % SLIDE_COUNT
    slides.push({ ...FLAVOR_SLIDES[index], originalIndex: index, offset: i })
  }
  return slides
}

export default function FlavorCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const pointerStartX = useRef(0)
  const isDragging = useRef(false)

  const goTo = useCallback((index) => {
    setActiveIndex(((index % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT)
  }, [])

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  const handlePointerDown = (e) => {
    if (e.button !== 0) return
    pointerStartX.current = e.clientX
    isDragging.current = false
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (Math.abs(e.clientX - pointerStartX.current) > DRAG_START_PX) {
      isDragging.current = true
    }
  }

  const handlePointerUp = (e) => {
    e.currentTarget.releasePointerCapture(e.pointerId)
    if (!isDragging.current) return
    const diff = pointerStartX.current - e.clientX
    if (diff > SWIPE_THRESHOLD_PX) goNext()
    else if (diff < -SWIPE_THRESHOLD_PX) goPrev()
    isDragging.current = false
  }

  const handlePointerCancel = () => {
    isDragging.current = false
  }

  const handleSlideClick = (offset) => {
    if (isDragging.current) return
    if (offset !== 0) {
      goTo(activeIndex + offset)
    }
  }

  const activeSlide = FLAVOR_SLIDES[activeIndex]
  const visibleSlides = getVisibleSlides(activeIndex)

  return (
    <section aria-labelledby="flavor-carousel-heading">
      <div className="mb-6 md:mb-8">
        <h2
          id="flavor-carousel-heading"
          className="flex items-center gap-2 text-headline-lg text-on-background"
        >
          <span
            className="material-symbols-outlined text-secondary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            icecream
          </span>
          Flavor Spotlight
        </h2>
        <p className="mt-2 max-w-2xl text-body-md text-on-surface-variant">
          Tap a flavor, use the arrows, or drag to explore our rotating lineup.
        </p>
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label="Previous flavor"
          onClick={goPrev}
          className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container text-on-surface shadow-sm transition-colors hover:bg-surface-container-high md:flex"
        >
          <span className="material-symbols-outlined text-2xl">chevron_left</span>
        </button>
        <button
          type="button"
          aria-label="Next flavor"
          onClick={goNext}
          className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container text-on-surface shadow-sm transition-colors hover:bg-surface-container-high md:flex"
        >
          <span className="material-symbols-outlined text-2xl">chevron_right</span>
        </button>

        <div
          className="flex cursor-grab select-none items-center justify-center gap-3 overflow-hidden px-1 py-2 touch-pan-y active:cursor-grabbing md:gap-4 md:px-12"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {visibleSlides.map((slide) => {
            const isCenter = slide.offset === 0
            const distance = Math.abs(slide.offset)
            const scale = isCenter ? 1 : 0.75 - distance * 0.05
            const opacity = isCenter ? 1 : 0.5 - distance * 0.1

            return (
              <button
                key={`${activeIndex}-${slide.offset}`}
                type="button"
                aria-label={`View ${slide.name}`}
                aria-current={isCenter}
                onClick={() => handleSlideClick(slide.offset)}
                style={{
                  transform: `scale(${scale})`,
                  opacity: Math.max(0.3, opacity),
                  zIndex: VISIBLE_SLIDES - distance,
                }}
                className={`relative shrink-0 overflow-hidden rounded-2xl transition-all duration-300 ease-out ${
                  isCenter
                    ? 'h-52 w-40 sm:h-60 sm:w-44 md:h-72 md:w-52'
                    : 'h-52 w-40 cursor-pointer sm:h-60 sm:w-44 md:h-72 md:w-52'
                }`}
              >
                <img
                  src={slide.image}
                  alt={`YohGut ${slide.name} frozen yogurt`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className={`h-full w-full object-cover ${
                    isCenter ? 'flavor-slide-zoom' : ''
                  }`}
                  onError={(e) => {
                    if (e.currentTarget.src !== IMAGES.wildBerrySwirl) {
                      e.currentTarget.src = IMAGES.wildBerrySwirl
                    }
                  }}
                />
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6 min-h-[7rem] text-center md:mt-8">
        <span className="text-label-bold uppercase tracking-wider text-primary">
          {activeSlide.badge}
        </span>
        <h3 className="mt-2 text-headline-lg text-on-background">{activeSlide.name}</h3>
        <p className="mx-auto mt-2 max-w-lg text-body-md text-on-surface-variant">
          {activeSlide.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {FLAVOR_SLIDES.map((slide, index) => (
          <button
            key={slide.name}
            type="button"
            aria-label={`Show ${slide.name}`}
            aria-selected={index === activeIndex}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'w-6 bg-primary'
                : 'w-2 bg-outline-variant/50 hover:bg-primary/40'
            }`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  )
}
