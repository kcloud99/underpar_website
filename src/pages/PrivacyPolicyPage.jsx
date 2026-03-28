import Header from '../components/Header'
import Footer from '../components/Footer'

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-gallery-white pt-32 pb-16 md:pb-24 px-6 md:px-12">
                    <div className="max-w-screen-2xl mx-auto">
                        <span className="font-label text-xs uppercase tracking-[0.2em] text-deep-forest font-bold mb-6 block">
                            Legal
                        </span>
                        <h1 className="font-headline text-5xl md:text-7xl text-deep-forest leading-tight mb-6">
                            Privacy <span className="serif-italic">Policy</span>
                        </h1>
                        <p className="font-body text-secondary text-base">
                            Last updated: March 2026
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="bg-gallery-white pb-24 md:pb-32 px-6 md:px-12">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Introduction
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                Under Par Partners LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
                                &ldquo;our&rdquo;) operates the website underparpartners.com.
                                This Privacy Policy explains how we collect, use, and protect
                                information when you visit our website.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Information We Collect
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                We collect only the information you voluntarily submit through
                                our contact form: your full name, work email address, selected
                                operational pain point, and any optional context you provide.
                                We do not collect information through cookies, tracking pixels,
                                or third-party analytics tools.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                How We Use Your Information
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                We use the information you provide solely to respond to your
                                inquiry, schedule consultations, and communicate about our
                                services. We do not sell, rent, or share your personal
                                information with third parties for marketing purposes.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Form Processing
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                Our contact form is powered by Netlify Forms. Information you
                                submit is processed and stored by Netlify in accordance with
                                their privacy practices. You can review{' '}
                                <a
                                    href="https://www.netlify.com/privacy/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-deep-forest underline underline-offset-2 hover:text-primary-fixed transition-colors duration-300"
                                >
                                    Netlify&rsquo;s privacy policy
                                </a>{' '}
                                for more information.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Cookies &amp; Tracking
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                We do not use cookies for tracking or advertising purposes.
                                Standard server logs may record your IP address, browser type,
                                and pages visited for security and performance purposes.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Data Retention
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                We retain form submissions for the duration of our business
                                relationship or active inquiry. You may request deletion of
                                your data at any time by emailing{' '}
                                <a
                                    href="mailto:hello@underparpartners.com"
                                    className="text-deep-forest underline underline-offset-2 hover:text-primary-fixed transition-colors duration-300"
                                >
                                    hello@underparpartners.com
                                </a>
                                .
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Your Rights
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                You may request access to, correction of, or deletion of your
                                personal information at any time by contacting us at{' '}
                                <a
                                    href="mailto:hello@underparpartners.com"
                                    className="text-deep-forest underline underline-offset-2 hover:text-primary-fixed transition-colors duration-300"
                                >
                                    hello@underparpartners.com
                                </a>
                                .
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Changes to This Policy
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                We may update this Privacy Policy from time to time. Any
                                changes will be posted on this page with an updated revision
                                date. Your continued use of the website after any changes
                                constitutes acceptance of the updated policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Contact
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                Under Par Partners LLC
                                <br />
                                <a
                                    href="mailto:hello@underparpartners.com"
                                    className="text-deep-forest underline underline-offset-2 hover:text-primary-fixed transition-colors duration-300"
                                >
                                    hello@underparpartners.com
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
