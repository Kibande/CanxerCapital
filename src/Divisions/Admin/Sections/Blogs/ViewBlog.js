import React from "react";
import styled from "styled-components";
import PostEditor from "../../Components/Header/PostEditor/PostEditor";

const Container =styled.div`
width:100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
`;


const ViewBlog =() => {
    return (
     <Container>
           <h1>View Blog Index</h1>
     </Container>
    )
}

export default ViewBlog;