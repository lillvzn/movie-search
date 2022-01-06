import { Title, CollapseIcon, Options } from './styles'
import { useState } from 'react'
import CheckBox from 'components/checkbox'
import Loader from 'components/loader'

export default function ExpandableFilter({ show, items, title, isLoading }) {
  const [ isCollapsed, setIsCollapsed ] = useState(!show)

  return (
    <>
      <Title onClick={() => setIsCollapsed(!isCollapsed)}>
        <CollapseIcon>{isCollapsed ? '+' : '-'}</CollapseIcon>

        {title}
      </Title>

      {isLoading ? <Loader small /> : (
        <Options className={isCollapsed && 'collapsed'}>
          {items.map((item, index) => <CheckBox {...item} key={index} />)}
        </Options>
      )}
    </>
  )
}
