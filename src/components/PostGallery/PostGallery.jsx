import React from "react";
import { Card  } from 'semantic-ui-react'
import PostCard from '../PostCard/PostCard';


export default function PostGallery({ posts,
  numPhotosCol,
  isProfile,
  removeLike,
  addLike,
  addunLike,
  removeunLike,
  loggedUser,}) {

  const postCards = posts.reverse().map((post) => {
    return (
      <PostCard
        post={post}
        key={post._id}
        isProfile={isProfile}
        removeLike={removeLike}
        addLike={addLike}
        loggedUser={loggedUser}
        addunLike={addunLike}
       removeunLike={removeunLike}
      />
    );
  })

  return (
    <Card.Group itemsPerRow={3} stackable>
      {postCards}
    </Card.Group>
  );
}
