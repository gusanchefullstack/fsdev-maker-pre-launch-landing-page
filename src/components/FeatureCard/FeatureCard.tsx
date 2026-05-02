import styles from './FeatureCard.module.css'

interface FeatureCardProps {
  illustration: string
  title: string
  description: string
}

function FeatureCard({ illustration, title, description }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper} aria-hidden="true">
        <img src={illustration} alt="" className={styles.icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}

export default FeatureCard
