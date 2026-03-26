const PAIN_POINTS = [
    {
        icon: 'keyboard',
        num: '01',
        label: 'Obsolete Workflows',
        title: 'Manual Data Entry',
        body: 'Hours lost to repetitive keystrokes and human error. We replace the labor with liquid logic.',
    },
    {
        icon: 'description',
        num: '02',
        label: 'Analog Friction',
        title: 'Paper-Heavy Processes',
        body: 'Physical friction in a digital world. We digitize the workflow, maintaining the signature precision.',
    },
    {
        icon: 'account_tree',
        num: '03',
        label: 'Tech Silos',
        title: 'Fragmented Systems',
        body: "Software that doesn't speak to each other. We build the bridges that unify your data ecosystem.",
    },
]

export default function PainPoints() {
    return (
        <section id="methodology" className="bg-deep-forest py-24 md:py-32 px-6 md:px-12 text-gallery-white">
            <div className="max-w-screen-2xl mx-auto">
                {/* Heading row */}
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-8">
                    <h2 className="font-headline text-4xl md:text-5xl text-gallery-white max-w-lg leading-tight">
                        &ldquo;There has to be a{' '}
                        <span className="serif-italic">better way</span>.&rdquo;
                    </h2>
                    <p className="font-body text-base md:text-lg text-gallery-white/70 max-w-md">
                        Relief begins the moment manual friction disappears. We identify the
                        silent bottlenecks draining your operational focus.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
                    {PAIN_POINTS.map((p) => (
                        <div
                            key={p.num}
                            className="bg-white/5 p-8 md:p-12 transition-all duration-300 hover:bg-white/10 group border-l border-white/10"
                        >
                            <span className="material-symbols-outlined text-4xl text-primary-fixed mb-8 group-hover:scale-110 transition-transform duration-300">
                                {p.icon}
                            </span>
                            <span className="font-label text-[10px] text-white/50 block mb-4 uppercase tracking-widest">
                                {p.num} — {p.label}
                            </span>
                            <h3 className="font-headline text-2xl text-gallery-white mb-4">
                                {p.title}
                            </h3>
                            <p className="font-body text-gallery-white/70 leading-relaxed">
                                {p.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
