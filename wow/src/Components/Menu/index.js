import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled'
import { BrowserRouter, Switch, Route, Link, } from 'react-router-dom';
import CallerRegister from '../../Pages/Register/index';
import Presentation from '../../Pages/Presentation/index';
import Login from '../../Pages/Login/index';
// import { isAuthenticated } from '../../Services/auth';
import CallerLogin from '../../Pages/Login/index';


// const Routinha = ({ component: Component, ...rest }) => (

//    <Route
//       {...rest}
//       render={props =>
//          isAuthenticated() ? (
//             <Component {...props} />
//          ) : (
//                <Redirect to={{ pathname: "/", state: { from: props.locations } }} />
//             )
//       }
//    />

// );


const Menu = ({ open }) => {
   return (
      <BrowserRouter>
         <StyledMenu open={open}>
            <Link to="/">
               <span role="img" aria-label="Home"></span>
               Home
            </Link>
            <Link to="/register">
               <span role="img" aria-label="Register"></span>
               Register
            </Link>
            <Link to="/login">
               <span role="img" aria-label="Login"></span>
               Login
            </Link>

         </StyledMenu>

         <Switch>
            <Route exact path="/">
               <Presentation />
            </Route>
            <Route path="/register">
               <CallerRegister />
            </Route>
            <Route path='/login'>
               <CallerLogin />
            </Route>
         </Switch>

      </BrowserRouter>

   )
}
Menu.propTypes = {
   open: bool.isRequired,
}
export default Menu;