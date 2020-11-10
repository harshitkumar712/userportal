import React, { Component } from 'react';
import { Alert, Form, Button } from 'react-bootstrap';

import '../styles/registration.css';

class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
        <Form.Group controlId="formUsername">
        <Form.Control 
            className="form-control"
            placeholder = "Enter username"
            minLength={2}
             />
         
        </Form.Group>

        <Form.Group controlId="formPassword">
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
          Register
        </Button>
      </Form>
    );
  }
}

export default Registration;
