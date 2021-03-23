import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ServiceAdd from './components/ServiceAdd.jsx';
import ServiceList from './components/ServiceList.jsx';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact >
          <Redirect to="/services" />
        </Route>
        <Route path="/services">
          <ServiceList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
