import React, { Component, Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import AppBar from './AppBar';
import authOperations from "../redux/auth/auth-operations";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
//import {Button} from "react-bootstrap";

const HomeViev = lazy(() => import('../views/HomeViev'));
const LoginViev = lazy(() => import('../views/LoginViev'));
const RegisterViev = lazy(() => import('../views/RegisterViev'));
const ContactsViev = lazy(() => import('../views/ContactsViev'));


class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>

        <div>
          <AppBar />
<Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeViev} />
            <PublicRoute path="/register" redirectTo = '/contacts' restricted component={RegisterViev} />
            <PublicRoute path="/login" redirectTo = '/contacts' restricted component={LoginViev} />
            <PrivateRoute path="/contacts" redirectTo = '/login' component={ContactsViev} />
          </Switch>
          </Suspense>
        </div>
      </>
    );
  }
};

const mapDispatchToProps = ({
  onGetCurrentUser: authOperations.getCurrentUser,
});

export default connect(null, mapDispatchToProps)(App);
