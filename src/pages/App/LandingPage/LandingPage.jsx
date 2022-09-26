import { Grid } from "semantic-ui-react";
import HeaderPage from "../../../components/HeaderPage/Header";
import PostGallery from "../../../components/PostGallery/PostGallery";
import PostCard from "../../../components/PostCard/PostCard";
import AddPost from "../../../components/AddPost/AddPost";



export default function LandingPage({ loggedUser, handleLogout }) {

return(
<Grid centered>
      <Grid.Row>
        <Grid.Column >
          <HeaderPage handleLogout={handleLogout} loggedUser={loggedUser} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column >
          < AddPost/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column >
          <PostGallery />
        </Grid.Column>
      </Grid.Row>

      </Grid>

)

}