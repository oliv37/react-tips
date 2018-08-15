import React from 'react';
import {
    Route,
    Switch,
    Redirect,
  } from 'react-router-dom';
import NavItem from 'components/NavItem.component';
import Example0 from './examples/Example0.component';
import Example1 from './examples/Example1.component';
import Example2 from './examples/Example2.component';

const ListsKeys = ({match}) => (
    <React.Fragment>
        <ul className="nav nav-tabs nav-fill">
            <NavItem to={`${match.url}/0`} label="Basic Example" />
            <NavItem to={`${match.url}/1`} label="Inputs Example" />
            <NavItem to={`${match.url}/2`} label="Multiple Lists" />
        </ul>

        <Switch>
            <Route path={`${match.url}/0`} component={Example0} />
            <Route path={`${match.url}/1`} component={Example1} />
            <Route path={`${match.url}/2`} component={Example2} />
            <Redirect to={`${match.url}/0`} />
        </Switch>
    </React.Fragment>
);

export default ListsKeys;
