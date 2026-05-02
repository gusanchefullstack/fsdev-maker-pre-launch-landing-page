import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* Desktop side illustrations */}
      <img
        src="/assets/illustration-hero-left.svg"
        alt=""
        aria-hidden="true"
        className={styles.illustrationLeft}
      />

      <div className={styles.content}>
        <h1 id="hero-heading" className={styles.heading}>
          Get paid for the work you{' '}
          <em className={styles.accent}>love</em> to do.
        </h1>
        <p className={styles.subheading}>
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you're looking to escape the rat race or set up a
          side hustle, we've got you covered.
        </p>
        <img
          src="/assets/icon-scroll.svg"
          alt="Scroll down"
          className={styles.scrollIcon}
        />
      </div>

      <img
        src="/assets/illustration-hero-right.svg"
        alt=""
        aria-hidden="true"
        className={styles.illustrationRight}
      />

      {/* Mobile illustration */}
      <img
        src="/assets/illustration-hero-mobile.png"
        alt=""
        aria-hidden="true"
        className={styles.illustrationMobile}
      />
    </section>
  )
}

export default HeroSection
