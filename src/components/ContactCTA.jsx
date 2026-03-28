import { useState } from 'react'

const PAIN_OPTIONS = [
    'Manual Data Entry & Redundant Input',
    'Paper-Heavy Processes & Document Management',
    'Reporting & Visibility (No Dashboards or KPIs)',
    'Scheduling & Dispatch Coordination',
    'Estimating & Bidding Bottlenecks',
    'Legacy System Connectivity & Data Silos',
    'Workflow Orchestration & Approvals',
    'Inventory & Asset Tracking',
    'Customer Communication & Follow-ups',
    'Compliance & Safety Documentation',
    'Other',
]

export default function ContactCTA() {
    const [submitted, setSubmitted] = useState(false)
    const [selectedPain, setSelectedPain] = useState(PAIN_OPTIONS[0])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target

        try {
            const formData = new FormData(form)
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            })
            setSubmitted(true)
        } catch {
            alert('Something went wrong. Please try again or email us directly at hello@underparpartners.com.')
        }
    }

    return (
        <section
            id="contact"
            className="bg-deep-forest py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
        >
            {/* Decorative geometry */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 border-t border-r border-white/20 -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 border-b border-l border-white/20 translate-y-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.05),transparent_50%)]" />
            </div>

            {/* Headline */}
            <div className="max-w-4xl mx-auto relative z-10 text-center mb-12 md:mb-16">
                <h2 className="font-headline text-4xl md:text-5xl text-gallery-white mb-6">
                    Ready to reclaim your{' '}
                    <span className="serif-italic text-primary-fixed">
                        team's time?
                    </span>
                </h2>
                <p className="font-body text-gallery-white/70 text-base md:text-lg max-w-2xl mx-auto">
                    Ready to trade manual chaos for effortless efficiency? Let&rsquo;s
                    discuss a roadmap for your digital transformation.
                </p>
            </div>

            {/* Form card — glassmorphism */}
            <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl border border-white/10 rounded-sm relative z-10">
                {submitted ? (
                    <div className="flex flex-col items-center gap-4 py-12 text-center animate-fade-in-up">
                        <span className="material-symbols-outlined text-5xl text-primary-fixed">
                            check_circle
                        </span>
                        <p className="font-headline text-2xl text-gallery-white italic">
                            We&rsquo;ll be in touch.
                        </p>
                        <p className="font-body text-sm text-gallery-white/60">
                            Expect a response within one business day.
                        </p>
                    </div>
                ) : (
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                        className="flex flex-col gap-8"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden">
                            <label>
                                Don&rsquo;t fill this out: <input name="bot-field" />
                            </label>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="font-label text-[10px] uppercase tracking-widest text-white/50">
                                    Full Name
                                </label>
                                <input
                                    name="name"
                                    className="border-b border-white/20 bg-transparent py-2 px-0 focus:ring-0 focus:border-primary-fixed outline-none font-body text-gallery-white transition-colors duration-300"
                                    placeholder="Johnathan Doe"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-label text-[10px] uppercase tracking-widest text-white/50">
                                    Work Email
                                </label>
                                <input
                                    name="email"
                                    className="border-b border-white/20 bg-transparent py-2 px-0 focus:ring-0 focus:border-primary-fixed outline-none font-body text-gallery-white transition-colors duration-300"
                                    placeholder="j.doe@company.com"
                                    type="email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-label text-[10px] uppercase tracking-widest text-white/50">
                                Primary Operational Pain Point
                            </label>
                            <select
                                name="pain-point"
                                value={selectedPain}
                                onChange={(e) => setSelectedPain(e.target.value)}
                                className="border-b border-white/20 bg-transparent py-2 px-0 focus:ring-0 focus:border-primary-fixed outline-none font-body text-gallery-white transition-colors duration-300"
                            >
                                {PAIN_OPTIONS.map((opt) => (
                                    <option key={opt} className="bg-deep-forest">
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-label text-[10px] uppercase tracking-widest text-white/50">
                                {selectedPain === 'Other'
                                    ? 'Please Describe Your Challenge'
                                    : 'Additional Context (Optional)'}
                            </label>
                            <textarea
                                name="message"
                                className={`border bg-white/5 p-4 focus:ring-1 focus:ring-primary-fixed outline-none font-body text-gallery-white transition-all duration-300 rounded-sm ${
                                    selectedPain === 'Other'
                                        ? 'border-primary-fixed/40 bg-white/8'
                                        : 'border-white/10'
                                }`}
                                placeholder={
                                    selectedPain === 'Other'
                                        ? 'Tell us about the specific operational challenge you are facing...'
                                        : 'How can we help streamline your specific workflow?'
                                }
                                rows={selectedPain === 'Other' ? 5 : 4}
                                required={selectedPain === 'Other'}
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-primary-fixed text-deep-forest py-4 md:py-5 font-label uppercase tracking-widest text-sm font-bold mt-4 hover:bg-white transition-colors duration-300 focus:ring-1 focus:ring-white cursor-pointer active:scale-[0.98] rounded-sm"
                        >
                            Book a Free Consultation
                        </button>
                    </form>
                )}
            </div>
        </section>
    )
}
