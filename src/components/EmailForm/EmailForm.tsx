import { useState } from 'react'
import styles from './EmailForm.module.css'

type ValidationError = 'empty' | 'invalid' | null

function validateEmail(value: string): ValidationError {
  if (value.trim() === '') return 'empty'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(value.trim())) return 'invalid'
  return null
}

const ERROR_MESSAGES: Record<NonNullable<ValidationError>, string> = {
  empty: 'Oops! Please add your email',
  invalid: "Oops! That doesn't look like an email address",
}

function EmailForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<ValidationError>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const validationError = validateEmail(email)
    setError(validationError)
    if (!validationError) {
      setEmail('')
    }
  }

  const inputId = 'notify-email'
  const errorId = 'notify-email-error'

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Email notification signup"
    >
      <div className={styles.fieldWrapper}>
        <label htmlFor={inputId} className={styles.visuallyHidden}>
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={errorId}
          autoComplete="email"
        />
        <p
          id={errorId}
          className={`${styles.errorMessage} ${!error ? styles.errorMessageHidden : ''}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {error ? ERROR_MESSAGES[error] : ''}
        </p>
      </div>
      <button type="submit" className={styles.button}>
        Get notified
      </button>
    </form>
  )
}

export default EmailForm
