import React, { Component } from "react";
import "./App.css";
import ContextProvider from './providers/ContextProvider';
import Context from './config/Context';


class App extends Component {


  render() {
    return (
      <div>
        <h1>Data we consumed</h1>
        <hr/>
      <ContextProvider>
        <Context.Consumer>
        {val =><div>{val.posts.map(p=><div><h5>{p.title}</h5><br/></div>)}</div>}
        </Context.Consumer>
      </ContextProvider>
      </div>
    );
  }
}

export default App;
