import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './IntroPage.css'; 

export default function IntroPage() {


    const navigate = useNavigate()

  async function handlSignIn(e) {
   
      navigate('/login');
    
  }

  async function handleSignUp(e) {
   
    navigate('/signup');
  
}

  return (


        <>
        <body >
        <div class="containerintro">
        <h1>Welcome To NFT Market :)</h1>
        <h2>Nfts are the future on collections</h2>
        <cneter>
        <tr>
        <th> <div onClick={handlSignIn} class="btn_containerintro">
        <a class="btn1intro"><span class="btn1span">Sign In</span></a>
        </div></th>
        <th>-----------</th>
        <th> <div onClick={handleSignUp} class="btn_containerintro">
        <a class="btn1intro"><span class="btn1span">Sign Up</span></a>
        </div>
        </th>
        </tr>
        </cneter>
        </div>
        </body>
        </>

  );
}
