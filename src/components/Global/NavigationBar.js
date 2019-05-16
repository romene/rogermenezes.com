import React, { Component, Fragment } from 'react'

import styled from 'styled-components'

import { FaAlignRight } from "react-icons/fa";
import {Link} from 'gatsby'

import Menu from './Menu'
// import NavBtn from './NavBtn'
import NavLogo from './NavLogo'



export default class NavigationBar extends Component {
  state = {
    navbarOpen: false
  }

  handleToggle = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen})
  }
  render() {
   
   return (
      <NavBar>
       <NavLogo /> 
       <Menu navbarOpen={this.state.navbarOpen}  />

        <NavBarMenuBtn>
          <FaAlignRight onClick={this.handleToggle} className="toggle-icon" size={30}/>
        </NavBarMenuBtn>
      </NavBar>
    )
  }
}




// NavBar 
const NavBar = styled.nav`
min-height: 3.5rem;
background-color: white;
display: grid;
grid-template-columns: auto 1fr auto;
grid-template-rows: auto;
grid-template-areas: 
"Logo Menu MenuBtn";
justify-items: center;
align-content: center;



`



//Navbar Menu Button Collapse

const NavBarMenuBtn = styled.div`
grid-area: MenuBtn;

align-self: start;
padding: 1em 1em;
position: relative;
z-index: 2;

.toggle-icon {
  cursor: pointer;
}

@media (min-width: 768px) {
  visibility: hidden;
}

`









