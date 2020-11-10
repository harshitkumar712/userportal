import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import '../styles/login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <Form className="auth-form">
        <Form.Group controlId="loginUsername">
          <Form.Control 
            type = "text"
            name = "username"
            placeholder = "Enter username"
            onChange = {
              this.handleInputChange
            }
          />
        </Form.Group>

        <Form.Group controlId="loginPassword">
          <Form.Control 
          type = "password"
          name = "password"
          placeholder = "Password"
          onChange = {
            this.handleInputChange
          }
          />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;
