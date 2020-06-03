import React from 'react';
import { Route, Switch } from 'react-router';
import {
    HomeView,
    LoginView,
    ProtectedView,
    ProfileView,
    NotFoundView
} from './containers';
import requireAuthentication from './utils/requireAuthentication';

export default(
    <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/login" component={LoginView} />
        <Route path="/protected" component={requireAuthentication(ProtectedView)} />
        <Route path="/profile" component={ProfileView} />
        <Route path="*" component={NotFoundView} />
    </Switch>

);
