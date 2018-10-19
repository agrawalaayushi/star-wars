import React, { Component }  from 'react'
// import '../../styles/app.scss';

class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  //-----------------------------------
  // Views
  //-----------------------------------

  getLoaderView() {
    return (
      <div>Loading</div>
    )
  }

  getEmptyStateView() {
    return (
      <div>Empty</div>
    )
  }



  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  componentWillMount() {
    // this.props.history.push('/movie-detail');

  }


  componentWillReceiveProps(newProps) {
  
  }

  render() {
    return (
      <div className="movie-list">
        This is movie list
      </div>
    );
  }
}


export default MovieDetailPage;
