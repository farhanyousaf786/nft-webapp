import React, { useState } from "react";
import { useEffect } from "react";
import postdetail from "../../utils/postdetail";
import { useParams }  from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import PostGallery from "../../components/PostGallery/PostGallery";
import PageHeader from "../../components/HeaderPage/Header";
import Loading from "../../components/Loader/Loader";



export default function PostDetail() {


const {id} = useParams();
const [post, setPost] = useState([]);
const [error, setError] = useState("");
const [loading, setLoading] = useState(true);





  useEffect(()=>{

    async function postDetail() {
      try {
        console.log("id in Deatils page ", id) 

        const response = await postdetail.getDetails(id);

        console.log("post -- >> ", response.data.post);

        setLoading(false);

        setPost(response.data.post);


      }catch(err){

        console.log("Error in post detail response >> ", err) 
        setError("Post does not exist, Refresh the page or go back"); // < this is message we leave the user


      };

    }

    postDetail();

  },[id])

  if (error) {
    return (
      <>
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }



  return (
    <>
    <h1>This is post detail page</h1>
    </>
  );
}
