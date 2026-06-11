import { CONTACT } from '../constants/contact'
import careersImage from '../assets/careers.webp'

const benefits = [
  {
    icon: 'groups',
    title: 'Team Culture',
    description: 'Join a friendly, supportive team that feels like family. We celebrate wins together and support each other through challenges.',
  },
  {
    icon: 'school',
    title: 'Growth Opportunities',
    description: 'Learn new skills, develop your talents, and grow your career with us. We invest in our people.',
  },
  {
    icon: 'emoji_events',
    title: 'Recognition & Rewards',
    description: 'Your hard work gets noticed. We celebrate achievements and reward outstanding performance.',
  },
]

const qualities = [
  {
    icon: 'sentiment_satisfied',
    title: 'Positive Attitude',
    description: 'A smile goes a long way. We love people who bring good energy to work.',
  },
  {
    icon: 'handshake',
    title: 'Team Player',
    description: 'Collaboration is key. We work together to create the best experience for our customers.',
  },
  {
    icon: 'volunteer_activism',
    title: 'Customer Focus',
    description: 'Putting customers first and going the extra mile to make their day special.',
  },
  {
    icon: 'bolt',
    title: 'Eager to Learn',
    description: 'Whether you&apos;re experienced or just starting out, a willingness to grow is what matters.',
  },
]

const dayInLife = [
  {
    icon: 'icecream',
    title: 'Craft Delicious Treats',
    description: 'Master the art of serving perfect swirls and creating beautiful frozen yoghurt combinations.',
  },
  {
    icon: 'restaurant',
    title: 'Prepare Fresh Toppings',
    description: 'Help prepare our famous scratch toppings bar with fresh fruits and premium ingredients.',
  },
  {
    icon: 'support_agent',
    title: 'Delight Customers',
    description: 'Create memorable experiences by helping customers discover their perfect flavour combinations.',
  },
  {
    icon: 'cleaning_services',
    title: 'Maintain Excellence',
    description: 'Keep our space sparkling clean and inviting—because presentation matters.',
  },
]

function CareersHero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={careersImage}
          alt="YohGut team members working together in the store"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>
      <div className="relative z-20 mx-auto w-full max-w-[1200px] px-4 pb-12 md:px-16 md:pb-16">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
            Join Our Team of Frozen Happiness Makers
          </h1>
          <p className="mb-6 max-w-lg text-lg font-medium text-white drop-shadow-md">
            Be part of something delicious. We&apos;re looking for passionate people 
            who love creating smiles and serving up gut-friendly goodness.
          </p>
        </div>
      </div>
    </section>
  )
}

