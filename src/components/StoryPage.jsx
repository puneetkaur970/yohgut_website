import { STORY_IMAGES } from '../constants/images'

const values = [
  {
    icon: 'eco',
    title: 'Tasty & Healthy',
    description:
      'Every swirl is crafted to be genuinely delicious without compromise—light, refreshing frozen yoghurt made with wholesome ingredients you can feel good about.',
    iconClass: 'bg-secondary-container/20 text-secondary',
  },
  {
    icon: 'restaurant',
    title: 'Built on Passion',
    description:
      'This shop was born from a lifelong dream of doing something of my own in the food industry—turning that passion into a place where every cup is poured with purpose.',
    iconClass: 'bg-primary-container/20 text-primary',
  },
  {
    icon: 'favorite',
    title: 'A Personal Promise',
    description:
      'As a founder, my promise is simple: I will never serve anything I would not proudly share with my own family.',
    iconClass: 'bg-tertiary-container/20 text-tertiary',
  },
]

function StoryCardImage({ src, alt, scaled }) {
  return (
    <div className="mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${scaled ? 'scale-110' : ''}`}
      />
    </div>
  )
}

function StoryCard({ image, imageAlt, scaled, icon, title, primary, children }) {
  return (
    <article
      className={`transform rounded-[32px] border border-surface-container bg-white p-8 transition-transform duration-500 ${
        primary ? 'shadow-lg hover:rotate-1' : 'shadow-sm hover:-rotate-1'
      }`}
    >
      <StoryCardImage src={image} alt={imageAlt} scaled={scaled} />
      <StoryCardHeading icon={icon} title={title} primary={primary} />
      <p className="mt-2 text-on-surface-variant">{children}</p>
    </article>
  )
}

function StoryCardHeading({ icon, title, primary }) {
  return (
    <div className={`flex items-center gap-3 ${primary ? 'text-primary' : ''}`}>
      <span className={`material-symbols-outlined ${primary ? '' : 'text-secondary'}`}>
        {icon}
      </span>
      <h3
        className="text-2xl font-semibold text-on-surface"
        style={{ fontFamily: 'var(--font-headline)' }}
      >
        {title}
      </h3>
    </div>
  )
}

function HeroCopy() {
  return (
    <div className="relative z-20 max-w-2xl">
      <span className="mb-6 block text-label-bold uppercase tracking-[0.2em] text-primary">
        Our Origin Story
      </span>
      <h1 className="mb-8 text-headline-xl text-on-surface md:text-[64px] md:leading-[1.1]">
        A Passion for Food, <br />
        <span className="text-gradient-soft">Swirled into Reality</span>
      </h1>
      <p className="mb-10 text-body-md leading-relaxed text-on-surface-variant">
        I always had a passion for doing something of my own in the food industry—a dream of
        building a place where flavour and wellbeing could share the same cup. That vision
        became YohGut: a shop dedicated to tasty, healthy frozen yoghurt, crafted with care
        and served with the warmth of a neighbourhood gathering spot.
      </p>
      <div className="flex items-center gap-4">
        <div className="h-px w-12 bg-outline" />
        <span className="font-medium italic text-on-surface-variant">
          Est. Sunbury, 2026
        </span>
      </div>
    </div>
  )
}

function SketchSection() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-headline-lg text-on-surface">From Dream to Shop</h2>
        <p className="mx-auto max-w-xl text-on-surface-variant">
          Tracing the journey from a personal passion in food to a welcoming space for
          wholesome frozen yoghurt.
        </p>
      </div>
      <div className="grid items-center gap-8 md:grid-cols-2">
        <StoryCard
          image={STORY_IMAGES.heroDream}
          imageAlt="The original vision"
          scaled
          icon="edit_note"
          title="The Vision"
        >
          For years, the idea lived in notebooks and late-night conversations—a shop of my
          own where frozen yoghurt could be both indulgent and nourishing, rooted in real
          ingredients and honest craft.
        </StoryCard>
        <StoryCard
          image={STORY_IMAGES.shopReality}
          imageAlt="YohGut shop"
          icon="storefront"
          title="The Reality"
          primary
        >
          YohGut brought that dream to life in Sunbury—a bright, welcoming corner where
          every swirl celebrates the balance of taste and health we set out to create.
        </StoryCard>
      </div>
    </div>
  )
}

