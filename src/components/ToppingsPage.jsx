import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import MenuAvailabilityNote from './MenuAvailabilityNote'

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
  'Dubai Choco crunch': '🍫',
  'Strawberry Cream Crunch': '🍓',
  'Cookie Cream Crunch': '🍪',
  'Peanut Butter Crunch': '🥜',
  'Raspberry Crumbles': '🍇',
  'Pistachio Crumbles': '💚',
  'Strawberry Pearls': '🍓',
  'Mango Pearls': '🥭',
  'Lychee Pearls': '🫧',
  'Mango Mochi': '🥭',
  'Strawberry Mochi': '🍓',
  'Matcha Mochi': '🍵',
  'Mini marshmallows': '🍡',
  'Biscoff sauce': '🍪',
  'Nutella sauce': '🍫',
  'Chocolate sauce': '🍫',
  'Pistachio sauce': '🥜',
  'Bueno sauce': '🍫',
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
    sections: [
      {
        title: 'Crunch',
        items: [
          'Dubai Choco crunch',
          'Strawberry Cream Crunch',
          'Cookie Cream Crunch',
          'Peanut Butter Crunch',
        ],
      },
      {
        title: 'Crumbles',
        items: ['Raspberry Crumbles', 'Pistachio Crumbles'],
      },
    ],
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
  {
    title: 'Pearls',
    icon: 'bubble_chart',
    iconBg: 'bg-gradient-to-br from-secondary/20 to-secondary/5',
    iconColor: 'text-secondary',
    cardGradient: 'from-secondary/5 to-transparent',
    dotColor: 'bg-secondary',
    description: 'Juicy bursts of fruit in every spoonful',
    items: ['Strawberry Pearls', 'Mango Pearls', 'Lychee Pearls'],
  },
  {
    title: 'Mochi',
    icon: 'rice_bowl',
    iconBg: 'bg-gradient-to-br from-tertiary/20 to-tertiary/5',
    iconColor: 'text-tertiary',
    cardGradient: 'from-tertiary/5 to-transparent',
    dotColor: 'bg-tertiary',
    description: 'Soft, chewy pieces for a gentle bite',
    items: ['Mango Mochi', 'Strawberry Mochi', 'Matcha Mochi', 'Mini marshmallows'],
  },
  {
    title: 'Sauces',
    icon: 'water_drop',
    iconBg: 'bg-gradient-to-br from-primary/20 to-primary/5',
    iconColor: 'text-primary',
    cardGradient: 'from-primary/5 to-transparent',
    dotColor: 'bg-primary',
    description: 'Pour over a swirl for an extra layer of flavour',
    items: [
      'Biscoff sauce',
      'Nutella sauce',
      'Chocolate sauce',
      'Pistachio sauce',
      'Bueno sauce',
    ],
  },
]

function ToppingItem({ item, dotColor, isVisible, delay }) {
  return (
    <li
      className={`group/item flex h-6 items-center gap-3 text-body-md leading-6 text-on-surface-variant transition-all duration-500 hover:translate-x-2 hover:text-on-surface ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 group-hover:scale-150 ${dotColor}`}
      />
      <span className="truncate">{item}</span>
      <span
        aria-hidden
        className="inline-flex h-6 w-0 shrink-0 items-center overflow-hidden whitespace-nowrap text-lg leading-none opacity-0 transition-all duration-200 group-hover/item:w-7 group-hover/item:opacity-100"
        style={{
          fontFamily:
            '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", emoji, sans-serif',
        }}
      >
        {toppingEmojis[item] || '🍨'}
      </span>
    </li>
  )
}

export default function ToppingsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [fallingToppings, setFallingToppings] = useState([])

  // Collect all topping items
  const allToppings = toppingCategories.flatMap((category) => [
    ...category.items,
    ...(category.sections?.flatMap((section) => section.items) ?? []),
  ])

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
      <section id="toppings">
      <div className="mx-auto max-w-[1200px] px-4 pb-12 pt-16 md:px-16 md:pb-24 md:pt-20">
        <div className="mb-8 md:mb-10">
          <h2 className="flex items-center gap-2 text-headline-lg text-on-background">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              restaurant
            </span>
            Toppings Bar
          </h2>
          <p className="mt-2 max-w-2xl text-body-md text-on-surface-variant">
            Elevate your swirl with our hand-curated selection of premium toppings,
            prepared fresh in-house every morning.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {toppingCategories.map(
            ({ title, icon, iconBg, iconColor, cardGradient, dotColor, description, items, sections }, index) => (
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
                  <h3 className="mb-2 text-headline-lg text-on-surface transition-colors duration-300 group-hover:text-primary">
                    {title}
                  </h3>

                  <p className="mb-6 text-body-md text-on-surface-variant">
                    {description}
                  </p>

                  {/* Divider */}
                  <div className="mb-6 h-px bg-gradient-to-r from-transparent via-outline-variant to-transparent" />

                  {/* Items List */}
                  <ul className="flex flex-col gap-3">
                    {items.map((item, itemIndex) => (
                      <ToppingItem
                        key={item}
                        item={item}
                        dotColor={dotColor}
                        isVisible={isVisible}
                        delay={index * 150 + itemIndex * 50}
                      />
                    ))}
                  </ul>

                  {sections?.map((section, sectionIndex) => (
                    <div key={section.title} className="mt-6">
                      <h4 className={`mb-3 text-label-bold uppercase tracking-wide ${iconColor}`}>
                        {section.title}
                      </h4>
                      <ul className="flex flex-col gap-3">
                        {section.items.map((item, itemIndex) => (
                          <ToppingItem
                            key={item}
                            item={item}
                            dotColor={dotColor}
                            isVisible={isVisible}
                            delay={index * 150 + (items.length + sectionIndex) * 50 + itemIndex * 50}
                          />
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Hover Accent Line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${dotColor}`} />
                </div>
              </div>
            ),
          )}
        </div>

        <MenuAvailabilityNote className="mx-auto mt-12 max-w-3xl" />

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
      </section>
    </>
  )
}
