import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import Kitchen from './components/views/Kitchen/Kitchen';
import Dashboard from './components/views/Dashboard/Dashboard';
import Events from './components/views/Events/Events';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Booking from './components/views/Booking/Booking';

import Provider from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#2B4C6F'},
    //secondary: {main: '#11cb5f'},
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}> 
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/event/new'} component={Events} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={Booking} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
