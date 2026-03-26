const SERVICES = [
    {
        num: '01',
        icon: 'troubleshoot',
        title: 'Operational Audits',
        body: 'A forensic deep-dive into your current workflows to identify hidden leakages and automation potential.',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuC4pYFJt_qfiWlmPf57HuJ9ObkV001VsCDWgNsMrOYEZdS1IALokeksy8Y8F5UI6S9YKWOmAePhlUwML-I-C_jlbV60hVtaHENNl5o2DV9T1uRb91V0-hJkZ_Mw9nF-DVpjYbgUPOodJzqddeqK8qioK79NEMGfiGj9EkBUdeJq8gKParfHvI6uRMMX2Gngzx1E5pEu_ZLMvWOYAI_g-1gmg8QU97uY1Evc2MyCj_DxWG-EInYdKsijDJTYiW0XxHirQ0pN2Ox0yaD4',
        imageAlt: 'Data visualization audit',
        dark: false,
    },
    {
        num: '02',
        icon: 'psychology',
        title: 'Custom AI Implementation',
        body: 'Bespoke AI tools designed specifically for your operational DNA. No generic templates, only precision.',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuB8MivBzf36W_XEsl7BlIqO7vja0TSEZeVgKQ5TqKEaaUOpTfAA8ptK1y_kSlOEpgQkXQGh--d7DSfSLKsBmSHTxgDhRgDVxrQI1pUR22cN624Jpe_6aNdIeOHoAdbYyeCmIqfJCFrKCYV3RJOAKMPMPUK3y7Q676-I5gBpBLH-hg4VT9shfwuqZ1tJWGiNO9ZYfCk33u20yG2FVwl7VcDHSI6gqEITB9JZRWZ1oiDtPjW4ZrzcxveUQHo5EQPuqoxvQedR57nL-gzx',
        imageAlt: 'Microchip precision',
        dark: true,
    },
    {
        num: '03',
        icon: 'integration_instructions',
        title: 'Legacy Systems Integration',
        body: "We don't replace your history; we empower it. Unifying 20-year-old reliability with modern automation.",
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAKSo9QaR2ARLbAJA4sV_dcqnHV9qh_nE1OtE1mVbuRA209T5iVvTjHPVAja1ZDltMu9x-0WZxyB-aD1PzvuLkv7n0YP2WG2HFZ-IJQveYiO6RfVWoDVQirKMOUAUbU3Wtdt_7-boDRP_VKF9lnBdzcpmQBPQYLiil98tbsn691wKhmVzOKwBfetqptKQfFgC-mDuqMz7MnT_-iRuBo1u6_Z46B-Fl9GxECFIYMO_e-8GyNGM2Xy9TtnpcBay-jCmmF57WhaNayyo2-',
        imageAlt: 'Technical bridge',
        dark: false,
    },
]

function ServiceCard({ s }) {
    const isDark = s.dark

    return (
        <div
            className={`flex flex-col gap-6 rounded-sm transition-all duration-300 ${isDark ? 'bg-deep-forest p-8 md:p-12 text-gallery-white' : ''
                }`}
        >
            <div className="flex items-center gap-4">
                <span
                    className={`font-headline text-sm italic ${isDark ? 'text-primary-fixed' : 'text-deep-forest'
                        }`}
                >
                    {s.num}
                </span>
                <span
                    className={`material-symbols-outlined text-2xl ${isDark ? 'text-gallery-white/80' : 'text-deep-forest'
                        }`}
                >
                    {s.icon}
                </span>
            </div>

            <h3
                className={`font-headline text-3xl ${isDark ? 'text-gallery-white' : 'text-deep-forest'
                    }`}
            >
                {s.title}
            </h3>

            <p
                className={`font-body leading-relaxed mb-6 ${isDark ? 'text-gallery-white/70' : 'text-secondary'
                    }`}
            >
                {s.body}
            </p>

            <div
                className={`aspect-square overflow-hidden rounded-sm ${isDark ? 'bg-white/10' : 'bg-surface-container-high'
                    }`}
            >
                <img
                    alt={s.imageAlt}
                    className={`w-full h-full object-cover ${isDark
                            ? 'grayscale brightness-110 contrast-125 mix-blend-screen'
                            : 'grayscale brightness-90 contrast-125'
                        }`}
                    src={s.image}
                />
            </div>
        </div>
    )
}

export default function Services() {
    return (
        <section
            id="services"
            className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto bg-gallery-white"
        >
            <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                <span className="font-label text-xs uppercase tracking-[0.2em] text-deep-forest font-bold mb-4">
                    Our Expertise
                </span>
                <h2 className="font-headline text-4xl md:text-5xl text-deep-forest">
                    The Architecture of <span className="serif-italic">Efficiency</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {SERVICES.map((s) => (
                    <ServiceCard key={s.num} s={s} />
                ))}
            </div>
        </section>
    )
}
