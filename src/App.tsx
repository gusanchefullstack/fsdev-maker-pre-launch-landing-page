import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import PricingSection from './components/PricingSection/PricingSection'
import NotifySection from './components/NotifySection/NotifySection'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <NotifySection />
      </main>
    </>
  )
}

export default App
