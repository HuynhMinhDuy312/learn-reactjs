import React from 'react';
import { Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import TodoFeture from './features/Todo/pages';
import AlbumFeature from './features/Album/pages'
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      Home Page
      <p><NavLink to="/todos" activeClassName='active-menu'>Todos</NavLink></p>
      <p><NavLink to="/album" activeClassName='active'>Album</NavLink></p>
      <Switch>
        <Redirect from="/home" to="/" />
        <Redirect from="/post-list/:postId" to="/posts/:postId" />

        <Route path="/todos" component={TodoFeture} />
        <Route path="/album" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
