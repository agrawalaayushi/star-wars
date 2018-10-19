import React, { Component }  from 'react'
import { Header } from '../Header/header';
// import '../../styles/app.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

 
  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  componentWillMount() {
    this.props.history.push('/home');
  }

  render() {
    return (
      <div className="star-war-app">
        <Header />
      </div>
    );
  }
}


export default Home;
