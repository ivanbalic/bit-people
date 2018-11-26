import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { About } from './pages/About/About';

const App = () => {
   

    return(
      <Switch>
        <Route path='/about' component={About}/>
        <Route path='/' component={HomePage}/>
      </Switch>
    );
}

export { App };
