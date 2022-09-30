import React from "react";
import { useEffect } from "react";
import postdetail from "../../utils/postdetail";
import { useParams }  from 'react-router-dom'


export default function PostDetail() {


const {id} = useParams();



  useEffect(()=>{


    async function postDetail() {
      try {
        console.log("id in Deatils page ", id) 

        const reponse = await postdetail.getDetails(id);
        console.log("response in Deatils page ", reponse) 


      }catch(err){

        console.log("Error in post detail response >> ", err) 

      };

    }


    postDetail();

  },[id])

  return (
    <>
    <h1>This is post detail page</h1>
    </>
  );
}
