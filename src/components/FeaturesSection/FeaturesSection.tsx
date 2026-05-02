import FeatureCard from '../FeatureCard/FeatureCard'
import styles from './FeaturesSection.module.css'

const features = [
  {
    id: 'passions',
    illustration: '/assets/illustration-passions.svg',
    title: 'Indulge your passions',
    description:
      "Your passions shouldn't be just for the weekend. Earn a living doing what you love.",
  },
  {
    id: 'financial-freedom',
    illustration: '/assets/illustration-financial-freedom.svg',
    title: 'Gain financial freedom',
    description:
      "Start making money work for you. There's nothing quite like earning while you sleep.",
  },
  {
    id: 'lifestyle',
    illustration: '/assets/illustration-lifestyle.svg',
    title: 'Choose your lifestyle',
    description:
      "Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.",
  },
  {
    id: 'work-anywhere',
    illustration: '/assets/illustration-work-anywhere.svg',
    title: 'Work from anywhere',
    description:
      "Selling online means not being pinned down. Want to work AND travel? Go for it!",
  },
]

function FeaturesSection() {
  return (
    <section className={styles.features} aria-labelledby="features-heading">
      <h2 id="features-heading" className="srOnly">
        Benefits
      </h2>
      <ul className={styles.grid}>
        {features.map((feature) => (
          <li key={feature.id}>
            <FeatureCard
              illustration={feature.illustration}
              title={feature.title}
              description={feature.description}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FeaturesSection
