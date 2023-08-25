import { render, screen } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'

it('Should test app component', () => {
  render(<App />)

  const button = screen.getByRole('button')
  expect(button).toBeEnabled()
})
