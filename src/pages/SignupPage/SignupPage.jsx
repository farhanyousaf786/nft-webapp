import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";


export default function SignUpPage(props) {
  const [error, setError] = useState('');
  const [file, setFile] = useState('');

  
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });;

  const navigate = useNavigate()

  function handleChange(e) { 
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function handleFileInput(e) {
    setFile(e.target.files[0]);  
  }

  async function handleSubmit(e) {
    e.preventDefault(); 
    const formData = new FormData(); 
    formData.append("photo", file)
    for (let key in state) {
      formData.append(key, state[key]);
    }
    console.log(
      formData,
    );
    console.log(
      formData.forEach((item) => console.log(item)),
    );

    try {
      await userService.signup(formData); 
      props.handleSignUpOrLogin();
      navigate('/');
      
    } catch (err) {
      console.log("this is the error - - - -  >", err.message);
      setError(err.message);
    }
  }

  
  return (
    
  <body class="signupbody">
  <div class="signupcontainer">
  <Grid textAlign="center" verticalAlign="middle">
  <>
  <div class="login-box">
  <h2>Signup!</h2>
  <form  onSubmit={handleSubmit}>
  <div class="user-box">
  <input 
      name="username"
      value={state.username}
      onChange={handleChange}
      required/>
      <label>username</label>
  </div>
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
  <div class="user-box">
  <input
      name="passwordConf"
      type="password"
      value={state.passwordConf}
      onChange={handleChange}
      required/>
      <label>confirm password</label>
  </div>
  <div class="user-box">
  <input
      type="file"
      name="photo"
      placeholder="upload image"
      onChange={handleFileInput}/>
      <label>Select Image</label>
  </div>
  <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  <Button
      color="black"  fluid
      size="large" type="submit"
      className="btn"> Sign Up
  </Button>
  </a>
  </form> </div>
  {error ? <ErrorMessage error={error} /> : null}

  </></Grid>
  </div></body>

  );
}



 // <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">



    {/* <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
         Sign Up Page
      </Header>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input
            name="username"
            placeholder="username"
            value={state.username}
            onChange={handleChange}
            required
          />
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
          <Form.Input
            name="passwordConf"
            type="password"
            placeholder="Confirm Password"
            value={state.passwordConf}
            onChange={handleChange}
            required
          />
  
          <Form.Field>
            <Form.Input
              type="file"
              name="photo"
              placeholder="upload image"
              onChange={handleFileInput}
            />
          </Form.Field>
          <Button type="submit" className="btn">
            Signup
          </Button>
        </Segment>
        {error ? <ErrorMessage error={error} /> : null}
      </Form>
    </Grid.Column> */}




  // </Grid>