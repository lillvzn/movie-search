import { useState } from 'react'
import { Wrapper, CheckBoxInput, Label } from './styles'

export default function CheckBox({ name }) {
  const [ isChecked, setIsChecked ] = useState(false)

  return (
    <Wrapper>
      <input
        type="checkbox"
        onChange={(event) => setIsChecked(event.target.checked)}
        hidden
      />

      <CheckBoxInput className={isChecked ? 'checked' : ''} role="button" />
      <Label>{name}</Label>
    </Wrapper>
  )
}
