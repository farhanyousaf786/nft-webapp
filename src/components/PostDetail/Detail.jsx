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

   function backFunction(){

    navigate('/');


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


    
    


     <table id="nftdetails">
  <tr>
    <th>NFT NAME</th>
    <th>NFT PRICE</th>
    <th>NFT CHAIN</th>
    <th>NFT LIKES</th>
    <th>NFT DISLIKES</th>

  </tr>
  <tr>
    <td>{p.name}</td>
    <td>{p.price}</td>
    <td>{p.chain}</td>
    <td>{p.likes.length}</td>
    <td>{p.unlikes.length}</td>

  </tr>

</table>



<button class="detaildeletebutton1">
     <div class="extra content">
        <Icon
          name={"angle double left"}
          size="large"
          onClick={() => backFunction(p)}
        />Back
     </div></button>



     <button class="detaildeletebutton2">
     <div class="extra content">
        Delete<Icon
          name={"remove"}
          size="large"
          onClick={() => clickHandlerForunLike(p)}
        />
     </div></button>



     </div></div>
     </div>);})}
     </div>
     </center></div>
     </body>
       
        );}
