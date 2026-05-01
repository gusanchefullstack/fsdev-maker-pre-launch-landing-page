import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '../componentes/Header/Header'
import HeroSection from '../componentes/HeroSection/HeroSection'
import FeaturesSection from '../componentes/FeaturesSection/FeaturesSection'
import PricingSection from '../componentes/PricingSection/PricingSection'
import NotifySection from '../componentes/NotifySection/NotifySection'

describe('Header', () => {
  it('renders the Maker logo', () => {
    render(<Header />)
    expect(screen.getByAltText('Maker')).toBeInTheDocument()
  })

  it('has a link to homepage', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /maker home/i })).toBeInTheDocument()
  })
})

describe('HeroSection', () => {
  it('renders the hero heading', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('contains the word "love" with accent styling', () => {
    render(<HeroSection />)
    expect(screen.getByText('love')).toBeInTheDocument()
  })

  it('renders descriptive subtitle text', () => {
    render(<HeroSection />)
    expect(screen.getByText(/9-5 grind/i)).toBeInTheDocument()
  })
})

describe('FeaturesSection', () => {
  it('renders all four features', () => {
    render(<FeaturesSection />)
    expect(screen.getByText('Indulge your passions')).toBeInTheDocument()
    expect(screen.getByText('Gain financial freedom')).toBeInTheDocument()
    expect(screen.getByText('Choose your lifestyle')).toBeInTheDocument()
    expect(screen.getByText('Work from anywhere')).toBeInTheDocument()
  })

  it('renders as a list with 4 items', () => {
    render(<FeaturesSection />)
    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(4)
  })
})

describe('PricingSection', () => {
  it('renders the pricing heading', () => {
    render(<PricingSection />)
    expect(screen.getByRole('heading', { name: /our pricing plans/i })).toBeInTheDocument()
  })

  it('renders the Free plan card', () => {
    render(<PricingSection />)
    expect(screen.getByText('Dip your toe')).toBeInTheDocument()
    expect(screen.getByText('Free')).toBeInTheDocument()
  })

  it('renders the Paid plan card with price', () => {
    render(<PricingSection />)
    expect(screen.getByText('Dive right in')).toBeInTheDocument()
    expect(screen.getByText('$25.00')).toBeInTheDocument()
  })

  it('renders all 8 plan features (4 free + 4 paid)', () => {
    render(<PricingSection />)
    expect(screen.getByText('Unlimited products')).toBeInTheDocument()
    expect(screen.getByText('Basic analytics')).toBeInTheDocument()
    expect(screen.getByText('Limited marketplace exposure')).toBeInTheDocument()
    expect(screen.getByText('10% fee per transaction')).toBeInTheDocument()
    expect(screen.getByText('Custom domain')).toBeInTheDocument()
    expect(screen.getByText('Advanced analytics and reports')).toBeInTheDocument()
    expect(screen.getByText('High marketplace visibility')).toBeInTheDocument()
    expect(screen.getByText('5% fee per transaction')).toBeInTheDocument()
  })
})

describe('NotifySection', () => {
  it('renders the notification heading', () => {
    render(<NotifySection />)
    expect(screen.getByRole('heading', { name: /get notified when we launch/i })).toBeInTheDocument()
  })

  it('renders the email form', () => {
    render(<NotifySection />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get notified/i })).toBeInTheDocument()
  })
})
