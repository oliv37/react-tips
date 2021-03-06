import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
  } from 'react-router-dom';
  import { ToastContainer } from 'react-toastify';

  import NavItem from './NavItem.component';
  import ListsKeys from './keys/ListsKeys.component';
  import Selectors from './selectors/Selectors.component';

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <ul className="nav nav-pills my-2">
                <NavItem to="/keys" label="Lists and Keys" />
                <NavItem to="/selectors" label="Selectors (with redux)" />
            </ul>

            <Switch>
                <Route path="/keys" component={ListsKeys} />
                <Route path="/selectors" component={Selectors} />
                <Redirect to="/keys" />
            </Switch>

            <ToastContainer autoClose={3000} hideProgressBar={true} />
        </React.Fragment>
    </BrowserRouter>
);

export default App;
