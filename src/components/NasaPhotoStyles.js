import styled from "styled-components";


//apod container
const MainContainer = styled.div
`
display: flex;
margin: 0 auto;
background: #151515;
padding: 15px;
max-width: ${(cb) => cb.theme.containerWidth}
`

// photo of the day
const Photo = styled.img
`
width:100%;
padding: 0px 10px 0px 0px;
`

//h1 styles
const StyledH1 = styled.h1
`
color: ${(cb) => cb.theme.primaryColor}
`


//p styles
const StyledP = styled.p
`
color: ${(cb) => cb.theme.secondaryColor};
font-size-adjust: inherit;
padding: 10px 10px;

`

export {StyledH1, StyledP, MainContainer, Photo}