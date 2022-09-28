import { Link } from "react-router-dom";
import { Header, Segment, Image, Icon, Table } from "semantic-ui-react";
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
      
          <NavLink to='/addNft' activeStyle>
          <h1>Add Nft</h1>
          </NavLink>

        <NavLink>
        <h1
        >
       {loggedUser ? (
        <Link  style={{
          paddingBottom: '25px',
          color: 'white',
        }} onClick={handleLogout}>
          Logout
        </Link>
               ) : (
        <Link to={`/${loggedUser?.username}`}>Login</Link>
                   )}</h1>
        </NavLink>

        <NavBtn>


          <Image
            src={
              loggedUser?.photoUrl
                ? loggedUser?.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            avatar></Image>
            
             <h1  style={{
    paddingBottom: '25px',}}>Welcome {loggedUser.username}</h1>
      
                   </NavBtn>

      
        </Nav>
    </>
  );
};

export default HeaderPage;