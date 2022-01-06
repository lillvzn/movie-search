import NotFoundImage from 'images/220x330.png'
import {
  Wrapper,
  Title,
  Category,
  Header,
  ScoreBubble,
  Information,
  Description,
  Date,
  Image
} from './styles'

export default function MovieItem({
  title,
  poster_path,
  vote_average,
  genres,
  overview,
  release_date
}) {
  return (
    <Wrapper>
      <Image
        src={`${process.env.REACT_APP_IMAGES_URL}/${poster_path}`}
        alt={title}
        loading="lazy"
        onError={(e) => (e.target.src = NotFoundImage)}
      />

      <Information>
        <Header>
          <Title>{title}</Title>
          <ScoreBubble>{vote_average}</ScoreBubble>
        </Header>

        <Category>{genres}</Category>

        <Description>{overview}</Description>

        <Date>{release_date}</Date>
      </Information>
    </Wrapper>
  )
}
