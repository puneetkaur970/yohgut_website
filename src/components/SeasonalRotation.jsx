import { IMAGES } from '../constants/images'
import FlavorCarousel from './FlavorCarousel'
import yummyLeftImage from '../assets/yummy_left.webp'

const FLAVORS = [
  {
    name: 'Original Frozen Yoghurt',
    subtitle: '',
    icon: 'star',
    iconBg: 'bg-secondary-fixed',
    iconColor: 'text-secondary',
    dotColor: 'bg-secondary',
    featured: true,
  }
]

const featuredFlavor = FLAVORS.find((f) => f.featured)

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

        <article className="group relative overflow-hidden rounded-[32px] bg-surface-container yogurt-shadow md:col-span-6">
          <img
            alt={`YohGut ${featuredFlavor.name} frozen yogurt`}
            className="h-full min-h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={IMAGES.wildBerrySwirl}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <img
            src={yummyLeftImage}
            alt="Yummy"
            className="absolute left-[95%] top-[25%] w-32 -translate-x-1/2 -translate-y-1/2 animate-wave"
            loading="lazy"
            decoding="async"
            style={{
              animation: 'wave 2s ease-in-out infinite',
              transformOrigin: 'center bottom',
            }}
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

        <article className="flex flex-col justify-center gap-6 overflow-hidden rounded-[32px] bg-gradient-to-br from-primary-fixed via-secondary-fixed to-tertiary-fixed p-8 yogurt-shadow md:col-span-6 md:p-10">
          <div className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-5xl text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <h3 className="text-headline-lg text-on-primary-fixed">
              Why YohGut?
            </h3>
          </div>

          <div className="space-y-5">
            <div className="group/card flex items-start gap-4 rounded-2xl bg-white/40 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:shadow-lg">
              <span
                className="material-symbols-outlined mt-1 text-3xl text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                spa
              </span>
              <div>
                <h4 className="mb-1 font-semibold text-on-primary-fixed">
                  Live Probiotics in Every Bite
                </h4>
                <p className="text-body-sm text-on-primary-fixed/80">
                  Billions of friendly cultures for your gut health
                </p>
              </div>
            </div>

            <div className="group/card flex items-start gap-4 rounded-2xl bg-white/40 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:shadow-lg">
              <span
                className="material-symbols-outlined mt-1 text-3xl text-tertiary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                energy_savings_leaf
              </span>
              <div>
                <h4 className="mb-1 font-semibold text-on-primary-fixed">
                  Farm-Fresh Ingredients
                </h4>
                <p className="text-body-sm text-on-primary-fixed/80">
                  Locally sourced, made fresh daily with real fruit
                </p>
              </div>
            </div>

            <div className="group/card flex items-start gap-4 rounded-2xl bg-white/40 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:shadow-lg">
              <span
                className="material-symbols-outlined mt-1 text-3xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                ecg_heart
              </span>
              <div>
                <h4 className="mb-1 font-semibold text-on-primary-fixed">
                  Guilt-Free Indulgence
                </h4>
                <p className="text-body-sm text-on-primary-fixed/80">
                  Lower in calories, higher in happiness
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <div className="mt-12 md:mt-16">
        <FlavorCarousel />
      </div>
    </div>
  )
}
