import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PainPoints from '../components/PainPoints'
import Services from '../components/Services'
import LooperExplainer from '../components/LooperExplainer'
import WhatWeBuild from '../components/WhatWeBuild'
import Training from '../components/Training'
import HowItWorks from '../components/HowItWorks'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Looper & Co. — Operations Automation Consultancy | Bend, Oregon</title>
                <meta name="description" content="Looper & Co. — Operations automation consultancy based in Bend, Oregon. We help construction, trades, and industrial services teams streamline workflows with AI and automation." />
                <link rel="canonical" href="https://looperandco.com/" />
            </Helmet>
            <Header />
            <main>
                <Hero />
                <PainPoints />
                <Services />
                <LooperExplainer />
                <WhatWeBuild />
                <Training />
                <HowItWorks />
                <ContactCTA />
            </main>
            <Footer />
        </>
    )
}
