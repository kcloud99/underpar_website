import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'

const STEPS = [
    {
        num: '01',
        title: 'The Operational Audit',
        subtitle: 'The Walk-Through',
        goal: 'Goal: Identify \u2018High-Friction, Low-Value\u2019 tasks that drain your team\'s energy.',
        metric: 'Most audits uncover 10\u201315 hours per week of automatable tasks within the first session.',
    },
    {
        num: '02',
        title: 'Blueprinting & Tool Selection',
        subtitle: 'The Strategy',
        goal: 'Goal: Create a \u2018Zero-Friction\u2019 architecture tailored to your unique workflow.',
        metric: 'Actionable roadmap delivered within 2 weeks. Average clients see 3\u20135 high-impact automation opportunities.',
    },
    {
        num: '03',
        title: 'Deployment & Integration',
        subtitle: 'The Swing',
        goal: 'Goal: Turn the \u2018Manual\u2019 into \u2018Automatic\u2019 through seamless technical implementation.',
        metric: 'Typical implementation takes 4\u20138 weeks. Most teams are fully self-sufficient within 2 weeks of handoff.',
    },
    {
        num: '04',
        title: 'Refinement & ROI',
        subtitle: 'The Scorecard',
        goal: 'Goal: Quantify measurable efficiency and reclaim hours for strategic leadership.',
        metric: 'Clients typically reclaim 15\u201320 hours per week and see measurable ROI within 90 days.',
    },
]

const STANDARDS = [
    {
        icon: 'code',
        title: 'No Jargon, Just Results',
        body: 'We speak the language of business outcomes. Every technical decision is mapped to a bottom-line improvement.',
    },
    {
        icon: 'favorite',
        title: 'Minimal Disruption',
        body: 'We integrate within your existing systems. Our goal is to fix the plane while it\u2019s in flight, without interrupting your operations.',
    },
    {
        icon: 'diamond',
        title: 'High-Touch Partnership',
        body: 'You gain a dedicated advisor, not a support ticket. We act as an extension of your leadership team.',
    },
]

