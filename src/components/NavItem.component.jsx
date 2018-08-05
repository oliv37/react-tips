import React from 'react';
import {
    Route,
    Link
  } from 'react-router-dom';

const NavItem = ({to, label}) => (
    <Route
        path={to}
        children={({ match }) => (
        <li className="nav-item">
            <Link 
                to={to} 
                className={match ? "nav-link active" : "nav-link"}
            >
                {label}
            </Link>
        </li>
        )}
    />
);

export default NavItem;
