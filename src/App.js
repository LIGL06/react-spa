// Dependencies
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { createBrowserHistory } from 'history';
import { MuiThemeProvider } from '@material-ui/core/styles'
// Store
import configureStore from "./config/store";
// Styles
import theme from './config/theme';
// Constants
const history = createBrowserHistory();
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path="/login" />
            <Route path="/sign-up" />
            <Route path="/" />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  </Provider>
);

export default App;
