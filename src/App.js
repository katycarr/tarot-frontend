import React, { Component } from 'react';
import './App.css';
import CardContainer from './containers/CardContainer'
import Navbar from './components/Navbar'
import DetailContainer from './containers/DetailContainer'
import ResultContainer from './containers/ResultContainer'


import { Route, Switch } from 'react-router-dom'

const style = {
  page: {
    backgroundColor:'rgb(248, 242, 236)',
    minHeight:'100%'
  }
}


class App extends Component {
  render() {
    return (
      <div className="App" style={style.page}>
        <Navbar />
        <Switch>
          <Route exact path='/' component={CardContainer} />
          <Route exact path='/search' component={ResultContainer} />
          <Route exact path='/:suit' component={DetailContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
