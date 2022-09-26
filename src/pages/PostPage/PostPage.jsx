import { Grid } from "semantic-ui-react";
import HeaderPage from "../../../components/HeaderPage/Header";
import PostGallery from "../../../components/PostGallery/PostGallery";
import AddPost from "../../../components/AddPost/AddPost";
import { useState } from "react";
import * as postApi from "../../../utils/postApi"




 function AddPostPage({ loggedUser, handleLogout }) {

    const [posts, setPosts] =useState([]);

    async function handleAddPost(post){
        try {
        
          const data = await  postApi.create(post);

          console.log("this is post data: ", data);

        } catch (err) {

         console.log("this is error message from landing page", err);

        }
    }

return(
<Grid centered>
      

      <Grid.Row>
        <Grid.Column style={{maxWidth: 450}}>
          < AddPost handleAddPost={handleAddPost}/>
        </Grid.Column>
      </Grid.Row>

   

      </Grid>

)

}

export default AddPostPage;