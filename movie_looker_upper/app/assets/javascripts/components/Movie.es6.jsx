class Movie extends React.Component {
  constructor() {
    super()
    this.state = { }
  }

  componentDidMount() {
    $.ajax({
      url: `http://www.omdbapi.com/?i=${this.props.imdb_id}&plot=short&r=json`
    }).done((response) => {
      console.log(response)
      this.setState( response )
    })

  }

  render() {
    return(
      <section id="single-movie">
      <h2>Movie Lookered Uppered</h2>
      <p>
        <span className="movie-title"><strong>Title:</strong> {this.state.Title}</span><br />
        <span className="movie-release"><strong>Year Released:</strong> {this.state.Released}</span><br />
        <span className="movie-genre"><strong>Genre:</strong> {this.state.Genre}</span><br />
        <span className="movie-director"><strong>Director:</strong> {this.state.Director}</span><br />
        <span className="movie-actors"><strong>Actors:</strong> {this.state.Actors}</span><br />
        <span className="movie-award"><strong>Awards:</strong> {this.state.Awards}</span><br />
        <span className="movie-plot"><strong>Plot:</strong> {this.state.Plot}</span><br />
        <img className="movie-poster" src={this.state.Poster} /><br />
      </p>
      </section>


    )
  }
}
