import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../components/async-component';
import { UnauthenticatedRoute, AuthenticatedRoute, AppliedRoute } from '../components/custom-route';

const App = asyncComponent(() => import('../containers/app'));
const Login = asyncComponent(() => import('../containers/login'));

export default ({childProps}: any) => (
    <Switch>
        <AppliedRoute path="/" exact={true} component={App} props={childProps}/>
        <UnauthenticatedRoute path="/test" exact={true} component={App} props={childProps}/>
        <UnauthenticatedRoute path="/login" exact={true} component={Login} props={childProps}/>
        <UnauthenticatedRoute path="/register" exact={true} component={App} props={childProps}/>
        <AuthenticatedRoute path="/Profile/:id" exact={true} component={App} props={childProps}/>
        <Route component={App}/>
    </Switch>
);