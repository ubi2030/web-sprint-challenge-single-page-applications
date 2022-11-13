import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './components/Home';
import Pizza from './components/pizza';

export default function App() {

return (
  <div className='App'>
    <nav>
      <h1 className='store-header'>BloomTech Eats</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/Pizza'>Order Pizza</Link>
      </div>
    </nav>

<Switch>
  <Route path='/Pizza'>
    <Pizza />
  </Route>

  <Route path='/'>
    <Home />
  </Route>

</Switch>
</div>)
}
