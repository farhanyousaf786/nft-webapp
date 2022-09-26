import { Grid } from "semantic-ui-react";
import HeaderPage from "../../../components/HeaderPage/Header";
import PostGallery from "../../../components/PostGallery/PostGallery";
import AddPost from "../../../components/AddPost/AddPost";
import * as postApi from "../../../utils/postApi"
import React, { useState, useEffect } from "react";




export default function LandingPage({ loggedUser, handleLogout }) {

    const [posts, setPosts] =useState([]);

    async function handleAddPost(post){
        try {
        
          const responsePost = await  postApi.create(post);

          console.log("this is post data: ", responsePost);

          setPosts( ...posts, responsePost.data);

        } catch (err) {

         console.log("this is error message from landing page", err);

        }
    }
    useEffect(() => {

        async function getPosts(){
    
          try {
            const response = await postApi.getAll();
            console.log(response, ' data')
            setPosts([...response.data])
          } catch(err){
            console.log(err.message,)
          }
        }
    
        getPosts()
      }, []) 
    
return(
<Grid centered>
      <Grid.Row>
        <Grid.Column >
          <HeaderPage handleLogout={handleLogout} loggedUser={loggedUser} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          < AddPost handleAddPost={handleAddPost}/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
        <PostGallery posts={posts} />
        </Grid.Column>
      </Grid.Row>

      </Grid>

)

}