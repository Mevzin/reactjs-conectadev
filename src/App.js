import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SingIn from './pages/SingIn';
import Home from './pages/home';
import theme from './theme';


function App() {
  return (
  <ThemeProvider theme={theme}>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route> 
          <Route path="/sing-in">
            <SingIn/>
          </Route>
          <Route path="*">
            <h1>Page not found 404</h1>
          </Route>
        </Switch>
    </Router>
  </ThemeProvider>
  );
}

export default App;
