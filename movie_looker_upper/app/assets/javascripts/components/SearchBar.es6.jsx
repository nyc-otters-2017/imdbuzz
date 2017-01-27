class SearchBar extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("sdfsfs")
  }


  render() {
    return(
      <section id="search">
        <form id="search-bar-form" onSubmit={this.handleSubmit}>
          <input ref="searchBar" type="text" id="new-search" name="title" placeholder="Look up a movie!" />
          <input type="submit" value="Search" />
        </form>
      </section>
    )
  }
}
