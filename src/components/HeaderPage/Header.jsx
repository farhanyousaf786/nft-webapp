import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon, Table } from "semantic-ui-react";
import React from 'react';
import './Header.css'; 

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

<header>
 <h1 class="logo">
  Nft Market
 </h1>
 <nav>
  <button>
  <NavLink to='/'>
   <h1>Home</h1></NavLink>
  </button>


  <button>
  <NavLink to='/addNft' activeStyle>
  <h1>Add Nft</h1>
  </NavLink>
  </button>


  <button>
  <NavLink>
  <h1>{loggedUser ? ( <Link  style={{paddingBottom: '25px', color: 'white',}} 
  onClick={handleLogout}>Logout</Link>) : (
  <Link to={`/${loggedUser?.username}`}>Login</Link>
   )}</h1>
  </NavLink></button>
 </nav>

 <button class="profile"><Image src={ loggedUser?.photoUrl ? loggedUser?.photoUrl
  : "https://react.semantic-ui.com/images/wireframe/square-image.png" }
  avatar></Image> {loggedUser.username}     
</button>
</header>
<div>
<g class="parallax">
</g>
</div>
    </>
  );
};

export default HeaderPage;