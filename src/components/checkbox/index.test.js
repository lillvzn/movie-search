import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Checkbox from './'

describe('Checkbox component', () => {
  beforeEach(() => {
    render(<Checkbox name="example checkbox" />)
  })

  it('renders correctly', () => {
    const [ checkbox ] = document.getElementsByTagName('input')
    const [ styledCheckbox ] = document.getElementsByTagName('div')
    
    expect(checkbox).toBeTruthy()
    expect(checkbox.checked).toBe(false)
    expect(checkbox.hidden).toBe(true)
    expect(screen.getByLabelText('example checkbox')).toBeTruthy()
    expect(styledCheckbox).toBeTruthy()
    expect(styledCheckbox.classList.contains('checked')).toBe(false)
  })

  it('state changes when checkbox is checked', async () => {
    const { getByRole } = screen

    fireEvent.click(getByRole('button'))

    await waitFor(() => {
      const styledCheckbox = getByRole('button')
      const [ checkbox ] = document.getElementsByTagName('input')

      expect(styledCheckbox.classList.contains('checked')).toBe(true)
      expect(checkbox.checked).toBe(true)
    })
  })
})
