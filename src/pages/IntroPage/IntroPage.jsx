import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './IntroPage.css'; 



export default function IntroPage() {


    const navigate = useNavigate()

  async function handleSubmit(e) {
   
      navigate('/login');
      
    
  }

  return (


     <>

     <center>
     <body>
     <div class="container">

       

        <h1>Welcome To NFT Market :)</h1>
        <h2>Nfts are the future on collections</h2>

       

        <p>


      

      <div onClick={handleSubmit} class="btn_container">
        <a class="btn1"><span class="btn1span"><button class="btn2">Hello</button></span></a>
        </div>
      
    
        </p>
              
    </div>

</body>


     {/* <button onClick={handleSubmit}>
  SignIn
</button> */}
     </center>
 
</>

  );
}
