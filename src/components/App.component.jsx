import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
  } from 'react-router-dom';

  import NavItem from './NavItem.component';
  import ListsKeys from './keys/ListsKeys.component';

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <ul className="nav nav-pills">
                <NavItem to="/keys" label="Lists and Keys" />
                <NavItem to="/selectors" label="Selectors (with redux)" />
            </ul>

            <Switch>
                <Route path="/keys" component={ListsKeys} />
                <Route path="/selectors" render={() => <div>Selectors</div>} />
                <Redirect to="/keys" />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

export default App;
