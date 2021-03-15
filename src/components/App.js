import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import AppBar from './AppBar';
import HomeViev from '../views/HomeViev';
import LoginViev from '../views/LoginViev';
import RegisterViev from '../views/RegisterViev';
import ContactsViev from '../views/ContactsViev';
import authOperations from "../redux/auth/auth-operations";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
//import {Button} from "react-bootstrap";


class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>

        <div>
          <AppBar />

          <Switch>
            <PublicRoute exact path="/" component={HomeViev} />
            <PublicRoute path="/register" redirectTo = '/contacts' restricted component={RegisterViev} />
            <PublicRoute path="/login" redirectTo = '/contacts' restricted component={LoginViev} />
            <PrivateRoute path="/contacts" redirectTo = '/login' component={ContactsViev} />
          </Switch>
        </div>
      </>
    );
  }
};

const mapDispatchToProps = ({
  onGetCurrentUser: authOperations.getCurrentUser,
});

export default connect(null, mapDispatchToProps)(App);
