import React, { Component } from 'react';
import './App.css';
import CardContainer from './containers/CardContainer'
import Navbar from './components/Navbar'
import DetailContainer from './containers/DetailContainer'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const style = {
  page: {
    backgroundColor:'rgb(248, 242, 236)'
  }
}


class App extends Component {
  render() {
    return (
      <div className="App" style={style.page}>
        <Router>
          <Switch>
            <div>
              <Navbar />
              <Route exact path='/' component={CardContainer} />
              <Route path='/:suit' component={DetailContainer} />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
