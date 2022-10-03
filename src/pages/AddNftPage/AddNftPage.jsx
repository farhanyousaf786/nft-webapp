import React from 'react';
import AddNft from "../../components/AddNft/AddNft"
import * as postApi from "../../utils/postApi"
import { useNavigate } from "react-router-dom";


const AddNftPage = () => {

    const navigate = useNavigate();

    async function handleAddPost(post){


        try {
        
          const responsePost = await  postApi.create(post);

          console.log("this is post data: ", responsePost);

          navigate('/');

        } catch (err) {

         console.log("this is error message from landing page", err);

        }
    }



  return (
    <AddNft handleAddPost={handleAddPost}/>
  );
};

export default AddNftPage;