import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const PARTNERS = [
    {
        name: 'Kyle McLeod',
        title: 'Founding Partner',
        image: '/kyle.png',
        bio: 'Kyle McLeod spent a decade in operations learning how businesses actually run, then spent the next decade building technology that makes them run better. As founder of Cloud99, he helps industrial and trades-driven businesses automate what slows them down, capture the knowledge that lives in people\u2019s heads, and build systems that simplify \u2014 turning messy, multi-step processes into streamlined tools that provide true value, not more overhead.',
    },
    {
        name: 'Jason Scarlett',
        title: 'Founding Partner',
        image: '/jason.jpeg',
        bio: 'Jason Scarlett is a seasoned business leader with three decades of experience in the luxury residential and commercial construction market. As a Founding Partner of Hewn Elements, he spent eleven years advising clients on custom, high-specification solutions \u2014 developing deep expertise in premium product positioning, complex project sales cycles, and the consultative client relationships that characterize high-end procurement. His career established a consistent track record of bringing sophisticated buyers and best-in-class products together in markets where trust, expertise, and precision execution are non-negotiable.',
    },
]

export default function PartnersPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-gallery-white pt-32 pb-16 md:pb-24 px-6 md:px-12">
                    <div className="max-w-screen-2xl mx-auto text-center flex flex-col items-center">
                        <span className="font-label text-xs uppercase tracking-[0.2em] text-deep-forest font-bold mb-6 block">
                            The Visionaries
                        </span>
                        <h1 className="font-headline text-5xl md:text-7xl text-deep-forest leading-tight mb-8">
                            Meet the <span className="serif-italic">Partners</span>
                        </h1>
                        <p className="font-body text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
                            Operations veterans turned technology builders. We speak the
                            language of business first and the language of code second.
                        </p>
                    </div>
                </section>

                {/* Partner Cards */}
                <section className="bg-gallery-white pb-24 md:pb-32 px-6 md:px-12">
                    <div className="max-w-screen-2xl mx-auto flex flex-col gap-24 md:gap-32">
                        {PARTNERS.map((partner, i) => (
                            <div
                                key={partner.name}
                                className="grid grid-cols-12 gap-8 md:gap-16 items-center"
                            >
                                {/* Photo */}
                                <div
                                    className={`col-span-12 md:col-span-5 ${i % 2 === 1 ? 'md:order-2' : ''
                                        }`}
                                >
                                    <div className="aspect-[3/4] bg-surface-container-low overflow-hidden rounded-sm relative">
                                        <img
                                            alt={partner.name}
                                            className="w-full h-full object-cover grayscale contrast-125"
                                            src={partner.image}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/30 to-transparent" />
                                    </div>
                                </div>

                                {/* Bio */}
                                <div
                                    className={`col-span-12 md:col-span-7 ${i % 2 === 1 ? 'md:order-1' : ''
                                        }`}
                                >
                                    <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-4">
                                        0{i + 1} — Founding Partner
                                    </span>
                                    <h2 className="font-headline text-4xl md:text-5xl text-deep-forest mb-4">
                                        {partner.name}
                                    </h2>
                                    <p className="font-label text-sm uppercase tracking-widest text-deep-forest/60 mb-8">
                                        {partner.title}
                                    </p>
                                    <p className="font-body text-base md:text-lg text-secondary leading-relaxed max-w-xl">
                                        {partner.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quote / Philosophy */}
                <section className="bg-deep-forest py-24 md:py-32 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="border-l-2 border-primary-fixed pl-6 md:pl-8 py-2 text-left md:text-center md:border-0 md:pl-0">
                            <p className="font-headline text-3xl md:text-4xl text-gallery-white italic leading-relaxed mb-8">
                                &ldquo;As avid golfers, we are obsessed with precision. On the
                                green, a fraction of an inch is the difference between success
                                and failure. We bring that same &lsquo;Under Par&rsquo;
                                mentality to every automation project.&rdquo;
                            </p>
                            <span className="font-label text-xs uppercase tracking-widest text-gallery-white/50">
                                Kyle &amp; Jason — Founding Partners
                            </span>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gallery-white py-24 md:py-32 px-6 md:px-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="font-headline text-4xl md:text-5xl text-deep-forest mb-6">
                            Ready to <span className="serif-italic">talk?</span>
                        </h2>
                        <p className="font-body text-secondary text-lg mb-10">
                            We&rsquo;d love to learn about your operations and see if
                            there&rsquo;s a fit.
                        </p>
                        <Link
                            to="/#contact"
                            className="bg-deep-forest text-white px-10 py-4 font-label uppercase tracking-[0.1em] text-sm font-bold rounded-sm shadow-sm hover:opacity-90 transition-all active:scale-[0.98] duration-200 inline-block"
                        >
                            Book a Free Consultation
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
