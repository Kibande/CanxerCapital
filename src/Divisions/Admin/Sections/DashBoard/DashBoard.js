import React from "react";
import styled from "styled-components";

const Container =styled.div`
width:100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
`;


const DashBoard =() => {
    return (
     <Container>
            <h1>DashBoard</h1>
     </Container>
    )
}

export default DashBoard;