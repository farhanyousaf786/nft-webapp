import React from 'react';
import AddNft from "../../components/AddNft/AddNft"
import * as postApi from "../../utils/postApi"




const AddNftPage = () => {


    async function handleAddPost(post){


        try {
        
          const responsePost = await  postApi.create(post);

          console.log("this is post data: ", responsePost);


        } catch (err) {

         console.log("this is error message from landing page", err);

        }
    }



  return (
    < AddNft  handleAddPost={handleAddPost}/>
  );
};

export default AddNftPage;