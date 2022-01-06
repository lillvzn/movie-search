import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import GrouppedMenu from './'

describe('Groupped menu component', () => {
  it('render title and links', () => {
    const props = {
      title: 'Menu',
      links: [
        { to: '/1', title: 'Link 1' },
        { to: '/2', title: 'Link 2' },
      ],
    }

    const component = render(
      <BrowserRouter>
        <GrouppedMenu {...props} />
      </BrowserRouter>
    )

    const links = component.getAllByRole('link')
    const mappedLinks = links.map(({ text, href }) => {
      const to = href.replace('http://localhost', '')

      return { to, title: text }
    })

    expect(links).toHaveLength(props.links.length)
    expect(mappedLinks).toEqual(props.links)
    expect(component.getByText(props.title)).toBeTruthy()
  })
})
