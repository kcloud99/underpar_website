export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center px-6 md:px-12 py-24 max-w-screen-2xl mx-auto overflow-hidden bg-gallery-white">
            <div className="grid grid-cols-12 w-full gap-8 items-center">
                {/* Left — Copy */}
                <div className="col-span-12 md:col-span-7 z-10">
                    <span className="font-label uppercase tracking-[0.3em] text-[10px] text-deep-forest mb-6 block font-bold border-l-2 border-deep-forest pl-4 animate-fade-in-up">
                        Operations Automation Consultancy
                    </span>

                    <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl text-deep-forest leading-[0.95] tracking-tight mb-8 animate-fade-in-up animate-delay-100">
                        You <span className="serif-italic">weren&rsquo;t</span> meant to do the computer&rsquo;s job.
                    </h1>

                    <p className="font-body text-lg md:text-xl text-secondary max-w-xl leading-relaxed mb-12 animate-fade-in-up animate-delay-200">
                        Under Par Partners streamlines your operations with AI and automation, turning manual chaos into effortless efficiency.
                    </p>

                    <div className="flex items-center gap-6 animate-fade-in-up animate-delay-300">
                        <a
                            href="#contact"
                            className="bg-deep-forest text-white px-8 md:px-10 py-4 font-label uppercase tracking-[0.1em] text-sm font-bold rounded-sm shadow-sm hover:opacity-90 transition-all active:scale-[0.98] duration-200 cursor-pointer"
                        >
                            Find a Better Way
                        </a>
                        <div className="w-24 h-px bg-deep-forest/20 hidden sm:block" />
                        <span className="font-label text-xs uppercase tracking-widest text-deep-forest/60 hidden sm:block">
                            Efficiency First
                        </span>
                    </div>
                </div>

                {/* Right — Image */}
                <div className="col-span-12 md:col-span-5 relative animate-fade-in-up animate-delay-300">
                    <div className="aspect-[4/5] bg-surface-container-low relative overflow-hidden rounded-sm">
                        <img
                            alt="Architectural precision"
                            className="w-full h-full object-cover grayscale opacity-90 contrast-125"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSY0rkUIJB4F1oK1wQWrWEjSKk0Qh7DLuQAHHtL2VoYifCIV1FbKFZOiwYUr7-BaZtFRfsZ8CqZHmYWalTxF6LyU4AWXtpitfV-X7bEOaAt5ARcwbWAbsabqOVJkMgWQskKUMOEB_IXejC8BHpAvqfJjY2Y69vpBlY6Gs20SpSCv4FzaxwifwhzAkh57TuefJAxcMfaTn7GNYlTh1-ltWMnySdCBAolAedNdf6cy1Gm8RlPMYfwf4lP9UkJFgsO_RvPEMzviB-E-0K"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/40 to-transparent" />
                    </div>

                </div>
            </div>
        </section>
    )
}
