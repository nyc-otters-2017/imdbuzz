class Return extends React.Component {
  constructor() {
    super()

  }

  render() {
    let { Title, Year, Genre, Director, imdbRating, Poster } = this.props.data
    return(
      <li className="movie-data">
        <img className="poster" src={Poster} alt="" />
        <div className="movie-content">
          <p>
            <span className="movie-title">Title: {Title}</span>
            <span className="movie-year">Year Released: {Year}</span>
            <span className="movie-genre">Genre: {Genre}</span>
            <span className="movie-director">Director: {Director}</span>
            <span className="movie-rating">IMDB Rating: {imdbRating}</span>
          </p>
        </div>
      </li>
    )
  }
}
