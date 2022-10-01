import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";



export default function LoginPage(props) {

  const [error, setError] = useState('');
  const [state, setState] = useState({
    email: '',
    password: '',
  });

const navigate = useNavigate();

function handleChange(e) {
  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
}

async function handleSubmit(e) {
  e.preventDefault();

  try {
    await userService.login(state);
    props.handleSignUpOrLogin();
    navigate('/');

  } catch(err) {
    setError(err.message);
  }
}

  return (


    <body


class="loginbody"
    >
        <Grid
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
           LOG IN HERE
          </Header>
          <Form onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Button
                color="blue"
                fluid
                size="large"
                type="submit"
                className="btn"
              >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            Don't have an account? <Link to="/signup">Sign Up Here</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>

    </body>



  
       

  );
}
