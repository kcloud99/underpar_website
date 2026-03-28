import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PartnersPage from './pages/PartnersPage'
import MethodologyPage from './pages/MethodologyPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import ScrollToHash from './components/ScrollToHash'

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/methodology" element={<MethodologyPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
            </Routes>
        </BrowserRouter>
    )
}
