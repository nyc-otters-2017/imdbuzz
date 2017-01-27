class App extends React.Component {
  constructor() {
    super()
    this.state = {movies: []}
    this.movieInfo = this.movieInfo.bind(this)
  }

  movieInfo(title) {
    $.ajax({
      url: `http://www.omdbapi.com/?s${title}`
    }).done((response) => {
      console.log(response)
      debugger
      this.setState({movies: response.SearchBar})
    })
  }

  render() {
    console.log(this.state.movies)
    return(
      <div>
        <h2>Looker Upper a Movie!</h2>
          <SearchBar
            movieInfo={this.movieInfo}
          />
          <ReturnBox
            movieDisplay={this.state.movies}
          />
      </div>

    )
  }
}
