import { Grid } from "semantic-ui-react";
import HeaderPage from "../../../components/HeaderPage/Header";


export default function LandingPage({ loggedUser, handleLogout }) {

return(
<Grid centered>
      <Grid.Row>
        <Grid.Column >
          <HeaderPage handleLogout={handleLogout} loggedUser={loggedUser} />
        </Grid.Column>
      </Grid.Row>
      </Grid>

)

}