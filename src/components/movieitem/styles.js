import styled from 'styled-components'
import { primaryColor, fontColor } from 'theme/colors'
import { breakPoints } from 'theme/sizes'

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 20px;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 20px;

  @media (max-width: ${breakPoints.small}px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

export const Information = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
`

export const Title = styled.div`
  font-size: 1.6em;
  color: ${fontColor};
  font-weight: bold;
  overflow: hidden;

  @media (max-width: ${breakPoints.large}px) {
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
`

export const Category = styled.small`
  color: ${primaryColor};
  font-weight: bold;
  margin-top: 10px;
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: flex-start;
  gap: 20px;
`

export const ScoreBubble = styled.div`
  border-radius: 3px;
  background-color: ${primaryColor};
  padding: 5px;
  color: #fff;
`

export const Description = styled.p`
  @media (min-width: ${breakPoints.small}px) {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    white-space: normal;
    position: relative;

    &:after {
      content: ' ';
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white);
      position: absolute;
      width: 100%;
      height: 30px;
      z-index: 1;
      bottom: 0;
      left: 0;
    }
  }
`

export const Date = styled.footer`
  color: ${primaryColor};
  font-weight: lighter;
  align-self: flex-end;
`

export const Image = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: auto;

  @media (min-width: ${breakPoints.small}px) {
    min-height: 100%;
  }
`
