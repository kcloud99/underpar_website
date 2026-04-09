import { useState, useCallback } from 'react'

const PAIN_POINTS = [
    {
        icon: 'keyboard',
        num: '01',
        label: 'Obsolete Workflows',
        title: 'Manual Data Entry',
        body: 'Hours lost to repetitive keystrokes and human error. We replace the busywork with automated workflows that run without error.',
        backTitle: 'What This Looks Like After Automation',
        backExamples: [
            'Change orders auto-update your ERP, PM tool, and accounting system simultaneously',
            'Field reports from a phone populate daily logs, safety records, and billing in one step',
            'New employee onboarding docs auto-generate and route for signatures',
        ],
    },
    {
        icon: 'description',
        num: '02',
        label: 'Analog Friction',
        title: 'Paper-Heavy Processes',
        body: 'Physical friction in a digital world. We digitize the workflow without losing what makes your process work.',
        backTitle: 'What This Looks Like After Automation',
        backExamples: [
            'Safety inspection forms on a tablet sync to your compliance dashboard in real time',
            'Signed delivery tickets get scanned, parsed, and filed automatically',
            'Permit applications auto-populate from project data already in your system',
        ],
    },
    {
        icon: 'account_tree',
        num: '03',
        label: 'Tech Silos',
        title: 'Fragmented Systems',
        body: "Software that doesn't speak to each other. We connect your tools so data flows automatically between them.",
        backTitle: 'What This Looks Like After Automation',
        backExamples: [
            'Estimating tool updates your project schedule and budget tracker when a bid is won',
            'Timesheet data from the field flows straight to payroll without re-entry',
            'Customer communications, project updates, and invoicing all reference the same source of truth',
        ],
    },
]

function FlipCard({ p }) {
    const [flipped, setFlipped] = useState(false)

    const handleMouseEnter = useCallback(() => {
        if (window.matchMedia('(hover: hover)').matches) setFlipped(true)
    }, [])

    const handleMouseLeave = useCallback(() => {
        if (window.matchMedia('(hover: hover)').matches) setFlipped(false)
    }, [])

    const handleClick = useCallback(() => {
        if (!window.matchMedia('(hover: hover)').matches) setFlipped((f) => !f)
    }, [])

    return (
        <div
            className="flip-card bg-white/5 transition-colors duration-300 hover:bg-white/10 border-l border-white/10 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <div className={`flip-card-inner min-h-[300px] md:min-h-[320px]${flipped ? ' is-flipped' : ''}`}>
                {/* Front */}
                <div className="flip-card-front p-8 md:p-12 flex flex-col">
                    <span className="material-symbols-outlined text-4xl text-primary-fixed mb-8 transition-transform duration-300">
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
                    <span className="font-label text-[10px] text-white/30 uppercase tracking-widest mt-auto pt-6 md:hidden">
                        Tap to see examples
                    </span>
                </div>

                {/* Back */}
                <div className="flip-card-back p-8 md:p-12 flex flex-col justify-center">
                    <span className="material-symbols-outlined text-3xl text-primary-fixed mb-6">
                        check_circle
                    </span>
                    <h4 className="font-headline text-xl text-gallery-white mb-6">
                        {p.backTitle}
                    </h4>
                    <ul className="space-y-4">
                        {p.backExamples.map((ex) => (
                            <li
                                key={ex}
                                className="font-body text-sm text-gallery-white/80 leading-relaxed flex gap-3"
                            >
                                <span className="material-symbols-outlined text-primary-fixed text-base mt-0.5 shrink-0">
                                    arrow_forward
                                </span>
                                {ex}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

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
                        Relief begins the moment manual friction disappears. We find the
                        bottlenecks draining your team&rsquo;s time&mdash;and remove them
                        without adding complexity to your day.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
                    {PAIN_POINTS.map((p) => (
                        <FlipCard key={p.num} p={p} />
                    ))}
                </div>
            </div>
        </section>
    )
}
