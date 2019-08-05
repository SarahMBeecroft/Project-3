import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import AvatarImg from './components/AvatarImg';





import Search from './pages/Search';
import Brewery from './pages/Brewery';
import Results from './pages/Results';
import myBeers from './pages/myBeers';
// AppContainerContainer links the Redux state with React
import AppContainer from './components/AppContainer/AppContainerContainer';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import reducers from './reducers';
import authGuard from './components/HOCs/authGuard';
// import noMatch from './pages/noMatch';
import './App.css'
import TopBeers from './pages/topBeers';
import AddBarPage from './pages/AddBar';



axios.defaults.withCredentials = true;

function App() {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
    <Router>
    <AppContainer>
      <div>
        {/* Navbar can go here */}
        
        <Switch>
          {/* <Route exact path='/' component={Login} /> */} {/* User will only hit this route if they aren't already logged in */}
          <Route exact path='/' component={Search} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path="/dashboard" component={authGuard(Search)} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/brewery' component={Brewery} />
          <Route exact path='/results' component={Results} />
          <Route exact path='/mybeers' component={myBeers} />
          <Route exact path='/mybeers/:id' component={myBeers} />
          <Route exact path='/topbeers' component={TopBeers} />
          <Route exact path="/addbar" component={AddBarPage} />
          {/* <Route component={noMatch} /> */}
        </Switch>
      {/* Footer can go here */}
      </div>
      </AppContainer>
    </Router>
    </Provider>
  );
}

export default App;
