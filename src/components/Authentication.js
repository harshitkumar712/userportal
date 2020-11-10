import React, { Component } from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import Login from './Login';
import Registration from './Registration';
import '../styles/authentication.css';


class Authentication extends Component {
 
  render() {
    return (
      <div className="container">
        
        <div className="authentication-screen">
          <Tabs variant="pills" defaultActiveKey = "login" >
            <Tab eventKey="login" title="Login">
              <Login />
            </Tab>
            <Tab eventKey="registration" title="Register">
              <Registration/>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Authentication;
