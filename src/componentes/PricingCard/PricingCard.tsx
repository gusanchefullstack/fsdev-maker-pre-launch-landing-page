import styles from './PricingCard.module.css'

interface PricingCardProps {
  variant: 'free' | 'paid'
  planLabel: string
  planName: string
  price: string
  priceNote?: string
  features: string[]
  icon: string
}

function PricingCard({
  variant,
  planLabel,
  planName,
  price,
  priceNote,
  features,
  icon,
}: PricingCardProps) {
  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <img src={icon} alt="" aria-hidden="true" className={styles.icon} />
      <h3 className={styles.planLabel}>{planLabel}</h3>
      <p className={styles.planDescription}>
        {variant === 'free'
          ? "Just getting started? No problem at all! Our free plan will take you a long way."
          : "Ready for the big time? Our paid plan will help you take your business to the next level."}
      </p>
      <div className={styles.priceRow}>
        <span className={styles.price}>{price}</span>
        {priceNote && <span className={styles.priceNote}>{priceNote}</span>}
      </div>
      <ul className={styles.featureList} aria-label={`${planName} plan features`}>
        {features.map((feature) => (
          <li key={feature} className={styles.featureItem}>
            <img
              src="/assets/icon-check.svg"
              alt=""
              aria-hidden="true"
              className={styles.checkIcon}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default PricingCard
