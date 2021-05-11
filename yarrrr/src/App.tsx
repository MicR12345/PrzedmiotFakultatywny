import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';

import Home from './views/home/Home';
import YarrrrClicker from './views/YarrrrClicker/yarrrrClicker';

const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/Clicker" component={YarrrrClicker}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
