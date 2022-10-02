import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "./PostDetails.css"
import * as removePost from "../../utils/postdetail";
import { useNavigate } from "react-router-dom";




export default function Deatil({post}) {
  const navigate = useNavigate()


async function clickHandlerForunLike(e){


  try {
  const response = await removePost.removePost(e._id);
  console.log(response, " remove post");
  navigate('/');
   } catch (err) {
  console.log(err);
   }

   }

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

     <tr>
     <td class="nametag">NFT NAME:&emsp;</td>
     <td>
     <h2 class= "nametag">{p.name}</h2>
     </td>
     </tr>
     <div class="ui segment">
     <img class="ui centered large image" src={`${p?.photoUrl}`}/>
     </div>


     <tr>
     <td> <tr>
     <td class="nametag">NFT Price:&emsp;</td>
     <td>
     <h2 class= "nametag">{p.price}</h2>
     </td>
     </tr>
     </td>

    <td>---</td>

     <td>
     <tr>
     <td class="nametag">NFT Chain:&emsp;</td>
     <td>
     <h2 class= "nametag">{p.chain}</h2>
     </td>
     </tr>
     </td>
     </tr>
    

  
     <tr>
     <td> <tr>
     <td class="nametag">Likes:&emsp;</td>
     <td>
     <h2 class= "nametag">{p.likes.length}</h2>
     </td>
     </tr>
     </td>

    <td>---</td>

     <td>
     <tr>
     <td class="nametag">Dislike:&emsp;</td>
     <td>
     <h2 class= "nametag">{p.unlikes.length}</h2>
     </td>
     </tr>
     </td>
     </tr>


     <div class="extra content">
        Delete-<Icon
          name={"remove"}
          size="large"
          onClick={() => clickHandlerForunLike(p)}
        />
     </div>
     </div></div>
     </div>);})}
     </div>
     </center></div>
     </body>
       
        );}
