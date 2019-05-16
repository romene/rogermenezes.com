import styled from 'styled-components'

export default styled.div`
background-color: #fff;
max-width: 1600px ;
height: calc(100vh - 3.5rem);
margin: 0 0 0 0;
display: grid;
grid-template-columns: minmax(200px, 1fr) 1fr;
grid-template-rows: 1fr;
grid-template-areas: "HeroText HeroImage";

@media (max-width: 767.98px) {
    height: 100vh;
    margin: 5em 0 0 0;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, minmax(200px, 400px)); 
    grid-template-areas: 
    "HeroText"
    "HeroImage";
 }
`