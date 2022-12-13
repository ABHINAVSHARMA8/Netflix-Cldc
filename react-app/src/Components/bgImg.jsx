import React from 'react';
import bg from "../images/main.jpg";
import styled from 'styled-components';

function BgImage(){
  return (
    <Container>
        <img src={bg} alt="bg"/>
    </Container>
  )
}
const Container = styled.div`
height: 100vh;
width: 100vw;
img {
    height: 100vh;
    width: 100vw;
}
`;

export default BgImage;