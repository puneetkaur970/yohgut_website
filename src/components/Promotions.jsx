const OFFERS = [
  {
    id: 'happy-hour',
    title: 'Happy Hour',
    badge: 'Daily · 3–5 PM',
    description: 'Enjoy 20% off from 3PM to 5PM every day',
    icon: 'schedule',
    panelClass: 'bg-secondary-fixed',
    iconBg: 'bg-secondary-container/30',
    iconColor: 'text-secondary',
    titleColor: 'text-secondary',
    textColor: 'text-on-secondary-fixed',
    badgeClass: 'bg-secondary/10 text-secondary',
  },
  {
    id: 'loyalty-program',
    title: 'Loyalty Program',
    badge: '10 visits = free cup',
    description:
      'Earn points with every purchase and get a free cup after 10 visits',
    icon: 'loyalty',
    panelClass: 'bg-primary-fixed',
    iconBg: 'bg-primary-container/20',
    iconColor: 'text-primary',
    titleColor: 'text-primary',
    textColor: 'text-on-primary-fixed',
    badgeClass: 'bg-primary/10 text-primary',
  },
]

export default function Promotions() {
  return (
    <section className="mt-12 md:mt-16" aria-labelledby="promotions-heading">
      <div className="overflow-hidden rounded-[48px] yogurt-shadow">
        <div className="border-b border-surface-variant/60 bg-surface-container-low px-8 py-8 text-center md:px-16 md:py-10 md:text-left">
          <h2 id="promotions-heading" className="text-headline-lg text-on-background">
            Rewards &amp; Offers
          </h2>
        </div>

        <div className="grid grid-cols-1 divide-y divide-surface-variant/40 md:grid-cols-2 md:divide-x md:divide-y-0">
          {OFFERS.map(
            ({
              id,
              title,
              badge,
              description,
              icon,
              panelClass,
              iconBg,
              iconColor,
              titleColor,
              textColor,
              badgeClass,
            }) => (
              <article
                key={id}
                className={`flex flex-col gap-5 px-8 py-10 md:px-16 md:py-12 ${panelClass}`}
                aria-labelledby={`${id}-heading`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
                >
                  <span
                    className={`material-symbols-outlined text-2xl ${iconColor}`}
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden
                  >
                    {icon}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-label-bold uppercase tracking-wide ${badgeClass}`}
                  >
                    {badge}
                  </span>
                  <h3
                    id={`${id}-heading`}
                    className={`text-headline-lg ${titleColor}`}
                  >
                    {title}
                  </h3>
                  <p className={`text-body-md ${textColor}`}>{description}</p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
