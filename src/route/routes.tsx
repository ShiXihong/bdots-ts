import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../components/async-component';
import { UnauthenticatedRoute, AuthenticatedRoute, AppliedRoute } from '../components/custom-route';

const Home = asyncComponent(() => import('../containers/home'));
const Login = asyncComponent(() => import('../containers/login'));
const NotFound = asyncComponent(() => import('../containers/not-found'));

export default ({childProps}: any) => (
    <Switch>
        <AppliedRoute path="/" exact={true} component={Home} props={childProps}/>
        <UnauthenticatedRoute path="/test" exact={true} component={Home} props={childProps}/>
        <UnauthenticatedRoute path="/login" exact={true} component={Login} props={childProps}/>
        <UnauthenticatedRoute path="/register" exact={true} component={Home} props={childProps}/>
        <AuthenticatedRoute path="/Profile/:id" exact={true} component={Home} props={childProps}/>
        <Route component={NotFound}/>
    </Switch>
);