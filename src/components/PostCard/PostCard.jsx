import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";




function PostCard({ 
  post,
  isProfile,
  addLike,
  removeLike,
  loggedUser,}) {
  const likedIndex = post.likes.findIndex(
    (like) => like.username === loggedUser.username
  );

  function a(){}
  const likeColor = likedIndex > -1 ? "red" : "grey";
  console.log(typeof addLike, "<<----addlike");
  const clickHandler =
    likedIndex > -1
      ? () => removeLike(post.likes[likedIndex]._id) 
      : () => addLike(post._id);  

  return (
    <Card>
      <Card.Content textAlign="left">
        <Image
          floated="left"
          avatar
          src={
            post.user.photoUrl
              ? post.user.photoUrl
              : "https://react.semantic-ui.com/images/wireframe/square-image.png"
          }
        />
        <Card.Header floated="right">{post.user.username}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Card.Description>NFT Name: {post.name}</Card.Description>
        <Card.Description>NFT PRICE: {post.price}</Card.Description>
        <Card.Description>NFT CHAIN: {post.chain}</Card.Description>


      </Card.Content>
      <Image src={`${post?.photoUrl}`} wrapped ui={false} />
      <Card.Content extra textAlign={"right"}>
        <Icon
          name={"heart"}
          size="large"
          color={likeColor}
          onClick={clickHandler}
        />
        {post.likes.length} Likes
      </Card.Content>
     
    </Card>
  );
}

export default PostCard;
