import React from "react";
import Popular from "../../Components/Popular/Popular";
import About from "../../Components/About/About";
import Blog from "../../Components/Blog/Blog";
import Home from "../../Components/Home/Home";

const HomePage =(props) => {

    return (
        <>
        <Home/>
        <Popular setSectionIndex={props.setSectionIndex} setFocusPackage={props.setFocusPackage} />
        <About/>
        <Blog setSectionIndex={props.setSectionIndex} setFocusBlog={props.setFocusBlog}/>
        </>
    )
}

export default HomePage;