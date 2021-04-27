import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';

import Home from './views/home/Home';

const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
