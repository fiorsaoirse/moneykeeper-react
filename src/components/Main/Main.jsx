import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Purchases from '../Purchases/Purchases';
import Home from '../Home/Home';
import PurchaseForm from '../Purchases/PurchaseForm';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/purchases/create' component={PurchaseForm} />
                    <Route path='/purchases' component={Purchases} />
                    {/* <Route path='/categories' component={Schedule} /> */}
                </Switch>
            </div>
        );
    }
}
