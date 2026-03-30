const SERVICES = [
    {
        num: '01',
        icon: 'troubleshoot',
        title: 'Operational Audits',
        body: 'We map your current workflows end-to-end, find where time and money are leaking, and pinpoint exactly what to automate first.',
        image: '/service_audit.png',
        imageAlt: 'Data visualization audit',
        dark: false,
    },
    {
        num: '02',
        icon: 'psychology',
        title: 'Custom AI Implementation',
        body: 'AI tools built for how your business actually works\u2009\u2014\u2009from automated document processing to intelligent scheduling and dispatch.',
        image: '/service_ai.png',
        imageAlt: 'Microchip precision',
        dark: true,
    },
    {
        num: '03',
        icon: 'integration_instructions',
        title: 'Legacy Systems Integration',
        body: "Your existing software stays. We connect it to modern automation so your proven systems work together instead of in silos.",
        image: '/service_integration.png',
        imageAlt: 'Technical bridge',
        dark: false,
    },
]

function ServiceCard({ s }) {
    const isDark = s.dark

    return (
        <div
            className={`flex flex-col gap-6 rounded-sm transition-all duration-300 ${isDark ? 'bg-deep-forest p-8 md:p-12 text-gallery-white' : ''
                }`}
        >
            <div className="flex items-center gap-4">
                <span
                    className={`font-headline text-sm italic ${isDark ? 'text-primary-fixed' : 'text-deep-forest'
                        }`}
                >
                    {s.num}
                </span>
                <span
                    className={`material-symbols-outlined text-2xl ${isDark ? 'text-gallery-white/80' : 'text-deep-forest'
                        }`}
                >
                    {s.icon}
                </span>
            </div>

            <h3
                className={`font-headline text-3xl ${isDark ? 'text-gallery-white' : 'text-deep-forest'
                    }`}
            >
                {s.title}
            </h3>

            <p
                className={`font-body leading-relaxed mb-6 ${isDark ? 'text-gallery-white/70' : 'text-secondary'
                    }`}
            >
                {s.body}
            </p>

            <div
                className={`aspect-square overflow-hidden rounded-sm ${isDark ? 'bg-white/10' : 'bg-surface-container-high'
                    }`}
            >
                <img
                    alt={s.imageAlt}
                    className={`w-full h-full object-cover ${isDark
                        ? 'grayscale brightness-110 contrast-125 mix-blend-screen'
                        : 'grayscale brightness-90 contrast-125'
                        }`}
                    src={s.image}
                />
            </div>
        </div>
    )
}

export default function Services() {
    return (
        <section
            id="services"
            className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-gallery-white"
        >
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                <span className="font-label text-xs uppercase tracking-[0.2em] text-deep-forest font-bold mb-4">
                    Our Expertise
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-deep-forest">
                    The Architecture of <span className="serif-italic">Efficiency</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {SERVICES.map((s) => (
                    <ServiceCard key={s.num} s={s} />
                ))}
            </div>
        </section>
    )
}
