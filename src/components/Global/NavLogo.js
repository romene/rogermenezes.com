
import React from 'react'
import styled from 'styled-components'

import MyLogo from '../../images/logoRMSmall.png'

const NavLogo = () => {
  return (
      <NavBarLogo>
          <img src={MyLogo} alt="" />
      </NavBarLogo>
  )
}

export default NavLogo

//NavBar Logo
const NavBarLogo = styled.div`
grid-area: Logo;



img {
max-height: 3.5rem;
width: auto;
padding: .5rem 
}

`