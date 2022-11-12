import React, { Component } from "react";
import styles from "./App.module.css";

import Header from "./Header";
import Body from "./Body";
class App extends Component {
  state = {
    current_item : 1,
    showing_something : true
  };
  movieClickedHandler = () => {
    this.setState({current_item : 0})
    this.setState({showingSomething : true})
  }

  placeClickedHandler = () => {
    this.setState({current_item : 1})
    this.setState({showingSomething : true})
  }
  isShowingSomething = () =>{
    return this.state.showing_something;
  }
  
  render() {
    return <div className={styles.container}>
            <Header showingSomething={this.isShowingSomething} userImg={this.state.img} onMovieClicked={this.movieClickedHandler} onPlaceClicked = {this.placeClickedHandler}/>
            <Body showingSomething={this.isShowingSomething} onMovieClicked={this.movieClickedHandler} onPlaceClicked = {this.placeClickedHandler} currentItem={this.state.current_item}/>
           </div>;
  }

}

export default App;
