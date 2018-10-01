import React, { Component } from 'react';

import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

import Home from './Home';
import History from './History';
import './routing.css'



class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavLink 
                    exact to="/" 
                    activeStyle={{color: 'red'}}> 
                    Home 
                    </NavLink>

                    <NavLink 
                    to="/notre-histoire" 
                    activeStyle={{color: 'red'}}>  
                    History 
                    </NavLink>
                          <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/notre-histoire" component={History} />   
                          </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routing;
