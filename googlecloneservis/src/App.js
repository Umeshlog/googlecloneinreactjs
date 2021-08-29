import  React from 'react';
import Home from './components/Home';
import Search from './components/Search';
import './App.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
function App() {
  return (
   <Router>
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/Search" exact component={Search} />
     </Switch>
   </Router>
  );
}

export default App;
