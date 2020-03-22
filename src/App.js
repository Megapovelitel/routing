import React from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import Skate from './Skate'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Item from './PictureDetail'



function App() {
  return (<div className="App">
    <Router>
    
      <Nav />
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/skate' exact component={Skate}/>
      <Route path='/skate/:id' component={Item}/>
      </Switch>
   
    </Router> </div>
  );
}

export default App;
