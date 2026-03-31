export default function Training() {
    return (
        <section className="bg-gallery-white py-16 md:py-20 px-6 md:px-12">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 text-center">
                    <p className="font-body text-secondary text-base md:text-lg">
                        We also offer team workshops and AI training sessions.
                    </p>
                    <a
                        href="#contact"
                        className="font-label text-sm font-bold text-deep-forest hover:text-primary-container transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                        Book a call to learn more
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}
