import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function TermsOfServicePage() {
    return (
        <>
            <Helmet>
                <title>Terms of Service | Looper & Co.</title>
                <meta name="description" content="Terms of Service for Looper & Co. LLC." />
                <link rel="canonical" href="https://looperandco.com/terms" />
            </Helmet>
            <Header />
            <main>
                {/* Hero */}
                <section className="bg-gallery-white pt-32 pb-16 md:pb-24 px-6 md:px-12">
                    <div className="max-w-screen-2xl mx-auto">
                        <span className="font-label text-xs uppercase tracking-[0.2em] text-deep-forest font-bold mb-6 block">
                            Legal
                        </span>
                        <h1 className="font-headline text-5xl md:text-7xl text-deep-forest leading-tight mb-6">
                            Terms of <span className="serif-italic">Service</span>
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
                                Agreement to Terms
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                These Terms of Service govern your use of the Looper &amp; Co.
                                LLC website at looperandco.com. By accessing or
                                using this website, you agree to be bound by these terms. If
                                you do not agree, please do not use the website.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Use of Website
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                This website is provided for informational purposes about our
                                consulting services. You agree to use the site lawfully and
                                not to engage in any activity that disrupts its operation or
                                interferes with other users&rsquo; access.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Intellectual Property
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                All content on this website, including text, images, design,
                                logos, and branding, is the property of Looper &amp; Co. LLC
                                and is protected by applicable intellectual property laws. You
                                may not reproduce, distribute, or create derivative works from
                                this content without our prior written consent.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Contact Form Submissions
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                By submitting our contact form, you consent to being contacted
                                by Looper &amp; Co. regarding your inquiry. You represent
                                that the information you provide is accurate and that you have
                                the authority to share it.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Services &amp; Results
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                Descriptions of our services, methodologies, and estimated
                                outcomes are provided for informational purposes. Actual
                                results vary based on individual business circumstances,
                                complexity, and scope of engagement. Nothing on this website
                                constitutes a guarantee of specific results.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Limitation of Liability
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                Looper &amp; Co. LLC provides this website &ldquo;as
                                is&rdquo; without warranties of any kind, either express or
                                implied. We shall not be liable for any damages arising from
                                your use of or inability to use this website, including but
                                not limited to direct, indirect, incidental, or consequential
                                damages.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Governing Law
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                These terms are governed by and construed in accordance with
                                the laws of the State of Oregon, without regard to its
                                conflict of law provisions.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Changes to These Terms
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                We reserve the right to update these Terms of Service at any
                                time. Changes will be posted on this page with an updated
                                revision date. Your continued use of the website constitutes
                                acceptance of any updated terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-headline text-2xl text-deep-forest mb-4">
                                Contact
                            </h2>
                            <p className="font-body text-secondary leading-relaxed">
                                Looper &amp; Co. LLC
                                <br />
                                <a
                                    href="mailto:hello@looperandco.com"
                                    className="text-deep-forest underline underline-offset-2 hover:text-primary-fixed transition-colors duration-300"
                                >
                                    hello@looperandco.com
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
