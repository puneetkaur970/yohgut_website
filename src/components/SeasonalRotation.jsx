import { IMAGES } from '../constants/images'
import FlavorCarousel from './FlavorCarousel'

const FLAVORS = [
  {
    name: 'Coconut',
    icon: 'water_drop',
    iconBg: 'bg-tertiary-fixed',
    iconColor: 'text-tertiary',
    dotColor: 'bg-tertiary',
  },
  {
    name: 'Mango',
    icon: 'nutrition',
    iconBg: 'bg-secondary-fixed',
    iconColor: 'text-secondary',
    dotColor: 'bg-secondary',
  },
  {
    name: 'Strawberry',
    icon: 'nutrition',
    iconBg: 'bg-primary-fixed',
    iconColor: 'text-primary',
    dotColor: 'bg-primary',
  },
  {
    name: 'Vanilla',
    icon: 'icecream',
    iconBg: 'bg-surface-container-high',
    iconColor: 'text-on-surface-variant',
    dotColor: 'bg-on-surface-variant',
  },
  {
    name: 'Original Frozen Yoghurt',
    subtitle: '',
    icon: 'star',
    iconBg: 'bg-secondary-fixed',
    iconColor: 'text-secondary',
    dotColor: 'bg-secondary',
    featured: true,
  },
  {
    name: 'Original',
    subtitle: 'Classic Signature',
    icon: 'star',
    iconBg: 'bg-secondary-fixed',
    iconColor: 'text-secondary',
    dotColor: 'bg-secondary',
  },
  {
    name: 'Chocolate',
    icon: 'cookie',
    iconBg: 'bg-tertiary-fixed',
    iconColor: 'text-tertiary',
    dotColor: 'bg-tertiary',
  },
  {
    name: 'Acai',
    icon: 'eco',
    iconBg: 'bg-primary-fixed',
    iconColor: 'text-primary',
    dotColor: 'bg-primary',
  },
]

const featuredFlavor = FLAVORS.find((f) => f.featured)
const otherFlavors = FLAVORS.filter((f) => !f.featured)

export default function SeasonalRotation() {
  return (
    <div className="mb-20">
      <section className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="mb-4 md:col-span-12">
          <h2 className="flex items-center gap-2 text-headline-lg text-on-background">
            <span
              className="material-symbols-outlined text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
            Seasonal Rotation
          </h2>
          <p className="mt-2 text-body-md text-on-surface-variant">
            Small batch frozen yogurt flavors, crafted daily with premium
            probiotics and locally sourced ingredients.
          </p>
        </div>

        <article className="group relative overflow-hidden rounded-[32px] bg-surface-container yogurt-shadow md:col-span-7">
          <img
            alt={`YohGut ${featuredFlavor.name} frozen yogurt`}
            className="h-full min-h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={IMAGES.wildBerrySwirl}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-8">
            <div className="glass-pill mb-3 w-fit rounded-full px-4 py-2">
              <span className="text-label-bold uppercase tracking-wider text-white">
                Classic Signature
              </span>
            </div>
            <h3 className="mb-2 text-headline-lg text-white">
              {featuredFlavor.name}
              {featuredFlavor.subtitle ? (
                <span className="font-body-md font-normal text-white/90">
                  {' '}
                  ({featuredFlavor.subtitle})
                </span>
              ) : null}
            </h3>
            <p className="max-w-md text-body-sm text-white/90">
              Our house classic—creamy, balanced, and the foundation every swirl
              starts from.
            </p>
          </div>
        </article>

        <article className="flex flex-col overflow-hidden rounded-[32px] bg-surface-container yogurt-shadow md:col-span-5">
          <div className="bg-secondary-fixed px-8 py-6">
            <h3 className="text-headline-lg text-on-secondary-fixed">Our Flavors</h3>
            <p className="mt-1 text-body-sm text-on-secondary-fixed/80">
              Pick your base, then build at the toppings bar.
            </p>
          </div>
          <ul className="flex flex-1 flex-col gap-3 bg-surface-container-highest p-5">
            {otherFlavors.map(
              ({ name, subtitle, icon, iconBg, iconColor, dotColor }) => (
                <li
                  key={name}
                  className="group/item flex items-center gap-4 rounded-2xl border border-surface-variant/50 bg-surface-container-low px-4 py-4 transition-all duration-200 hover:border-primary/20 hover:bg-surface-container hover:shadow-sm"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconBg} shadow-sm transition-transform duration-200 group-hover/item:scale-105`}
                  >
                    <span
                      className={`material-symbols-outlined text-2xl ${iconColor}`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {icon}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-body-md font-semibold text-on-surface">
                      {name}
                    </span>
                    {subtitle ? (
                      <p className="mt-0.5 text-body-sm text-on-surface-variant">
                        {subtitle}
                      </p>
                    ) : null}
                  </div>
                  <div className={`h-2 w-2 shrink-0 rounded-full ${dotColor} shadow-sm`} />
                </li>
              ),
            )}
          </ul>
        </article>
      </section>

      <div className="mt-12 md:mt-16">
        <FlavorCarousel />
      </div>
    </div>
  )
}
