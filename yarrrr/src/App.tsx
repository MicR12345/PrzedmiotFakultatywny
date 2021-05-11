import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';

import Home from './views/home/Home';
import YarrrrClicker from './views/YarrrrClicker/yarrrrClicker';
import Milestones from './views/milestones/Milestones';
import Page404 from './views/pageNotFound/PageNotFound';

const App =() => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/Clicker" component={YarrrrClicker}/>
          <Route path="/Milestones" component={Milestones}/>
          <Route component={Page404}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
