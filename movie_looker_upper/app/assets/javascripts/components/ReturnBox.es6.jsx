class ReturnBox extends React.Component {
  render() {
    return(
      <div className="display-movies">
        <ul>
          {
            console.log(this.props)
            // this.props.movieDisplay.map((movie, i) => {
            //   return <Return key={i} data={movie} />
            // })
          }
        </ul>
      </div>
    )
  }
}
