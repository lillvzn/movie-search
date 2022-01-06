import styled from 'styled-components'
import { breakPoints } from 'theme/sizes'
import { primaryColor } from 'theme/colors'
import FilterIcon from 'images/filter-icon.png'

export const Wrapper = styled.div`
  margin-top: 35px;
`

export const SearchContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 3px;
  margin-bottom: 15px;

  &.search_filters_cont {
    padding: 20px;
    max-height: 1000px;
    overflow: hidden;
    visibility: visible;

    @media (max-width: ${breakPoints.medium - 1}px) {
      transition: max-height 0.5s ease-in-out, padding 0.5s, visibility 0.5s;

      &[data-visibility="hidden"] {
        padding: 0 20px;
        max-height: 0;
        visibility: hidden;
        transition: max-height 0.5s ease-in-out, padding 0.8s, visibility 0.5s;
      }
    }
  }
  
  &.search_inputs_cont {
    background: transparent;
    padding: 0;
  }

  @media (min-width: ${breakPoints.medium}px) {
    &.search_filters_cont {
      /*transition: height .5s, padding .4s;*/
    }

    &.search_inputs_cont {
      background: #fff;
      padding: 20px;
    }
  }
`

export const YearInputContainer = styled.div`
  overflow: hidden;

  @media (max-width: ${breakPoints.medium - 1}px) {
    max-height: 50px;
    transition: max-height 0.5s ease-in-out;

    &.search_year_input_cont_invisible {
      max-height: 0;
    }
  }
`

export const MainSearchInput = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-end;
  margin: 10px 0;

  @media (min-width: ${breakPoints.medium}px) {
    display: block;
  }
`

export const CategoryTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`

export const FilterButton = styled.button`
  color: ${primaryColor};
  cursor: pointer;
  background-color: transparent;
  border-width: 0;
  border-bottom: 2px solid;
  display: block;
  outline: 0;
  background-image: url(${FilterIcon});
  background-repeat: no-repeat;
  background-size: 35px 35px;
  background-position: center;
  width: 40px;
  height: 40px;

  @media (min-width: ${breakPoints.medium}px) {
    display: none;
  }
`
