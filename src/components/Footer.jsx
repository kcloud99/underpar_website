import { Link } from 'react-router-dom'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const links = [
        { label: 'Methodology', href: '/methodology' },
        { label: 'The Partners', href: '/partners' },
        { label: 'Blog', href: '/blog' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
    ]

    return (
        <footer className="bg-deep-forest border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12 py-12 md:py-16 max-w-screen-2xl mx-auto gap-8">
                {/* Brand */}
                <div className="flex flex-col gap-4 items-center md:items-start text-gallery-white">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-lg font-headline italic text-primary-fixed"
                    >
                        <img
                            src="/lc_logo.png"
                            alt=""
                            className="w-6 h-6 object-contain opacity-90"
                        />
                        Looper &amp; Co.
                    </Link>
                    <p className="text-xs font-body uppercase tracking-[0.05em] text-gallery-white/40">
                        &copy; {currentYear} Looper &amp; Co. Precision in Automation.
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {links.map((l) => (
                        <Link
                            key={l.label}
                            to={l.href}
                            className="text-xs font-body uppercase tracking-[0.05em] text-gallery-white/40 hover:text-primary-fixed transition-colors duration-300"
                        >
                            {l.label}
                        </Link>
                    ))}
                </div>

                {/* Email */}
                <div className="flex flex-col items-center md:items-end gap-3">
                    <a
                        href="mailto:hello@looperandco.com"
                        className="text-xs font-body tracking-[0.05em] text-gallery-white/40 hover:text-primary-fixed transition-colors duration-300"
                    >
                        hello@looperandco.com
                    </a>
                    <a
                        href="mailto:hello@looperandco.com"
                        className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-primary-fixed hover:bg-primary-fixed hover:text-deep-forest transition-all duration-300"
                    >
                        <span className="material-symbols-outlined">mail</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
