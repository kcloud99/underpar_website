const DELIVERABLES = [
    {
        icon: 'smart_toy',
        title: 'AI Agents',
        body: 'Custom autonomous agents that handle repetitive tasks\u2009\u2014\u2009from lead qualification and document processing to automated reporting.',
    },
    {
        icon: 'account_tree',
        title: 'Workflow Automation',
        body: 'Automated workflows connecting your existing tools\u2009\u2014\u2009eliminating copy-paste between systems and saving 10+ hours per week.',
    },
    {
        icon: 'description',
        title: 'Intelligent Document Processing',
        body: 'AI that reads, extracts, and routes information from your documents\u2009\u2014\u2009estimates, invoices, safety forms, and compliance paperwork.',
    },
    {
        icon: 'route',
        title: 'AI Strategy & Roadmapping',
        body: 'Clear implementation plans for AI adoption. We audit your current stack, identify quick wins, and build a phased rollout.',
    },
]

export default function WhatWeBuild() {
    return (
        <section className="bg-surface-container-high py-24 md:py-32 px-6 md:px-12">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4">
                        Our Deliverables
                    </span>
                    <h2 className="font-headline text-4xl md:text-5xl text-deep-forest">
                        What We <span className="serif-italic">Build</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {DELIVERABLES.map((d) => (
                        <div
                            key={d.title}
                            className="bg-deep-forest p-8 md:p-10 rounded-sm transition-all duration-300 hover:bg-deep-forest/90 group"
                        >
                            <span className="material-symbols-outlined text-3xl text-primary-fixed mb-6 block group-hover:scale-110 transition-transform duration-300">
                                {d.icon}
                            </span>
                            <h3 className="font-headline text-2xl text-gallery-white mb-4">
                                {d.title}
                            </h3>
                            <p className="font-body text-gallery-white/70 leading-relaxed">
                                {d.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
