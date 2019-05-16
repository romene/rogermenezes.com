import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'


const Menu = (props) => {
  
  return (
     <NavBarLinks open={props.navbarOpen}>
         <li>
           <Link to="/" className="nav-link">Home</Link>
         </li>
         <li>
           <Link to="/#about" className="nav-link">About</Link>
         </li>
         <li>
           <Link to="/#portfolio" className="nav-link">Portfolio</Link>
         </li>
         <li>
           <Link to="/#contact" className="nav-link">Contact</Link>
         </li>
       </NavBarLinks>
  )
}

export default Menu



// NavBar Menu

const NavBarLinks = styled.ul`
grid-area: Menu;
padding: ${props => props.open ? '3.5rem 0 0 0' : '0'};
overflow: hidden;
height: ${props => props.open ? '184px' : '0'};
display: block;
width: 100%;
box-shadow:  0 10px 50px rgba(0, 0, 0, 0.2);
position: absolute;

a{
  color: black;
}

a:visited{
 color: black;
 padding: 0;   
}

  li{
    list-style-type: none;
  }

  .nav-link{
    
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 10px;
    padding: 1rem 1rem 1rem 1rem;
    cursor: pointer;
    font-size: 1.5em;
    
    
  }

  .nav-link:hover {
    color: #944646;
  }

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 3.5rem;
      padding: 0;
      position: relative;
      box-shadow: none;
  }





` 