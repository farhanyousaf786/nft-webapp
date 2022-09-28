import { Grid } from "semantic-ui-react";
import HeaderPage from "../../../components/HeaderPage/Header";
import PostGallery from "../../../components/PostGallery/PostGallery";
import AddPost from "../../../components/AddNft/AddNft";
import * as postApi from "../../../utils/postApi"
import React, { useState, useEffect } from "react";
import Loading from "../../../components/Loader/Loader";
import * as likesAPI from "../../../utils/likesApi";
import * as unlikesAPI from "../../../utils/unlikesApi";




export default function LandingPage({ loggedUser, handleLogout }) {

    const [posts, setPosts] =useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


  async function addLike(postId) {
    try {
      const response = await likesAPI.create(postId);
      console.log(response, "from add like");
      getPosts();
    } catch (err) {
      console.log(err, " err from server");
      setError("error adding like");
    }
  }
  console.log(typeof addLike, "<<----addlike 0");


  async function removeLike(likeId) {
    try {
      const response = await likesAPI.removeLike(likeId);
      console.log(response, " remove like");
      getPosts();
    } catch (err) {
      console.log(err);
      setError("error removing like");
    }
  }





  async function addunLike(postId) {
    try {
      const response = await unlikesAPI.createunLike(postId);
      console.log(response, "from add like");
      getPosts();
    } catch (err) {
      console.log(err, " err from server");
      setError("error adding like");
    }
  }
  console.log(typeof addLike, "<<----addlike 0");



  async function removeunLike(likeId) {
    try {
      const response = await unlikesAPI.removeunLike(likeId);
      console.log(response, " remove like");
      getPosts();
    } catch (err) {
      console.log(err);
      setError("error removing like");
    }
  }






    
    async function getPosts(){
    
        try {
          const response = await postApi.getAll();
          console.log(response, ' data')
          setPosts([...response.data])
        } catch(err){
          console.log(err.message,)
        }
      }

    useEffect(() => {
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
        <Grid.Column style={{maxWidth: 1000}}>

        <PostGallery
            posts={posts}
            numPhotosCol={1}
            addLike= {addLike}
            isProfile={false}
            removeLike={removeLike}
            loggedUser={loggedUser}
            addunLike={addunLike}
            removeunLike={removeunLike}
          />
        </Grid.Column>
      </Grid.Row>

      </Grid>

)

}