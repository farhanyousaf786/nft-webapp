// import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon, Table } from "semantic-ui-react";

// export default function HeaderPage({ loggedUser, handleLogout }) {
//   return (

//     <Segment clearing >

//       <Header as="h2" floated="right">
//         <Link to={`/${loggedUser?.username}`}>
          
//           <Image
//             src={
//               loggedUser?.photoUrl
//                 ? loggedUser?.photoUrl
//                 : "https://react.semantic-ui.com/images/wireframe/square-image.png"
//             }
//             avatar></Image>


//         </Link>
//         {loggedUser ? (
//           <Link to="" onClick={handleLogout}>
//             Logout
//           </Link>
//         ) : (
//           <Link to={`/${loggedUser?.username}`}>Login</Link>
//         )}
        
//       </Header>


//       <Header as="h2" >
       

//        {loggedUser ? (
//        <>
//       username =  {loggedUser.username}

//        </>
//        ) : (
//        null
//        )}
//      </Header>
   


//       <Header as="h2" floated="left">
//         <Link to="/">
//           <Icon name="home"></Icon>
//         </Link>

//         {loggedUser ? (
//         <>
//             <Link to="/">
//             Home
//             </Link>
//         </>
//         ) : (
//         null
//         )}
//       </Header>


//     </Segment>
//   );
// }


import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './HeaderElements';

const HeaderPage = ({ loggedUser, handleLogout }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Home</h1>
        </NavLink>
        <NavMenu>
          <NavLink to='/about' activeStyle>
          <h1>Add Nft</h1>
          </NavLink>
          <NavLink to='/login' activeStyle>
          <h1>About Us</h1>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <Image
            src={
              loggedUser?.photoUrl
                ? loggedUser?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar></Image>
            
             <h1  style={{
    paddingBottom: '25px', paddingLeft: '10px'  }}>Welcome {loggedUser.username}</h1>
      
                   </NavBtn>
                   
        <NavLink>
        <h1>
       {loggedUser ? (
        <Link to="" onClick={handleLogout}>
          Logout
        </Link>
               ) : (
        <Link to={`/${loggedUser?.username}`}>Login</Link>
                   )}</h1>
        </NavLink>
        </Nav>
    </>
  );
};

export default HeaderPage;