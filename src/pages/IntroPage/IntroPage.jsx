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

     <center>
     <body >

        
     <div class="containerintro">

        <h1>Welcome To NFT Market :)</h1>
        <h2>Nfts are the future on collections</h2>

        <div onClick={handlSignIn} class="btn_containerintro">
        <a class="btn1intro"><span class="btn1span">Sign In</span></a>
        </div>
    
      <div onClick={handleSignUp} class="btn_containerintro">
        <a class="btn1intro"><span class="btn1span">Sign Up</span></a>
        </div>

    </div>

</body>


     {/* <button onClick={handleSubmit}>
  SignIn
</button> */}
     </center>
 
</>

  );
}
