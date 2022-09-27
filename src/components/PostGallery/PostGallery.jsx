import React from "react";
import { Card  } from 'semantic-ui-react'
import PostCard from '../PostCard/PostCard';


export default function PostGallery({ posts,
  numPhotosCol,
  isProfile,
  removeLike,
  addLike,
  loggedUser,}) {

  const postCards = posts.map((post) => {
    return (
      <PostCard
        post={post}
        key={post._id}
        isProfile={isProfile}
        removeLike={removeLike}
        addLike={addLike}
        loggedUser={loggedUser}
      
      />
    );
  })

  return (
    <Card.Group itemsPerRow={numPhotosCol} stackable>
      {postCards}
    </Card.Group>
  );
}