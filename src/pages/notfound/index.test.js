import { render } from '@testing-library/react'
import NotFound from './index'

describe('Not found page', () => {
  it('renders successfully', () => {
    const component = render(<NotFound />)
    const headingText = 'Not Found'
    const paragraphText = 'Oops! The page that you are trying to access is not available.'

    expect(component.getByRole('heading')).toBeTruthy()
    expect(component.getByText(headingText)).toBeTruthy()
    expect(component.getByText(paragraphText)).toBeTruthy()
  })
})
