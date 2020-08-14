import React, { Component } from 'react'
import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

class App extends Component {
  render() {
    return (
      <>
        <h4>hello</h4>
        <Home/> 
         <Room/>
        <SingleRoom/>
        <Error/> 
      </>
    )
  }
}

export default App;