export default function MethodologyPage() {
    return (
        <>
            <Helmet>
                <title>Our Methodology | Looper & Co.</title>
                <meta name="description" content="Discover the Looper Framework: a disciplined, human-first approach to operations automation, tool selection, and ROI for your business." />
                <link rel="canonical" href="https://looperandco.com/methodology" />
            </Helmet>
            <Header />
            <main>
                {/* Hero */}
                <section className="relative min-h-[60vh] flex items-end px-6 md:px-12 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            alt="Architectural precision"
                            className="w-full h-full object-cover grayscale contrast-125 brightness-50"
                            src="/methodology_chart.png"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest via-deep-forest/70 to-deep-forest/40" />
                    </div>
                    <div className="max-w-screen-2xl mx-auto w-full relative z-10">
                        <span className="font-label text-xs uppercase tracking-[0.2em] text-primary-fixed font-bold mb-6 block">
                            Methodology
                        </span>
                        <h1 className="font-headline text-5xl md:text-7xl text-gallery-white leading-tight mb-6">
                            The Looper<br />
                            <span className="serif-italic">Framework</span>
                        </h1>
                        <p className="font-body text-lg md:text-xl text-gallery-white/80 max-w-lg leading-relaxed italic">
                            A disciplined approach to removing digital drag and returning
                            your focus to what matters.
                        </p>
                    </div>
                </section>

                {/* Human-First AI Principle */}
                <section className="bg-gallery-white py-24 md:py-32 px-6 md:px-12">
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
                            {/* Left — Heading */}
                            <div>
                                <h2 className="font-headline text-4xl md:text-5xl text-deep-forest leading-tight mb-6">
                                    The Human-First AI Principle
                                </h2>
                                <div className="w-12 h-1 bg-deep-forest" />
                            </div>

                            {/* Middle — The Friction */}
                            <div className="border-l-2 border-deep-forest/10 pl-8">
                                <span className="font-label text-[10px] uppercase tracking-widest text-deep-forest font-bold block mb-4">
                                    The Friction
                                </span>
                                <h3 className="font-headline text-2xl text-deep-forest mb-4">
                                    Highly-paid assets doing data-entry
                                </h3>
                                <p className="font-body text-secondary leading-relaxed">
                                    Modern business owners and operators are buried under manual chaos&mdash;an invisible
                                    tax on brilliance. High-value talent is currently tethered to
                                    low-value repetitive tasks.
                                </p>
                            </div>

                            {/* Right — The Evolution */}
                            <div className="bg-deep-forest p-8 md:p-10 rounded-sm">
                                <span className="font-label text-[10px] uppercase tracking-widest text-primary-fixed font-bold block mb-4">
                                    The Evolution
                                </span>
                                <h3 className="font-headline text-2xl text-gallery-white mb-4">
                                    The 80/20 Alignment
                                </h3>
                                <p className="font-body text-gallery-white/70 leading-relaxed">
                                    We identify the 20% of tasks causing 80% of your friction. By
                                    replacing busy work with precision automation, we restore your
                                    primary focus.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Four-Step Course Map */}
                <section className="bg-surface-container-high py-24 md:py-32 px-6 md:px-12">
                    <div className="max-w-screen-2xl mx-auto">
                        {/* Section header */}
                        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 md:mb-20 gap-4">
                            <div>
                                <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-4">
                                    Execution Strategy
                                </span>
                                <h2 className="font-headline text-4xl md:text-5xl text-deep-forest">
                                    The Four-Step Course Map
                                </h2>
                            </div>
                            <span className="font-label text-[10px] uppercase tracking-widest text-secondary">
                                Trajectory of Efficiency
                            </span>
                        </div>

                        {/* Steps grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {STEPS.map((step) => (
                                <div key={step.num} className="flex flex-col gap-6">
                                    <div className="flex items-start gap-4 border-t-2 border-deep-forest/10 pt-6">
                                        <span className="font-headline text-4xl italic text-deep-forest/30">
                                            {step.num}
                                        </span>
                                    </div>
                                    <h3 className="font-headline text-xl text-deep-forest leading-snug">
                                        {step.title}
                                    </h3>
                                    <span className="font-label text-[10px] uppercase tracking-widest text-secondary">
                                        {step.subtitle}
                                    </span>
                                    <div className="bg-gallery-white border border-deep-forest/8 p-5 rounded-sm mt-auto">
                                        <p className="font-body text-sm text-secondary leading-relaxed">
                                            {step.goal}
                                        </p>
                                        <p className="font-body text-xs text-deep-forest/60 leading-relaxed mt-3 border-t border-deep-forest/5 pt-3">
                                            <span className="material-symbols-outlined text-sm align-middle mr-1 text-primary-fixed">
                                                trending_up
                                            </span>
                                            {step.metric}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Engagement note */}
                        <div className="mt-16 max-w-2xl mx-auto text-center">
                            <div className="bg-gallery-white border border-deep-forest/8 p-8 rounded-sm inline-block">
                                <p className="font-body text-secondary leading-relaxed">
                                    <span className="material-symbols-outlined text-base align-middle mr-2 text-primary-fixed">
                                        schedule
                                    </span>
                                    Most engagements begin with a{' '}
                                    <span className="font-bold text-deep-forest">
                                        complimentary operational audit
                                    </span>{' '}
                                    and deliver an actionable roadmap within{' '}
                                    <span className="font-bold text-deep-forest">
                                        2 weeks
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partnership Standards */}
                <section className="bg-gallery-white py-24 md:py-32 px-6 md:px-12">
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="text-center mb-16 md:mb-20">
                            <h2 className="font-headline text-4xl md:text-5xl text-deep-forest mb-6">
                                Partnership Standards
                            </h2>
                            <p className="font-body text-secondary text-base md:text-lg max-w-2xl mx-auto">
                                Our engagement model is designed for those who value time above
                                all else. No clutter, no unnecessary meetings.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {STANDARDS.map((s) => (
                                <div
                                    key={s.title}
                                    className="bg-surface-container-low border border-deep-forest/5 p-8 md:p-10 rounded-sm text-center"
                                >
                                    <div className="flex justify-center mb-6">
                                        <span className="material-symbols-outlined text-3xl text-deep-forest/60">
                                            {s.icon}
                                        </span>
                                    </div>
                                    <h3 className="font-headline text-xl text-deep-forest mb-4">
                                        {s.title}
                                    </h3>
                                    <p className="font-body text-secondary leading-relaxed text-sm">
                                        {s.body}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-deep-forest py-24 md:py-32 px-6 md:px-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="font-headline text-4xl md:text-5xl text-gallery-white mb-6">
                            Ready to see the <span className="serif-italic text-primary-fixed">framework</span> in action?
                        </h2>
                        <p className="font-body text-gallery-white/70 text-lg mb-10">
                            It starts with a conversation. Let&rsquo;s map out your path to
                            operational clarity.
                        </p>
                        <Link
                            to="/#contact"
                            className="bg-primary-fixed text-deep-forest px-10 py-4 font-label uppercase tracking-[0.1em] text-sm font-bold rounded-sm hover:bg-white transition-colors duration-300 active:scale-[0.98] inline-block"
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
