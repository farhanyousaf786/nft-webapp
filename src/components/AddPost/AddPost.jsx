import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";


export default function AddPost(props) {

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
    const formdata = FormData();

    formdata.append('photo', file);

    formdata.append('name', state.name);

    formdata.append('chain', state.chain);

    formdata.append('price', state.price);
    
  }

  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          className="form-control"
          name="name"
          value={state.name}
          placeholder="Sad Ape"
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
    </Segment>
  );
}