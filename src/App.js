import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

import './App.css';

const HatsPag = () => (
<div>
  <h1>HATS PAGE</h1>
</div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPag} />
      </Switch>
    </div>
  );
}

export default App;
