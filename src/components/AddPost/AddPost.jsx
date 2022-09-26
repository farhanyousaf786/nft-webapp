import React, { useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";


export default function AddPost(props) {

  const [state, setState] = useState({
    name: '',
    price: '',
    chain: '',
  });

  function handleChange(e) {
    setState({
        ...state,
        [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
        await props.handleAddPost(state);
        
    } catch(err) {
        console.log(err, "<< output of handlesubmit")
    }
    
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
        <Form.TextArea
          className="form-control"
          name="price"
          value={state.price}
          placeholder="1 Eth"
          onChange={handleChange}
          required
        />
         <Form.TextArea
          className="form-control"
          name="chain"
          value={state.chain}
          placeholder="Polygon"
          onChange={handleChange}
          required
        />
        <Button type="submit" className="btn">
          Post NFT
        </Button>
      </Form>
    </Segment>
  );
}