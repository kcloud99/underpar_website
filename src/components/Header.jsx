import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const navLinks = [
        { label: 'Methodology', href: '/methodology' },
        { label: 'The Partners', href: '/partners' },
        { label: 'Blog', href: '/blog' },
    ]

    return (
        <header
            className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${scrolled
                ? 'bg-gallery-white/90 shadow-[0_1px_0_rgba(11,61,29,0.06)]'
                : 'bg-gallery-white/80'
                }`}
        >
            <nav className="flex justify-between items-center w-full px-6 md:px-12 py-5 max-w-screen-2xl mx-auto">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-headline italic tracking-tighter text-deep-forest"
                >
                    <img
                        src="/lc_logo.png"
                        alt="Looper & Co."
                        className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-sm"
                    />
                    {/* Looper &amp; Co. */}
                </Link>

                {/* Desktop nav links */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className={`font-body tracking-tight transition-colors duration-300 ${link.href === location.pathname
                                ? 'text-deep-forest font-bold border-b-2 border-primary-fixed pb-1'
                                : 'text-secondary hover:text-deep-forest'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    {/* CTA */}
                    <Link
                        to="/#contact"
                        className="bg-deep-forest text-white px-6 md:px-8 py-2.5 font-label uppercase tracking-[0.05em] text-xs font-bold rounded-sm hover:opacity-90 transition-all active:scale-95 duration-200"
                    >
                        Inquire
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex items-center justify-center w-10 h-10 text-deep-forest cursor-pointer"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span className="material-symbols-outlined text-2xl">
                            {menuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed inset-0 top-[72px] bg-gallery-white z-40 transition-all duration-300 ${menuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col px-6 py-8 gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="font-headline text-3xl text-deep-forest py-4 border-b border-deep-forest/10 hover:text-deep-forest/70 transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/#contact"
                        className="bg-deep-forest text-white px-8 py-4 font-label uppercase tracking-[0.1em] text-sm font-bold rounded-sm text-center mt-6 hover:opacity-90 transition-all duration-200"
                    >
                        Inquire
                    </Link>
                </div>
            </div>
        </header>
    )
}
