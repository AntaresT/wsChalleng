import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import CallerRegister from '../../Pages/Register/index';
import Presentation from '../../Pages/Presentation/index';
import { isAuthenticated } from '../../Services/auth';
import CallerLogin from '../../Pages/Login/index';
import Logout from '../../Components/Logout/index';


const Routinha = ({ component: Component, ...rest }) => (

   <Route
      {...rest}
      render={props =>
         isAuthenticated() ? (
            <Component {...props} />
         ) : (
               <Redirect to={{ pathname: "/", state: { from: props.locations } }} />
            )
      }
   />

);


const Menu = ({ open }) => {
   return (
      <BrowserRouter>
         <StyledMenu open={open}>
            <Link to="/">
               <span role="link" aria-label="Home"></span>
               Home
            </Link>
            <Link to="/register">
               <span role="link" aria-label="Register"></span>
               Register
            </Link>
            <Link to="/login">
               <span role="link" aria-label="Login"></span>
               Login
            </Link>
            <Link to="/logout">
               <Routinha>
                  <span role="link" arial-label="Logout" ></span>
                  Logout
               </Routinha>
            </Link>

         </StyledMenu>

         <Switch>
            <Route exact path="/">
               <Presentation />
            </Route>
            <Route path="/register">
               <CallerRegister />
            </Route>
            <Route path="/login">
               <CallerLogin />
            </Route>
            <Routinha path="/logout">
               <Logout />
            </Routinha>
         </Switch>

      </BrowserRouter>

   )
}


Menu.propTypes = {
   open: bool.isRequired,
}
export default Menu;