export default function Partners() {
    return (
        <section
            id="partners"
            className="bg-surface-container-highest py-24 md:py-32 px-6 md:px-12"
        >
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-12 gap-8 md:gap-16 items-center">
                    {/* Photos */}
                    <div className="col-span-12 md:col-span-5 order-2 md:order-1 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-[3/4] bg-secondary overflow-hidden rounded-sm">
                                <img
                                    alt="Kyle McLeod"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    src="/kyle.png"
                                />
                            </div>
                            <div className="aspect-[3/4] bg-secondary overflow-hidden mt-12 rounded-sm">
                                <img
                                    alt="Jason"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                    src="/jason.jpeg"
                                />
                            </div>
                        </div>
                        {/* Decorative frame */}
                        <div className="absolute inset-0 border-[20px] border-deep-forest/5 -m-10 -z-10 hidden md:block" />
                    </div>

                    {/* Copy */}
                    <div className="col-span-12 md:col-span-7 order-1 md:order-2">
                        <span className="font-label text-xs uppercase tracking-[0.2em] text-deep-forest font-bold mb-6 block">
                            The Visionaries
                        </span>
                        <h2 className="font-headline text-4xl md:text-5xl text-deep-forest mb-8">
                            The <span className="serif-italic">Partners</span>
                        </h2>

                        <div className="flex flex-col gap-8 max-w-xl">
                            {/* Quote */}
                            <div className="border-l-2 border-deep-forest pl-6 md:pl-8 py-2">
                                <p className="font-body text-base md:text-lg text-secondary leading-relaxed italic">
                                    &ldquo;As avid golfers, we are obsessed with precision. On the
                                    green, a fraction of an inch is the difference between success
                                    and failure. We bring that same &lsquo;Under Par&rsquo;
                                    mentality to every automation project.&rdquo;
                                </p>
                            </div>

                            <p className="font-body text-on-surface leading-relaxed">
                                Our founders spent decades in traditional operational roles
                                before mastering AI. We speak the language of business first, and
                                the language of code second. This duality ensures that every
                                technical solution has a measurable business impact.
                            </p>

                            <div className="space-y-4 pt-4">
                                {[
                                    'Expert Curation: 20+ Years Experience',
                                    'Precision Mindset: Meticulous Attention',
                                ].map((text) => (
                                    <div key={text} className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-deep-forest">
                                            check_circle
                                        </span>
                                        <span className="font-bold text-xs uppercase tracking-widest text-deep-forest">
                                            {text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
