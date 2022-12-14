import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import LogoutPage from "../LogoutPage/LogoutPage";
import LandingPage from "./LandingPage/LandingPage";
import AddNftPage from "../AddNftPage/AddNftPage";
import PostDetail from "../PostDetail/PostDetail";
import Intro from "../IntroPage/IntroPage";






function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage loggedUser={user} handleLogout={handleLogout} />} />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />

           <Route
          path="/logout"
          element={<LogoutPage loggedUser={user} handleLogout={handleLogout} />}
        />

        <Route
          path="/addNft"
          element={<AddNftPage />}
        />


         <Route
          path="/:id"
          element={<PostDetail />}
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
    <Route
        path="/intro"
        element={<Intro handleSignUpOrLogin={handleSignUpOrLogin} />}
      />

      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/intro"/>}/>
    </Routes>
  );
}

export default App;
