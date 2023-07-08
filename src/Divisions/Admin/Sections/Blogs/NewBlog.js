import React from "react";
import styled from "styled-components";
import BlogEditor from "../../Components/Header/BlogEditor/PostEditor/BlogEditor";

const Container =styled.div`
width:100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
`;


const NewBlog =() => {
    return (
     <Container>
           <BlogEditor/>
     </Container>
    )
}

export default NewBlog;