import React from 'react'
import styled from 'styled-components'
import footerbg from '../images/Ellipse.svg'

const Footer = () => {
  return (
      <WrapperFooter color={footerbg}>
      <div className="container">
          <h1>Ola from footer</h1>
      </div>
    </WrapperFooter>
  )
}

export default Footer


const WrapperFooter = styled.div`
height: 300px;
background-image: url(${props => props.color});
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: center;
align-items: center;

`