function WhyJoinSection() {
  return (
    <section className="bg-surface-container-low px-4 py-24 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-label-bold uppercase tracking-[0.2em] text-primary">
            Why YohGut?
          </span>
          <h2 className="mb-4 text-headline-lg text-on-surface">
            More Than Just a Job
          </h2>
          <p className="mx-auto max-w-2xl text-on-surface-variant">
            At YohGut, we believe in creating a workplace where everyone thrives. 
            We&apos;re not just serving frozen yoghurt—we&apos;re building a community 
            of passionate people who love what they do.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon, title, description }) => (
            <article
              key={title}
              className="flex flex-col rounded-[24px] border border-surface-container bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/20">
                <span className="material-symbols-outlined text-[24px] text-primary">
                  {icon}
                </span>
              </div>
              <h3
                className="mb-2 text-lg font-semibold text-on-surface"
                style={{ fontFamily: 'var(--font-headline)' }}
              >
                {title}
              </h3>
              <p className="text-body-md text-on-surface-variant">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatWeLookFor() {
  return (
    <section className="px-4 py-24 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-label-bold uppercase tracking-[0.2em] text-secondary">
            Ideal Candidates
          </span>
          <h2 className="mb-4 text-headline-lg text-on-surface">
            What We Look For
          </h2>
          <p className="mx-auto max-w-2xl text-on-surface-variant">
            No experience? No problem! We value attitude over experience and provide 
            full training. Here&apos;s what makes a great YohGut team member.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {qualities.map(({ icon, title, description }) => (
            <article key={title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                <span
                  className="material-symbols-outlined text-[32px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {icon}
                </span>
              </div>
              <h3
                className="mb-2 text-lg font-semibold text-on-surface"
                style={{ fontFamily: 'var(--font-headline)' }}
              >
                {title}
              </h3>
              <p className="text-body-md text-on-surface-variant">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function DayInLife() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 px-4 py-24 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <span className="mb-4 block text-label-bold uppercase tracking-[0.2em] text-tertiary">
            What You&apos;ll Do
          </span>
          <h2 className="mb-4 text-headline-lg text-on-surface">
            A Day in the Life
          </h2>
          <p className="mx-auto max-w-2xl text-on-surface-variant">
            Every day is different, but always delicious. Here&apos;s a taste of 
            what you can expect when you join the YohGut team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {dayInLife.map(({ icon, title, description }, index) => (
            <article
              key={title}
              className="flex items-start gap-4 rounded-[24px] bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tertiary-container/30">
                <span className="material-symbols-outlined text-[24px] text-tertiary">
                  {icon}
                </span>
              </div>
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-on-primary">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-on-surface">{title}</h3>
                </div>
                <p className="text-body-md text-on-surface-variant">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HiringSection() {
  return (
    <section id="open-positions" className="px-4 py-24 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="overflow-hidden rounded-[48px] bg-white shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                Now Hiring
              </div>
              <h2 className="mb-4 text-headline-lg text-on-surface">
                We&apos;re Growing Our Team!
              </h2>
              <p className="mb-6 text-on-surface-variant">
                We&apos;re always on the lookout for enthusiastic individuals to join our 
                YohGut family. Whether you&apos;re seeking part-time work, a full-time 
                career, or your first job—we&apos;d love to meet you.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Full training provided—no experience necessary
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Flexible scheduling for all lifestyles
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Opportunities for growth and advancement
                </li>
                <li className="flex items-center gap-3 text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Fun, supportive team environment
                </li>
              </ul>
              <p className="text-body-md font-medium text-on-surface">
                Ready to scoop up a great opportunity?
              </p>
            </div>
            <div className="flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/10 to-tertiary/10 p-8 md:p-12">
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                <span
                  className="material-symbols-outlined text-[48px] text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  work
                </span>
              </div>
              <h3 className="mb-2 text-center text-xl font-semibold text-on-surface">
                Apply Today
              </h3>
              <p className="mb-8 max-w-sm text-center text-on-surface-variant">
                Send us your details and tell us a bit about yourself. We&apos;ll be in touch!
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={CONTACT.phone.href}
                  className="squish flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-label-bold text-on-primary shadow-lg transition-transform hover:scale-105"
                >
                  <span className="material-symbols-outlined">call</span>
                  {CONTACT.phone.display}
                </a>
                <a
                  href={CONTACT.email.href}
                  className="squish flex items-center justify-center gap-3 rounded-full border-2 border-primary bg-white px-8 py-4 text-label-bold text-primary transition-transform hover:scale-105"
                >
                  <span className="material-symbols-outlined">mail</span>
                  {CONTACT.email.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="bg-surface-container-low px-4 py-24 md:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-6 block text-label-bold uppercase tracking-[0.2em] text-primary">
          From Our Team
        </span>
        <blockquote className="mb-8">
          <p className="text-2xl font-medium leading-relaxed text-on-surface md:text-3xl">
            &ldquo;Working at YohGut feels like being part of a family. Every day I get 
            to make people smile with delicious frozen yoghurt, and I couldn&apos;t 
            ask for better teammates.&rdquo;
          </p>
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container">
            <span className="material-symbols-outlined text-primary">person</span>
          </div>
          <div className="text-left">
            <p className="font-semibold text-on-surface">Team Member</p>
            <p className="text-sm text-on-surface-variant">YohGut Sunbury</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCta() {
  return (
    <section className="flex flex-col items-center px-4 py-24">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[48px] bg-primary p-12 text-center text-on-primary shadow-2xl md:p-20">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <h2 className="relative z-10 mb-6 text-headline-xl">
          Ready to Start Your Journey?
        </h2>
        <p className="relative z-10 mx-auto mb-10 max-w-xl text-body-md text-on-primary-container">
          Don&apos;t wait—reach out today and take the first step toward joining the 
          YohGut family. We can&apos;t wait to meet you!
        </p>

        <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
          <a
            href={CONTACT.phone.href}
            className="squish flex items-center gap-3 rounded-full bg-white px-8 py-4 text-label-bold text-primary shadow-lg transition-transform hover:scale-105"
          >
            <span className="material-symbols-outlined">call</span>
            Call Us
          </a>
          <a
            href={CONTACT.email.href}
            className="squish flex items-center gap-3 rounded-full border border-on-primary/20 bg-primary-container px-8 py-4 text-label-bold text-on-primary-container transition-transform hover:scale-105"
          >
            <span className="material-symbols-outlined">mail</span>
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default function CareersPage() {
  return (
    <main id="careers" className="overflow-x-hidden pb-12 md:pb-0">
      <CareersHero />
      <WhyJoinSection />
      <WhatWeLookFor />
      <DayInLife />
      <HiringSection />
      <TestimonialSection />
      <ContactCta />
    </main>
  )
}
