import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./PostDetails.css"



export default function Deatil({post}) {

  return (


    

    <body class="detailbody">
    <div class="detailcontainer">
      <center>

      <div class="ui card" style={{height: 800,  width: 800, padding: 20}}>

    {post.map((p,i) => {
    return (
     <div key={i}>
     <div class="wrap">
     <div class="detailheader">
     <h3><span><a>{p.name}</a></span></h3>
     <div class="ui segment">
     <img  class="ui centered large image" src={`${p?.photoUrl}`}/>
     </div>
  </div></div>
  </div>);})}
  </div>

      </center>
  
        </div>
        </body>
       
        );}
