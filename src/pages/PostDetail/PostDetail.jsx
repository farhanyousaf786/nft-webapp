import React from "react";
import { useEffect } from "react";
import postdetail from "../../utils/postdetail";



export default function PostDetail() {



  useEffect(()=>{

    console.log("this is a post detail")

    async function postDetail() {

      try {}catch(e){};

    }


    postDetail();

  },[])

  return (
    <>
    <h1>This is post detail page</h1>
    </>
  );
}
