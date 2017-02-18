class App extends React.Component {
  constructor() {
    super()
    this.state = {movies: []}
    this.movieInfo = this.movieInfo.bind(this)
  }

  movieInfo(searchTitle) {
    $.ajax({
      url: `http://www.omdbapi.com/?s=${searchTitle}`
    }).done((response) => {
      console.log(response)
      this.setState({movies: response.Search})
      // debugger
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
