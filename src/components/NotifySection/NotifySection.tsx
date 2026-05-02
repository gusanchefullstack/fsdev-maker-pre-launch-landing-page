import EmailForm from '../EmailForm/EmailForm'
import styles from './NotifySection.module.css'

function NotifySection() {
  return (
    <footer className={styles.notify}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Get notified when we launch</h2>
        <EmailForm />
      </div>
    </footer>
  )
}

export default NotifySection
