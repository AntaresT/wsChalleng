import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled'

const Menu = ({ open }) => {
   return (
      <StyledMenu open={open}>
         <a href="/">
            <span role="img" aria-label="Auth"></span>
            Auth
         </a>
         <a href="/">
            <span role="img" aria-label="Cities"></span>
            Cities
         </a>
         <a href="/">
            <span role="img" aria-label="Profile"></span>
            Profile
         </a>
         <a href="/">
            <span role="img" aria-label="User"></span>
            User
         </a>
      </StyledMenu>
   )
}
Menu.propTypes = {
   open: bool.isRequired,
}
export default Menu;