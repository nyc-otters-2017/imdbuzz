class Return extends React.Component {
  constructor() {
    super()

  }

  render() {
    let { Title, Year, Poster } = this.props.data
    return(
      <div className="movie-content">
        <li className="movie-data">
            <p>
              <span className="movie-title">Title: {Title}</span><br />
              <span className="movie-year">Year Released: {Year}</span><br />
            </p>
          <img className="poster" src={Poster} alt="" />
        </li>
      </div>
    )
  }
}
