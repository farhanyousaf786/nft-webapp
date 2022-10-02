import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";



function PostCard({ 
  post,
  isProfile,
  addLike,
  removeLike,
  addunLike,
  removeunLike,
  loggedUser,}) {


  const likedIndex = post.likes.findIndex(
    (like) => like.username === loggedUser.username
  );

  const unlikedIndex = post.unlikes.findIndex(
    (unlikes) => unlikes.username === loggedUser.username
  );
  const likeColor = likedIndex > -1 ? "green" : "grey";
  console.log(typeof addLike, "<<----addlike");

  const unlikeColor = unlikedIndex > -1 ? "red" : "grey";
  console.log(typeof addunLike, "<<----addlike");


  const clickHandlerForLike =
    likedIndex > -1
      ? () => removeLike(post.likes[likedIndex]._id) 
      : () => addLike(post._id);  


  const clickHandlerForunLike = 
  unlikedIndex > -1
  ? () => removeunLike(post.unlikes[unlikedIndex]._id) 
  : () => addunLike(post._id);  


  return (
   <>
     
   <div class="ui card" style={{height: 400, }}>
   <div style={{padding: 5, }} class="image">
      <Image
          floated="left"
          avatar
          src={
            post.user.photoUrl
              ? post.user.photoUrl
              : "https://react.semantic-ui.com/images/wireframe/square-image.png"
          }
        />
      <Card.Header>{post.user.username}</Card.Header>
      <Image style={{height: 200}}  src={`${post?.photoUrl}`}/>
      </div>
      <div class="content">
       <Card.Content>
        <Card.Description>NFT Name: {post.name}</Card.Description>
        <Card.Description>NFT PRICE: {post.price}</Card.Description>
        <Card.Description>NFT CHAIN: {post.chain}</Card.Description>
       </Card.Content>
      </div>

      <tr>
    <th><div style={{padding: 5, }} class="extra content">
        <Icon
          name={"angle up"}
          size="large"
          color={likeColor}
          onClick={clickHandlerForLike}
        />
        {post.likes.length}
     </div></th>

    <th>
    <div class="extra content">
        <Icon
          name={"angle down"}
          size="large"
          color={unlikeColor}
          onClick={clickHandlerForunLike}
        />
        {post.unlikes.length}
     </div>
    </th>
    <th>
     
    <Link style={{paddingLeft: 200, }} to={`/${post._id}`}>Detail</Link>
    </th>
  </tr>
     </div>
     </>


    // <Card  >
    //   <Card.Content 
      
    //   textAlign="left" >
    //     <Image
    //       floated="left"
    //       avatar
    //       src={
    //         post.user.photoUrl
    //           ? post.user.photoUrl
    //           : "https://react.semantic-ui.com/images/wireframe/square-image.png"
    //       }
    //     />
    //     <Card.Header floated="right">{post.user.username}</Card.Header>
    //   </Card.Content>
    //   <Card.Content>
    //     <Card.Description>NFT Name: {post.name}</Card.Description>
    //     <Card.Description>NFT PRICE: {post.price}</Card.Description>
    //     <Card.Description>NFT CHAIN: {post.chain}</Card.Description>
    //   </Card.Content>
    //   <Image src={`${post?.photoUrl}`} wrapped ui={false} />
    //   <Card.Content extra textAlign={"right"}>
    //     <Icon
    //       name={"heart"}
    //       size="large"
    //       color={likeColor}
    //       onClick={clickHandler}
    //     />
    //     {post.likes.length} Likes
    //   </Card.Content>
    // </Card>
  );
}

export default PostCard;
