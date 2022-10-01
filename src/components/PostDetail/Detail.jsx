import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";




export default function Deatil({post}) {

  console.log( post, "<<< --post")

  console.log( post.user, "<<< -- name")

  return (
  
     <>
    {post.map((p,i) => {
          return (
         <Card key={i}>

        <Image src={`${p?.photoUrl}`} wrapped ui={false} />
        <h1>{p.name}</h1>

         </Card>
          );
        })}
</>

  );
}
