import Header from '../components/Header'
import Hero from '../components/Hero'
import PainPoints from '../components/PainPoints'
import Services from '../components/Services'
import WhatWeBuild from '../components/WhatWeBuild'
import HowItWorks from '../components/HowItWorks'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <PainPoints />
                <Services />
                <WhatWeBuild />
                <HowItWorks />
                <ContactCTA />
            </main>
            <Footer />
        </>
    )
}
