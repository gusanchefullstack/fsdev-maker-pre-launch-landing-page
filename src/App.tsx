import Header from './componentes/Header/Header'
import HeroSection from './componentes/HeroSection/HeroSection'
import FeaturesSection from './componentes/FeaturesSection/FeaturesSection'
import PricingSection from './componentes/PricingSection/PricingSection'
import NotifySection from './componentes/NotifySection/NotifySection'

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
