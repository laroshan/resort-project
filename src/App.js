import React, { Component } from 'react'
import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import {Route,Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        
         <Switch>
         <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Room}/>
        <Route exact path="/rooms/:roomid" component={SingleRoom}/>
        <Route component={Error}/>
         </Switch>
       
        
         
      </>
    )
  }
}

export default App;