function FounderSection() {
  return (
    <div className="flex flex-col items-center gap-16 md:flex-row">
      <div className="relative w-full md:w-1/2">
        <div className="absolute -inset-4 z-0 rounded-[48px] bg-secondary-fixed/30 blur-2xl" />
        <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl">
          <img
            src={STORY_IMAGES.founder}
            alt="Founder at YohGut"
            className="h-full w-full object-cover"
          />
        </div>
        <FounderBadge />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="mb-8 text-headline-xl leading-tight text-on-surface">
          Healthy, Tasty, &amp; <br />
          Made with <span className="text-tertiary">Heart</span>
        </h2>
        <ul className="space-y-6">
          {values.map(({ icon, title, description, iconClass }) => (
            <li key={title} className="flex gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconClass}`}
              >
                <span className="material-symbols-outlined">{icon}</span>
              </div>
              <ValueItem title={title} description={description} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function FounderBadge() {
  return (
    <div className="absolute -bottom-8 -right-8 z-20 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-primary p-8 text-center text-on-primary shadow-xl">
      <span className="mb-1 text-xs font-bold uppercase tracking-widest">Hand Crafted</span>
      <span
        className="text-2xl font-semibold"
        style={{ fontFamily: 'var(--font-headline)' }}
      >
        With Love
      </span>
    </div>
  )
}

function ValueItem({ title, description }) {
  return (
    <div>
      <h4 className="mb-1 text-lg font-bold text-on-surface">{title}</h4>
      <p className="text-on-surface-variant">{description}</p>
    </div>
  )
}

function CommunitySection() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-label-bold text-primary shadow-sm">
        <span className="material-symbols-outlined text-[16px]">location_on</span>
        Sunbury&apos;s Living Room
      </div> */}
      <h2 className="mb-6 text-headline-xl text-on-surface">Our Roots Run Deep</h2>
      <p className="mb-12 text-body-md leading-relaxed text-on-surface-variant">
        We did not just choose Sunbury—we grew up with it. Our shop was designed as an
        intimate extension of your own home, a village lounge where neighbours become friends
        and every visit feels like a warm embrace. Whether it is a quiet morning treat or a
        celebratory evening swirl, we are honoured to be part of your daily rhythm.
      </p>
      <CommunityAcknowledgement />
    </div>
  )
}

function CommunityAcknowledgement() {
  return (
    <div className="border-t border-outline-variant/30 pt-12">
      <span className="material-symbols-outlined mb-4 text-tertiary/60">park</span>
      <p className="mx-auto max-w-2xl text-body-sm italic text-on-surface-variant">
        Every ingredient we source, every cup we serve, and every smile we share is a reflection
        of our commitment to this community. We believe in sustainable practices, supporting
        local farmers, and creating a space where everyone feels at home.
      </p>
    </div>
  )
}

function StoryCta() {
  return (
    <div className="relative w-full max-w-5xl overflow-hidden rounded-[48px] bg-primary p-12 text-center text-on-primary shadow-2xl md:p-20">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <h2 className="relative z-10 mb-6 text-headline-xl">Be Part of the Story</h2>
      <p className="relative z-10 mx-auto mb-10 max-w-xl text-body-md text-on-primary-container">
        Come visit our little corner of Sunbury and taste the dream that started with a
        passion for food and a belief that healthy can be delicious.
      </p>
      <div className="relative z-10 flex flex-col justify-center gap-4 md:flex-row">
        <a
          href="#contact"
          className="squish rounded-full bg-white px-10 py-4 text-label-bold text-primary shadow-lg"
        >
          Find Our Shop
        </a>
        <a
          href="#menu"
          className="squish rounded-full border border-on-primary/20 bg-primary-container px-10 py-4 text-label-bold text-on-primary-container"
        >
          Explore Flavors
        </a>
      </div>
    </div>
  )
}

export default function StoryPage() {
  return (
    <main id="story" className="overflow-x-hidden pb-12 md:pb-0">
      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-4 py-16 md:px-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
          <img
            src={STORY_IMAGES.heroDream}
            alt="The dream behind YohGut"
            className="h-full w-full object-cover object-right opacity-60 md:opacity-100"
          />
        </div>
        <HeroCopy />
      </section>

      <section className="bg-surface-container-low px-4 py-24 md:px-16">
        <SketchSection />
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-24 md:px-16">
        <FounderSection />
      </section>

      <section className="bg-surface-container-highest px-4 py-24">
        <CommunitySection />
      </section>

      <section className="flex flex-col items-center px-4 py-24">
        <StoryCta />
      </section>
    </main>
  )
}
