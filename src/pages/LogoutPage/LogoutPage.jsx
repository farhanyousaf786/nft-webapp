import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";



export default function LogoutPage(props) {
const navigate = useNavigate();
async function handleSubmit(e) {
    props.handleLogout();
    navigate('/login');
}



  return (
    <Grid
        textAlign="center"
        style={{ height: "100vh", width: "100vw" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
           LOG OUT HERE
          </Header>
          <Form onSubmit={handleSubmit}>
            <Segment stacked>
            
              <Button
                color="blue"
                fluid
                size="large"
                type="submit"
                className="btn"
              >
                LOGOUT
              </Button>
            </Segment>
          </Form>
         
        </Grid.Column>
      </Grid>
  );
}
