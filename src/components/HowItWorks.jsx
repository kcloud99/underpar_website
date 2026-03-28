export default function HowItWorks() {
    return (
        <section className="bg-surface-container-high py-24 md:py-32 px-6 md:px-12">
            <div className="max-w-screen-2xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-4">
                        What to Expect
                    </span>
                    <h2 className="font-headline text-4xl md:text-5xl text-deep-forest mb-6">
                        How an <span className="serif-italic">Engagement</span> Works
                    </h2>
                    <p className="font-body text-secondary text-base md:text-lg leading-relaxed">
                        No long sales cycles. No bloated proposals. Just a clear path from
                        operational friction to measurable results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <span className="material-symbols-outlined text-3xl text-deep-forest/60">
                                handshake
                            </span>
                        </div>
                        <h3 className="font-headline text-xl text-deep-forest mb-3">
                            Free Assessment
                        </h3>
                        <p className="font-body text-sm text-secondary leading-relaxed">
                            We start with a complimentary operational audit to understand
                            your workflows and identify the highest-impact opportunities.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <span className="material-symbols-outlined text-3xl text-deep-forest/60">
                                map
                            </span>
                        </div>
                        <h3 className="font-headline text-xl text-deep-forest mb-3">
                            Actionable Roadmap
                        </h3>
                        <p className="font-body text-sm text-secondary leading-relaxed">
                            Within two weeks, you receive a clear roadmap with prioritized
                            recommendations and realistic timelines.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="flex justify-center mb-6">
                            <span className="material-symbols-outlined text-3xl text-deep-forest/60">
                                rocket_launch
                            </span>
                        </div>
                        <h3 className="font-headline text-xl text-deep-forest mb-3">
                            Implementation
                        </h3>
                        <p className="font-body text-sm text-secondary leading-relaxed">
                            Typical engagements run 4 to 12 weeks. We build, integrate, and
                            hand off with full team training and documentation.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-16">
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
