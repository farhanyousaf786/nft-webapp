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

  <body class="loginbody">
  <div class="logincontainer">
  <Grid textAlign="center" verticalAlign="middle">
  <>
  <div class="login-box">
  <h2>Login!</h2>
  <form  onSubmit={handleSubmit}>
  <div class="user-box">
  <input 
      type="email"
      name="email"
      value={state.email}
      onChange={handleChange}
      required/>
      <label>Email</label>
  </div>
  <div class="user-box">
  <input
      name="password"
      type="password"
      value={state.password}
      onChange={handleChange}
      required/>
      <label>Password</label>
  </div>
  <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  <Button
      color="black"  fluid
      size="large" type="submit"
      className="btn"> Login
  </Button>
  </a>
  </form> </div>
  </></Grid>
  {error ? <ErrorMessage error={error} /> : null}

  </div></body>
  );

}
