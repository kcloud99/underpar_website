export default function LooperExplainer() {
    return (
        <section className="relative bg-deep-forest py-16 md:py-20 px-6 md:px-12 overflow-hidden">
            {/* Subtle top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-fixed/40 to-transparent" />

            <div className="max-w-screen-md mx-auto text-center">
                <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary-fixed/60 block mb-6">
                    Why &ldquo;Looper&rdquo;?
                </span>

                <blockquote className="font-headline text-xl md:text-2xl text-gallery-white/90 leading-relaxed mb-6 italic">
                    &ldquo;A <span className="serif-italic text-primary-fixed">looper</span> is a caddy&thinsp;&mdash;&thinsp;someone who knows every
                    break in the green, reads the course before you do, and guides you
                    through unfamiliar terrain to the best possible outcome.&rdquo;
                </blockquote>

                <p className="font-body text-gallery-white/60 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
                    That&rsquo;s exactly what we do. We study your operations, learn the
                    landscape, and carry the weight of implementation&thinsp;&mdash;&thinsp;so
                    you can focus on the shot in front of you.
                </p>
            </div>

            {/* Subtle bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-fixed/40 to-transparent" />
        </section>
    )
}
