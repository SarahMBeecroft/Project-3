import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Results from './pages/Results';
import myBeers from './pages/myBeers';
import NavBar from './components/NavBar';
import AvatarImg from './components/AvatarImg';
import ResponsiveDrawer from './components/Drawer';


// import noMatch from './pages/noMatch';
import './App.css'


function App() {
  return (
    <Router>
      <div>
        <AvatarImg />
        <ResponsiveDrawer />
        <Switch>
          {/* <Route exact path='/' component={Login} /> */} {/* User will only hit this route if they aren't already logged in */}
          <Route exact path='/' component={Search} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/results' component={Results} />
          <Route exact path='/mybeers' component={myBeers} />
          <Route exact path='/mybeers/:id' component={myBeers} />
          {/* <Route component={noMatch} /> */}
        </Switch>
      {/* Footer can go here */}
      </div>
    </Router>
  );
}

export default App;
