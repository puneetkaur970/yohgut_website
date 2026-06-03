const toppingCategories = [
  {
    title: 'Fresh Fruits',
    icon: 'nutrition',
    iconBg: 'bg-secondary-fixed',
    iconColor: 'text-secondary',
    dotColor: 'bg-secondary',
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
    iconBg: 'bg-tertiary-fixed',
    iconColor: 'text-tertiary',
    dotColor: 'bg-tertiary',
    items: ['Granola', 'Nuts', 'Biscoff', 'Cheerios', 'Jelly Belly'],
  },
  {
    title: 'Chocolatey',
    icon: 'cookie',
    iconBg: 'bg-primary-fixed',
    iconColor: 'text-primary',
    dotColor: 'bg-primary',
    items: [
      'Chocolate chips',
      'Chocolate wafers',
      'Mini oreos',
      "M&M's",
    ],
  },
]

export default function ToppingsBar() {
  return (
    <section className="rounded-[48px] bg-surface-container-low px-8 py-2 yogurt-shadow md:px-16">
      <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div className="max-w-xl">
          <h2 className="mb-4 text-headline-lg text-on-background">
            Scratch Toppings Bar
          </h2>
          <p className="text-body-md text-on-surface-variant">
            Elevate your swirl with our hand-curated selection of premium toppings,
            prepared fresh in-house every morning.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {toppingCategories.map(
          ({ title, icon, iconBg, iconColor, dotColor, items }) => (
            <div
              key={title}
              className="group rounded-[24px] border border-surface-variant bg-white p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
              >
                <span
                  className={`material-symbols-outlined text-2xl ${iconColor}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {icon}
                </span>
              </div>
              <h4 className="mb-4 text-headline-lg text-on-surface">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-body-md text-on-surface-variant"
                  >
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
      </div>
    </section>
  )
}
