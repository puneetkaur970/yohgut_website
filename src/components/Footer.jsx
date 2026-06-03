const footerLinks = {
  Shop: ['Locations', 'Gift Cards', 'Catering'],
  Company: ['Privacy Policy', 'Terms of Service', 'Sustainability'],
}

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/30 bg-surface-container-lowest">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between px-4 py-12 md:flex-row md:px-16">
        <div className="mb-8 flex flex-col items-center md:mb-0 md:items-start">
          <div className="mb-4 text-headline-lg font-bold text-primary">YohGut</div>
          <p className="max-w-xs text-center text-body-sm text-on-surface-variant md:text-left">
            © 2026 YohGut Sunbury. Artisanal Frozen Yogurt. Crafted with love in
            Melbourne.
          </p>
        </div>
        <div className="flex flex-col gap-12 text-center md:flex-row md:text-left">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h5 className="mb-4 text-label-bold uppercase tracking-widest text-on-surface">
                {heading}
              </h5>
              <nav className="flex flex-col gap-2">
                {links.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="text-body-sm text-on-surface-variant transition-colors hover:text-primary"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}
