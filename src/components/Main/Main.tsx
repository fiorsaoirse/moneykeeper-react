import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Purchases from '../Purchases/Purchases';
import Home from '../Home/Home';
import PurchaseForm from '../Purchases/PurchaseForm';

export default class Main extends Component {
    public render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/purchases/create' component={PurchaseForm} />
                    <Route path='/purchases' component={Purchases} />
                </Switch>
            </div>
        );
    }
}
