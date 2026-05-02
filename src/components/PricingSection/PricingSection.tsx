import PricingCard from '../PricingCard/PricingCard'
import styles from './PricingSection.module.css'

const freePlan = {
  variant: 'free' as const,
  planLabel: 'Dip your toe',
  planName: 'Free',
  price: 'Free',
  icon: '/assets/icon-free.svg',
  features: [
    'Unlimited products',
    'Basic analytics',
    'Limited marketplace exposure',
    '10% fee per transaction',
  ],
}

const paidPlan = {
  variant: 'paid' as const,
  planLabel: 'Dive right in',
  planName: 'Paid',
  price: '$25.00',
  priceNote: '/month',
  icon: '/assets/icon-paid.svg',
  features: [
    'Custom domain',
    'Advanced analytics and reports',
    'High marketplace visibility',
    '5% fee per transaction',
  ],
}

function PricingSection() {
  return (
    <section className={styles.pricing} aria-labelledby="pricing-heading">
      <div className={styles.intro}>
        <h2 id="pricing-heading" className={styles.heading}>
          Our pricing plans
        </h2>
        <p className={styles.description}>
          We only make money when our creators make money. Our plans are always
          affordable, and it's completely free to get started.
        </p>
      </div>
      <div className={styles.cards}>
        <PricingCard {...freePlan} />
        <PricingCard {...paidPlan} />
      </div>
    </section>
  )
}

export default PricingSection
