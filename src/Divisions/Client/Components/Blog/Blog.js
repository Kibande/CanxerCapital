/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import './blog.css';
import { BsArrowRightShort } from "react-icons/bs";

import {BLOGPAGEINDEX, Posts, SINGLEBLOGPAGE} from '../../../../Utilis/data'
import styled from "styled-components";

const ViewAllBlogs= styled.a`
text-align:center;
text-decoration: underline;

`

const Blog =(props) => {


    useEffect(()=>{
        Aos.init({duration: 2000})
    }, []);

    return (
        <section className="blog container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
                        Our Popular Blogs
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="2500">
                        An Insight to the incredible in the world
                    </p>
                    <ViewAllBlogs data-aos="fade-up" data-aos-duration="3000" href="#" onClick={()=>{props.setSectionIndex(BLOGPAGEINDEX)}}>
    View all blogs
                            </ViewAllBlogs>
                </div>

                <div className="mainContainer grid">
                 {
                    Posts.map((single_blog)=>{
                        return(
                            <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                            <div className="imgDiv">
                                <img src={single_blog.postImage} alt="Image Name"/>
                            </div>
    
                            <div className="postDetails">
                                <h3 data-aos="fade-up" data-aos-duration="3000">
                                    {single_blog.title}
                                </h3>
                                <p data-aos="fade-up" data-aos-duration="4000">
                                    {single_blog.summary}
                                </p>
                            </div>
                            <a data-aos="fade-up" data-aos-duration="4000" href="#" className="flex" onClick={()=>{ props.setFocusBlog(single_blog);  props.setSectionIndex(SINGLEBLOGPAGE);}}>
    Read More
                                <BsArrowRightShort className="icon"/>
                            </a>
                        </div>
                        )
                    })
                 }
                </div>
            </div>
        </section>
    )
}

export default Blog;