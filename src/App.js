import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Dashboard } />
          <Route path="/login" component={ Login } />
          <Route path="/auth" component={ Auth }/>
        </Switch>
      </div>
    )
  }
}

export default App;
