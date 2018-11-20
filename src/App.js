import React, { Component } from 'react';
import Navigation from './containers/navigation';
import logo from './logo.svg';
import './App.css';
import BoardContainer from './containers/board';
import ThreadContainer from './containers/thread';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation /> 
        <Switch>
          <Route path="/board/:slug" component={ChildBoardContainer}/>
          <Route path="/thread" component={ChildThreadContainer}/>
        </Switch>
      </div>
    );
  }
}

function ChildBoardContainer({match}) {
  //console.log(match.url);
  return (
    <BoardContainer />
  );
}

function ChildThreadContainer({match}) {
  return (
    <ThreadContainer />
  );
}

export default App;
