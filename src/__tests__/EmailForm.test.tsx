import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import EmailForm from '../componentes/EmailForm/EmailForm'

describe('EmailForm', () => {
  it('renders the email input and submit button', () => {
    render(<EmailForm />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /get notified/i })).toBeInTheDocument()
  })

  it('shows "Oops! Please add your email" when submitted with empty field', async () => {
    const user = userEvent.setup()
    render(<EmailForm />)

    await user.click(screen.getByRole('button', { name: /get notified/i }))

    expect(screen.getByText('Oops! Please add your email')).toBeInTheDocument()
  })

  it('shows error when submitted with whitespace only', async () => {
    const user = userEvent.setup()
    render(<EmailForm />)

    await user.type(screen.getByRole('textbox', { name: /email address/i }), '   ')
    await user.click(screen.getByRole('button', { name: /get notified/i }))

    expect(screen.getByText('Oops! Please add your email')).toBeInTheDocument()
  })

  it('shows "Oops! That doesn\'t look like an email address" for invalid format', async () => {
    const user = userEvent.setup()
    render(<EmailForm />)

    await user.type(screen.getByRole('textbox', { name: /email address/i }), 'notanemail')
    await user.click(screen.getByRole('button', { name: /get notified/i }))

    expect(screen.getByText("Oops! That doesn't look like an email address")).toBeInTheDocument()
  })

  it('shows error for email missing domain extension', async () => {
    const user = userEvent.setup()
    render(<EmailForm />)

    await user.type(screen.getByRole('textbox', { name: /email address/i }), 'user@domain')
    await user.click(screen.getByRole('button', { name: /get notified/i }))

    expect(screen.getByText("Oops! That doesn't look like an email address")).toBeInTheDocument()
  })

  it('clears the input and shows no error after valid email submission', async () => {
    const user = userEvent.setup()
    render(<EmailForm />)

    await user.type(screen.getByRole('textbox', { name: /email address/i }), 'user@example.com')
    await user.click(screen.getByRole('button', { name: /get notified/i }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toHaveValue('')
  })

  it('marks input as aria-invalid when there is an error', async () => {
    const user = userEvent.setup()
    render(<EmailForm />)

    await user.click(screen.getByRole('button', { name: /get notified/i }))

    expect(screen.getByRole('textbox', { name: /email address/i })).toHaveAttribute('aria-invalid', 'true')
  })

  it('marks input as aria-valid when no error', () => {
    render(<EmailForm />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toHaveAttribute('aria-invalid', 'false')
  })
})
