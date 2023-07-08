import React from "react";
import styled from "styled-components";
import PostEditor from "../../Components/Header/PostEditor/PostEditor";

const Container =styled.div`
width:100%;
height:100%;
`;

const Title=styled.h3`
padding:1rem 0;
`

const EditPackage =(props) => {
    return (
        <Container>
         <Title>Edit Package</Title>
           <PostEditor/>
     </Container>
    )
}

export default EditPackage;