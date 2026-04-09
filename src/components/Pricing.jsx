const PRINCIPLES = [
    {
        icon: 'trending_up',
        title: 'Outcome-Based',
        body: "Your investment is tied to measurable results \u2014 hours saved, errors eliminated, revenue recovered. If the solution doesn\u2019t deliver value, neither should the invoice.",
    },
    {
        icon: 'handshake',
        title: 'Transparent Scope',
        body: "Every engagement starts with a clear scope and deliverables. No surprise line items. No ambiguous retainers. You know exactly what you\u2019re getting before we start.",
    },
    {
        icon: 'tune',
        title: 'Right-Sized',
        body: "A two-week integration doesn\u2019t cost the same as a six-month platform build. We scale the investment to match the complexity and impact of your specific problem.",
    },
]

export default function Pricing() {
    return (
        <section className="bg-gallery-white py-24 md:py-32 px-6 md:px-12">
            <div className="max-w-screen-2xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-4">
                        Investment
                    </span>
                    <h2 className="font-headline text-4xl md:text-5xl text-deep-forest mb-6">
                        Built Around Your{' '}
                        <span className="serif-italic">Outcomes</span>, Not Our
                        Hours
                    </h2>
                    <p className="font-body text-secondary text-base md:text-lg leading-relaxed">
                        We don&rsquo;t bill for time&mdash;we price around results. You pay
                        for what the solution delivers, not how long it takes us to build it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {PRINCIPLES.map((p) => (
                        <div key={p.title} className="text-center">
                            <div className="flex justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl text-deep-forest/60">
                                    {p.icon}
                                </span>
                            </div>
                            <h3 className="font-headline text-xl text-deep-forest mb-3">
                                {p.title}
                            </h3>
                            <p className="font-body text-sm text-secondary leading-relaxed">
                                {p.body}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="font-body text-secondary text-sm mb-6 max-w-lg mx-auto">
                        Every engagement starts with a free assessment&mdash;so you&rsquo;ll
                        know exactly what we&rsquo;d recommend and what it would cost before
                        any commitment.
                    </p>
                    <a
                        href="#contact"
                        className="font-label text-xs uppercase tracking-widest text-deep-forest border-b border-deep-forest/30 pb-1 hover:border-deep-forest transition-colors duration-300"
                    >
                        Start with a Free Assessment &darr;
                    </a>
                </div>
            </div>
        </section>
    )
}
