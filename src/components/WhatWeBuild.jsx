const DELIVERABLES = [
    {
        icon: 'smart_toy',
        title: 'AI Agents',
        body: 'Custom autonomous agents that handle repetitive tasks\u2009\u2014\u2009from lead qualification and document processing to automated reporting.',
        image: '/card_ai_agents.png',
        imageAlt: 'AI agent interface showing automated lead enrichment',
        featured: true,
    },
    {
        icon: 'account_tree',
        title: 'Workflow Automation',
        body: 'Automated workflows connecting your existing tools\u2009\u2014\u2009eliminating copy-paste between systems and saving 10+ hours per week.',
        image: '/card_workflow.png',
        imageAlt: 'Workflow automation builder with connected nodes',
    },
    {
        icon: 'description',
        title: 'Intelligent Document Processing',
        body: 'AI that reads, extracts, and routes information from your documents\u2009\u2014\u2009estimates, invoices, safety forms, and compliance paperwork.',
        image: '/card_documents.png',
        imageAlt: 'Document search and AI insights interface',
    },
    {
        icon: 'route',
        title: 'AI Strategy & Roadmapping',
        body: 'Clear implementation plans for AI adoption. We audit your current stack, identify quick wins, and build a phased rollout.',
        image: '/card_strategy.png',
        imageAlt: 'Implementation roadmap with phased timeline',
    },
]

function FeaturedCard({ d }) {
    return (
        <div className="bg-gallery-white border border-outline-variant/30 rounded-sm p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center transition-all duration-300 hover:shadow-lg group">
            <div className="flex-1 min-w-0">
                <span className="material-symbols-outlined text-3xl text-deep-forest mb-6 block group-hover:scale-110 transition-transform duration-300">
                    {d.icon}
                </span>
                <h3 className="font-headline text-3xl md:text-4xl text-deep-forest mb-4">
                    {d.title}
                </h3>
                <p className="font-body text-secondary leading-relaxed">
                    {d.body}
                </p>
            </div>
            <div className="w-full md:w-[45%] shrink-0">
                <div className="aspect-square overflow-hidden rounded-sm bg-surface-container-low">
                    <img
                        alt={d.imageAlt}
                        className="w-full h-full object-cover"
                        src={d.image}
                    />
                </div>
            </div>
        </div>
    )
}

function SmallCard({ d }) {
    return (
        <div className="bg-gallery-white border border-outline-variant/30 rounded-sm p-8 md:p-10 flex flex-col transition-all duration-300 hover:shadow-lg group">
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-surface-container-low mb-6">
                <img
                    alt={d.imageAlt}
                    className="w-full h-full object-cover"
                    src={d.image}
                />
            </div>
            <h3 className="font-headline text-2xl text-deep-forest mb-3">
                {d.title}
            </h3>
            <p className="font-body text-secondary leading-relaxed text-sm">
                {d.body}
            </p>
        </div>
    )
}

export default function WhatWeBuild() {
    const featured = DELIVERABLES.filter((d) => d.featured)
    const rest = DELIVERABLES.filter((d) => !d.featured)

    return (
        <section className="bg-surface-container-high py-24 md:py-32 px-6 md:px-12">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-4">
                        Our Deliverables
                    </span>
                    <h2 className="font-headline text-4xl md:text-5xl text-deep-forest">
                        Bespoke AI Solutions That Deliver{' '}
                        <span className="serif-italic">Results</span>
                    </h2>
                </div>

                <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
                    {featured.map((d) => (
                        <FeaturedCard key={d.title} d={d} />
                    ))}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {rest.map((d) => (
                            <SmallCard key={d.title} d={d} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
