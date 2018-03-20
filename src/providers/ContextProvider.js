import React, { Component, createContext } from "react";
import Context from '../config/Context';

class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  getDataFromAPI() {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(response => response.json())
      .then(json => this.setState({items: json}))
  }

  componentWillMount() {
    this.getDataFromAPI();
  }

  render() {
    return (
      <Context.Provider value={{posts: this.state.items}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
