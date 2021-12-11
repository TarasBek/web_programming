import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { LinkingWrapper } from './Navigation.styles';
import Home from '../Home/Home';

const Navigation = () => (
    <Router>
        <LinkingWrapper>
        <ul>
            <li>
            <NavLink exact to="/" activeClassName="selected">Home</NavLink>
            </li>
            <li>
                <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
            </li>
            <li>
                <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
            </li>
            <li>
            <NavLink exact to="/contact" activeClassName="selected">Contact</NavLink>
            </li>
        </ul>
        <Switch>
            <Route path="/catalog">
                <div>Hello it is catalog</div>
            </Route>
            <Route path="/cart">
            <div>Hello it is cart</div>
            </Route>
            <Route path="/contact">
            <div>Hello it is contact</div>
            </Route>
            <Route path="/">
            <Home />
            </Route>
        </Switch>
        </LinkingWrapper>
    </Router>
);

export default Navigation;
