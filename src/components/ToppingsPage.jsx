import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// Emoji mapping for toppings
const toppingEmojis = {
  'Strawberries': '🍓',
  'Blueberries': '🫐',
  'Bananas': '🍌',
  'Kiwi': '🥝',
  'Watermelon': '🍉',
  'Caramelised Banana': '🍌✨',
  'Rockmelon': '🍈',
  'Blackberries': '🫐',
  'Pineapple': '🍍',
  'Granola': '🌾',
  'Nuts': '🥜',
  'Biscoff': '🍪',
  'Cheerios': '⭕',
  'Jelly Belly': '🍬',
  'Chocolate chips': '🍫',
  'Chocolate wafers': '🍫',
  'Mini oreos': '🍪',
  "M&M's": '🍬',
}

const toppingCategories = [
  {
    title: 'Fresh Fruits',
    icon: 'nutrition',
    iconBg: 'bg-gradient-to-br from-secondary/20 to-secondary/5',
    iconColor: 'text-secondary',
    cardGradient: 'from-secondary/5 to-transparent',
    dotColor: 'bg-secondary',
    description: 'Nature\'s candy, picked at peak ripeness',
    items: [
      'Strawberries',
      'Blueberries',
      'Bananas',
      'Kiwi',
      'Watermelon',
      'Caramelised Banana',
      'Rockmelon',
      'Blackberries',
      'Pineapple',
    ],
  },
  {
    title: 'Crunchy',
    icon: 'breakfast_dining',
    iconBg: 'bg-gradient-to-br from-tertiary/20 to-tertiary/5',
    iconColor: 'text-tertiary',
    cardGradient: 'from-tertiary/5 to-transparent',
    dotColor: 'bg-tertiary',
    description: 'Add that perfect textural contrast',
    items: ['Granola', 'Nuts', 'Biscoff', 'Cheerios', 'Jelly Belly'],
  },
  {
    title: 'Chocolatey',
    icon: 'cookie',
    iconBg: 'bg-gradient-to-br from-primary/20 to-primary/5',
    iconColor: 'text-primary',
    cardGradient: 'from-primary/5 to-transparent',
    dotColor: 'bg-primary',
    description: 'For those irresistible chocolate cravings',
    items: [
      'Chocolate chips',
      'Chocolate wafers',
      'Mini oreos',
      "M&M's",
    ],
  },
]

export default function ToppingsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [fallingToppings, setFallingToppings] = useState([])

  // Collect all topping items
  const allToppings = toppingCategories.flatMap(category => category.items)

  useEffect(() => {
    setIsVisible(true)
    
    // Generate falling toppings
    const toppings = Array.from({ length: 35 }, (_, i) => {
      const toppingName = allToppings[Math.floor(Math.random() * allToppings.length)]
      return {
        id: Date.now() + i,
        emoji: toppingEmojis[toppingName] || '🍨',
        name: toppingName,
        left: Math.random() * 100,
        delay: Math.random() * 600,
        duration: 2500 + Math.random() * 2000,
        rotation: (Math.random() - 0.5) * 720,
        swing: (Math.random() - 0.5) * 150,
        size: 25 + Math.random() * 30,
      }
    })
    setFallingToppings(toppings)
    
    // Cleanup after animation completes
    setTimeout(() => setFallingToppings([]), 5000)
  }, [])

  // Topping shower portal
  const toppingPortal = fallingToppings.length > 0 && createPortal(
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {fallingToppings.map((topping) => (
        <div
          key={topping.id}
          className="absolute animate-topping-fall"
          style={{
            left: `${topping.left}%`,
            top: '-10%',
            fontSize: `${topping.size}px`,
            animationDelay: `${topping.delay}ms`,
            animationDuration: `${topping.duration}ms`,
            '--swing-amount': `${topping.swing}px`,
            '--rotation-amount': `${topping.rotation}deg`,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          }}
        >
          {topping.emoji}
        </div>
      ))}
    </div>,
    document.body
  )

  return (
    <>
      {toppingPortal}
      <main className="relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-96 w-96 animate-blob rounded-full bg-primary/10 blur-3xl" />
        <div className="animation-delay-2000 absolute -left-32 top-64 h-96 w-96 animate-blob rounded-full bg-secondary/10 blur-3xl" />
        <div className="animation-delay-4000 absolute -bottom-32 right-64 h-96 w-96 animate-blob rounded-full bg-tertiary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 py-12 md:px-16 md:py-24">
        {/* Hero Section */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-tertiary/20 backdrop-blur-sm animate-float">
            <span
              className="material-symbols-outlined text-6xl text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              restaurant
            </span>
          </div>
          
          <h1 className="mb-4 text-display-lg font-bold text-on-background">
            Toppings Bar
          </h1>
          
          <p className="mx-auto max-w-2xl text-headline-sm text-on-surface-variant">
            Elevate your swirl with our hand-curated selection of premium toppings,
            prepared fresh in-house every morning. Each topping is carefully selected
            to complement our creamy frozen yogurt.
          </p>

          {/* Decorative Divider */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-2">
            <div className="h-1 w-12 rounded-full bg-primary" />
            <div className="h-1 w-1 rounded-full bg-secondary" />
            <div className="h-1 w-1 rounded-full bg-tertiary" />
            <div className="h-1 w-12 rounded-full bg-primary" />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {toppingCategories.map(
            ({ title, icon, iconBg, iconColor, cardGradient, dotColor, description, items }, index) => (
              <div
                key={title}
                className={`group relative overflow-hidden rounded-[32px] border border-outline-variant/30 bg-white p-8 transition-all duration-700 hover:border-transparent hover:shadow-2xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Card Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${cardGradient}`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${iconBg}`}
                  >
                    <span
                      className={`material-symbols-outlined text-3xl transition-colors duration-300 ${iconColor}`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-headline-lg font-bold text-on-surface transition-colors duration-300 group-hover:text-primary">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-body-sm italic text-on-surface-variant">
                    {description}
                  </p>

                  {/* Divider */}
                  <div className="mb-6 h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent" />

                  {/* Items List */}
                  <ul className="space-y-3">
                    {items.map((item, itemIndex) => (
                      <li
                        key={item}
                        className={`flex items-center gap-3 text-body-md text-on-surface-variant transition-all duration-500 hover:translate-x-2 hover:text-on-surface ${
                          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{
                          transitionDelay: `${index * 150 + itemIndex * 50}ms`,
                        }}
                      >
                        <span
                          className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 group-hover:scale-150 ${dotColor}`}
                        />
                        <span className="transition-transform duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Accent Line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${dotColor}`} />
                </div>
              </div>
            ),
          )}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`mt-16 rounded-[32px] bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 p-12 text-center transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="mb-4 text-headline-lg font-bold text-on-background">
            Create Your Perfect Swirl
          </h3>
          <p className="mx-auto mb-6 max-w-xl text-body-lg text-on-surface-variant">
            Mix and match any combination of toppings to create your unique masterpiece.
            Our friendly staff is here to help you build the perfect bowl!
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-label-bold text-on-primary shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Back to Home
            <span className="material-symbols-outlined transition-transform duration-300 group-hover:-translate-x-1">
              arrow_back
            </span>
          </a>
        </div>
      </div>
      </main>
    </>
  )
}
