class SearchBar extends React.Component {
  constructor() {
    super()
  }

  handleSubmit(event) {
    event.preventDefault();
    let searchInput = this.refs.searchBar;
    this.props.movieInfo(searchInput.value);
    searchInput.value = '';
  }

  handleChange(event) {
    console.log(event)
    let searchInput = this.refs.searchBar
    this.props.movieInfo(searchInput.value)
  }

  render() {
    return(
      <section id="search">
        <form id="search-bar-form" onSubmit={this.handleSubmit.bind(this)}>
          <input ref="searchBar" type="text" id="new-search" name="title" placeholder="Look up a movie!" />
          <input type="submit" value="searchTitle" />
        </form>
      </section>
    )
  }
}
