class App extends React.Component {
  constructor() {
    super()
    this.state = {movies: []}
  }




  render() {
    return(
      <div>
        <h2>Looker Upper a Movie!</h2>
          <SearchBar />

      </div>

    )
  }
}
