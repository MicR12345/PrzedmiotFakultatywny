import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';

import Movie from './views/movie/Movie';
import Home from './views/home/Home';
import Page404 from './views/page404/Page404';
import store from './store';

import './App.css';

const  App= () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={ }>
          <Switch>
             <Route path="/movie/:id" component={Movie}/>
             <Route path="/" component={Home} exact/>
             <Route path="*" component={Page404}/>
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;