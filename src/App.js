import React, { Component } from 'react';
import './App.css';
import CardContainer from './containers/CardContainer'
import Navbar from './components/Navbar'
import DetailContainer from './containers/DetailContainer'
import ResultContainer from './containers/ResultContainer'
import ReadingContainer from './containers/ReadingContainer'


import { Route, Switch } from 'react-router-dom'

const style = {
  page: {
    backgroundColor:'rgb(248, 242, 236)',
    minHeight:'100%'
  }
}

const pages = [
  {
    path:'/',
    component:CardContainer,
  },
  {
    path:'/search',
    component:ResultContainer,
  },
  {
    path:'/reading',
    component:ReadingContainer,
  },
  {
    path:'/:suit',
    component:DetailContainer,
  },
]


class App extends Component {
  render() {
    const routes = pages.map(page => {
      return <Route exact path={page.path} component={page.component} />
    })
    return (
      <div className="App" style={style.page}>
        <Navbar />
        <Switch>
          {routes}
        </Switch>
      </div>
    );
  }
}

export default App;
