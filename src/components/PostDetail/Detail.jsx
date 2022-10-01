import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";




export default function Deatil({post}) {

  return (
     <>
     <center>
     {post.map((p,i) => {
          return (
         <div key={i}>
        <Image src={`${p?.photoUrl}`} wrapped ui={false} />
        <h1>{p.name}</h1>
        </div>
          );
        })}

     </center>
 
</>

  );
}
