import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import MovieDetail from './MovieDetail';

const Router = () => (
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={App} />
        <Route path="/movieDetail/:id" component={MovieDetail} />
        </Switch>
       
    </BrowserRouter>
);

export default Router;