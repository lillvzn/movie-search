import styled from 'styled-components'
import { sideNavBar, primaryColor } from 'theme/colors'

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
`

export const CheckBoxInput = styled.div`
  position: relative;
  border: 1px solid ${sideNavBar};
  height: 16px;
  width: 16px;
  border-radius: 3px;
  cursor: pointer;

  &.checked::before {
    content: '';
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${primaryColor};
    height: 12px;
    width: 12px;
  }
`

export const Label = styled.span`
  font-weight: lighter;
  cursor: pointer;
`
