import { useState } from 'react'
import {
  Wrapper,
  SearchContainer,
  CategoryTitle,
  FilterButton,
  MainSearchInput,
  YearInputContainer,
} from './styles'
import { breakPoints } from 'theme/sizes'
import SearchBar from 'components/searchbar'
import ExpandableFilter from 'components/expandablefilter'
import SearchIcon from 'images/search-icon-yellow.png'
import CalendarIcon from 'images/year-icon.png'

export default function SearchFilters({
  genres,
  ratings,
  languages,
  setKeyword,
  setYear,
  isLoading,
}) {
  const [ isOpen, setIsOpen ] = useState(window.innerWidth > breakPoints.large)

  return (
    <Wrapper>
      <SearchContainer className="search_inputs_cont" isOpen={isOpen}>
        <MainSearchInput>
          <SearchBar
            placeholder="Search for movies"
            icon={SearchIcon}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <FilterButton onClick={() => setIsOpen(!isOpen)} />
        </MainSearchInput>

        <YearInputContainer className={!isOpen && 'search_year_input_cont_invisible'}>
          <SearchBar
            type="number"
            placeholder="Year of release"
            icon={CalendarIcon}
            onChange={(e) => setYear(e.target.value)}
          />
        </YearInputContainer>
      </SearchContainer>

      <SearchContainer className='search_filters_cont' data-visibility={isOpen ? 'visible' : 'hidden'}>
        <CategoryTitle>Movie</CategoryTitle>
        
        <ExpandableFilter
          items={genres}
          show={true}
          title="Select genre(s)"
          isLoading={isLoading}
        />
        <ExpandableFilter items={ratings} title="Select min. vote" />
        <ExpandableFilter items={languages} title="Select language" />
      </SearchContainer>
    </Wrapper>
  )
}
