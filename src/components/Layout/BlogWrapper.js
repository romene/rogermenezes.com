import styled from 'styled-components'


export const BlogWrapper =  styled.div`
max-width: 100%;
height: 250px;
display: grid;
grid-template-columns: 1fr;
margin: 1em 0;


`

export const BlogCard = styled.div`
         width: 90%;
         height: 250px;
         margin: 2em auto;
         display: grid;
         grid-template-columns: auto 1fr;
         grid-template-rows: 1fr;
         grid-template-areas: "CardImage CardBody";
         grid-column-gap: 10px;
         overflow: hidden;
         border-radius: 20px;
         border: 5px solid transparent;
         transition: box-shadow 0.2s;

         @media (max-width: 767.98px) {
           grid-template-columns: 1fr;
           grid-template-rows: 1fr;
           grid-template-areas:
             "CardImage"
             "CardBody";
           grid-column-gap: 0;
           height: auto;
         }

         :hover {
           -webkit-box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.46);
           -moz-box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.46);
           box-shadow: 10px 10px 20px 1px rgba(0, 0, 0, 0.46);
           
         }
       `

export const BlogCardImage = styled.div`
    justify-self: center;
    place-items: end;

    img{
        width: 255px;
        height: 250px;
        object-fit: cover;
        object-position: center;
    }

    
`

export const BlogCardBody = styled.div`
grid-area: CardBody;
max-width: 90%;
padding: 0 1em;
background-color: white;
display: grid;
place-items: start;
grid-template-rows: auto auto 1fr;

    h2{
        margin-top: .5em;
    }

    p{
        word-wrap: break-word;
        word-break: break-all;
        margin-top: 1em;
    }
       
       

`
