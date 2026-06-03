import { useEffect, useState } from 'react'
import yohgutLogo from '../assets/yohgut_logo.jpeg'

const navLinks = [
  { label: 'Home', href: '#home', page: 'home' },
  { label: 'Story', href: '#story', page: 'story' },
  { label: 'Toppings', href: '#toppings', page: 'toppings' },
  { label: 'Contact', href: '#contact', page: 'contact' },
]

export default function Header({ activePage = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)
  const menuVisible = mobileMenuOpen || menuClosing

  const closeMenu = () => {
    if (menuClosing) return
    setMenuClosing(true)
  }

  const handleMenuAnimationEnd = (e) => {
    if (e.target !== e.currentTarget || !menuClosing) return
    setMobileMenuOpen(false)
    setMenuClosing(false)
  }

  useEffect(() => {
    if (!menuVisible) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [menuVisible])

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-surface/80 shadow-sm backdrop-blur-md">
        <div className="relative mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 md:px-16">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={yohgutLogo}
              alt=""
              aria-hidden="true"
              className="h-12 w-auto object-contain"
            />
            <div className="text-headline-lg font-bold text-primary">YohGut</div>
          </a>

          <nav className="hidden gap-8 md:flex" aria-label="Main">
            {navLinks.map(({ label, href, page }) => (
              <a
                key={label}
                href={href}
                className={
                  activePage === page
                    ? 'border-b-2 border-primary pb-1 text-label-bold font-bold text-primary transition-colors duration-200'
                    : 'text-label-bold font-medium text-on-surface-variant transition-colors duration-200 hover:text-primary-container'
                }
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-high"
              aria-expanded={menuVisible}
              aria-controls="mobile-nav-menu"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined text-[28px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {menuVisible && (
        <nav
          id="mobile-nav-menu"
          className={`fixed inset-0 z-[100] flex flex-col bg-surface px-6 pb-8 md:hidden ${
            menuClosing ? 'mobile-menu-panel--closing' : 'mobile-menu-panel'
          }`}
          aria-label="Mobile"
          onAnimationEnd={handleMenuAnimationEnd}
        >
          <div className="flex h-20 shrink-0 items-center justify-end">
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-high"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined text-[28px]">close</span>
            </button>
          </div>

          <div className="flex flex-1 flex-col">
            {navLinks.map(({ label, href, page }) => (
              <a
                key={label}
                href={href}
                className={
                  activePage === page
                    ? 'border-b border-outline-variant/20 py-5 text-headline-lg font-bold text-primary'
                    : 'border-b border-outline-variant/20 py-5 text-headline-lg font-medium text-on-surface-variant transition-colors hover:text-primary'
                }
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  )
}
