import { CONTACT } from '../constants/contact'
import contactImage from '../assets/contact.webp'

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=58+Oshanassy+St,+Sunbury+VIC+3429,+Australia&z=15&output=embed'

const contactItems = [
  {
    icon: 'location_on',
    title: 'Visit Us',
    iconClass: 'bg-primary-container/20 text-primary',
    content: (
      <>
        <p className="font-medium text-on-surface">{CONTACT.address.line1}</p>
        <p className="text-on-surface-variant">{CONTACT.address.line2}</p>
      </>
    ),
    href: CONTACT.address.mapsUrl,
    linkLabel: 'Get Directions',
    external: true,
  },
  {
    icon: 'call',
    title: 'Call Us',
    iconClass: 'bg-secondary-container/20 text-secondary',
    content: <p className="font-medium text-on-surface">{CONTACT.phone.display}</p>,
    href: CONTACT.phone.href,
    linkLabel: 'Call Now',
  },
  {
    icon: 'mail',
    title: 'Email Us',
    iconClass: 'bg-tertiary-container/20 text-tertiary',
    content: <p className="font-medium text-on-surface">{CONTACT.email.display}</p>,
    href: CONTACT.email.href,
    linkLabel: 'Send Email',
  },
]

function ContactCardIcon({ icon, iconClass }) {
  return (
    <div
      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-full ${iconClass}`}
    >
      <span className="material-symbols-outlined text-[28px]">{icon}</span>
    </div>
  )
}

function ContactCard({ icon, title, iconClass, content, href, linkLabel, external }) {
  return (
    <article className="flex h-full flex-col rounded-[32px] border border-surface-container bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1">
      <ContactCardIcon icon={icon} iconClass={iconClass} />
      <h3
        className="mb-3 text-2xl font-semibold text-on-surface"
        style={{ fontFamily: 'var(--font-headline)' }}
      >
        {title}
      </h3>
      <div className="mb-6 flex-1 text-body-md">{content}</div>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="squish inline-flex items-center gap-2 text-label-bold text-primary transition-colors hover:text-primary-container"
      >
        {linkLabel}
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </a>
    </article>
  )
}

function ContactHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={contactImage}
          alt="YohGut team member ready to help"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 pb-12 md:px-16 md:pb-16">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
            We&apos;d Love to Hear From You
          </h1>
          <p className="mb-6 max-w-lg text-lg font-medium text-white drop-shadow-md">
            Whether you have a question about our flavours, want to plan a visit, or simply
            want to say hello—reach out anytime. We&apos;re always happy to swirl up something
            special for you.
          </p>
        </div>
      </div>
    </section>
  )
}

function ContactSectionHeader() {
  return (
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-headline-lg text-on-surface">
        Get in Touch (For Franchise Enquiry)
      </h2>
      <p className="mx-auto max-w-xl text-on-surface-variant">
        Visit our shop, give us a call, or drop us an email—we&apos;re here to help.
      </p>
    </div>
  )
}

function MapSection() {
  return (
    <section className="px-4 py-16 md:px-16">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[32px] border border-surface-container bg-white shadow-sm">
        <div className="flex flex-col items-center justify-between gap-6 p-8 md:flex-row md:p-12">
          <div className="text-center md:text-left">
            <h2 className="mb-2 text-headline-lg text-on-surface">Find Us on the Map</h2>
            <p className="max-w-md text-body-md text-on-surface-variant">
              {CONTACT.address.full}
            </p>
          </div>
          <a
            href={CONTACT.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="squish flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-label-bold text-on-primary shadow-lg"
          >
            <span className="material-symbols-outlined">map</span>
            Open in Google Maps
          </a>
        </div>
        <div className="aspect-[21/9] w-full bg-surface-container">
          <iframe
            title="YohGut location on Google Maps"
            src={MAP_EMBED_URL}
            className="h-full w-full border-0 grayscale-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

function ContactCta() {
  return (
    <div className="relative w-full max-w-5xl overflow-hidden rounded-[48px] bg-primary p-12 text-center text-on-primary shadow-2xl md:p-20">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <h2 className="relative z-10 mb-6 text-headline-xl">Ready for a Swirl?</h2>
      <p className="relative z-10 mx-auto mb-10 max-w-xl text-body-md text-on-primary-container">
        Stop by our Sunbury shop and discover tasty, healthy frozen yoghurt made with love.
      </p>
      <div className="relative z-10 flex flex-col justify-center gap-4 md:flex-row">
        <a
          href={CONTACT.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="squish rounded-full bg-white px-10 py-4 text-label-bold text-primary shadow-lg"
        >
          Get Directions
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

export default function ContactPage() {
  return (
    <main id="contact" className="overflow-x-hidden pb-12 md:pb-0">
      <ContactHero />

      <section id="contact-cards" className="bg-surface-container-low px-4 py-24 md:px-16">
        <div className="mx-auto max-w-[1200px]">
          <ContactSectionHeader />
          <div className="grid gap-8 md:grid-cols-3">
            {contactItems.map((item) => (
              <ContactCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <MapSection />

      <section className="flex flex-col items-center px-4 py-24">
        <ContactCta />
      </section>
    </main>
  )
}
