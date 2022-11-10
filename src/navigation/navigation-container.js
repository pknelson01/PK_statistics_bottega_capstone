import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import Logo from '../images/pk-logo-stats.PNG';


const NavigationComponent = (props) => {
  return (
    <div>
      <div className="nav-wrapper">
        <img src={Logo}></img>

        <div className="links">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName='nav-link-active'>
              Home
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/basketball" activeClassName='nav-link-active'>
              Basketball
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/football" activeClassName='nav-link-active'>
              Football
            </NavLink>
          </div>

          <div className="nav-link-wrapper">
            <NavLink to="/soccer" activeClassName='nav-link-active'>
              Soccer
            </NavLink>
          </div>
        </div>

        <div className='contact-info'>
          {/* <span className='name'>PK Statistics</span> */}
          <span className='email'>pk.fullstackdev@gmail.com</span>
          <span className='location'>Utah County, Utah</span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(NavigationComponent);