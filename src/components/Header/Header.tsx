import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" aria-label="Maker home">
        <img
          src="/assets/logo.svg"
          alt="Maker"
          className={styles.logo}
          width="89"
          height="32"
        />
      </a>
    </header>
  )
}

export default Header
