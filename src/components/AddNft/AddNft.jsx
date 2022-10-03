import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import "./AddNft.css"


export default function AddNft(props) {

  const [state, setState] = useState({
    name: '',
    price: '',
    chain: '',
  });
  const [file, setFile] = useState('');


  function handleChange(e) {

    setState({
        ...state,
        [e.target.name]: e.target.value,
    });
    
  }

  function handleFileInput(e) {
    setFile(e.target.files[0]);  
  }


  async function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append('photo', file);
    formdata.append('name', state.name);
    formdata.append('chain', state.chain);
    formdata.append('price', state.price);
    console.log("THIS IS HANDLE SUBMIT>>>", formdata);
    props.handleAddPost(formdata); 
  }

  return (
    <center className="addpostpage" style={{padding: 30, }} >
    <div className="addpagecontainer">
        <center style={{padding: 20}}><h1>Add Post</h1></center>

        <Form onSubmit={handleSubmit}>
        <Form.Input
          className="form-control"
          name="name"
          value={state.name}
          placeholder="Sad Apes"
          onChange={handleChange}
          required
        />
        <Form.Input
          className="form-control"
          name="price"
          value={state.price}
          placeholder="1 Eth"
          onChange={handleChange}
          required
        />
         <Form.Input
          className="form-control"
          name="chain"
          value={state.chain}
          placeholder="Polygon"
          onChange={handleChange}
          required
        />
        <Form.Field>
        <Form.Input
              type="file"
              name="photo"
              placeholder="upload image"
              onChange={handleFileInput}
        />
        </Form.Field>
        <Button type="submit" className="btn">
          Post NFT
        </Button>
      </Form>
    </div>
</center>
  );
}