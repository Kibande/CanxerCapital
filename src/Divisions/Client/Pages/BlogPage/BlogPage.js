/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import BlogHome from "../../Components/BlogHome/BlogHome";
import { Posts, SINGLEBLOGPAGE } from "../../../../Utilis/data";
import { BsArrowRightShort } from "react-icons/bs";



const BlogPage =(props) => {

    return (
             <>
            <BlogHome/>
            <section className="blog container section">
            <div className="secContainer">
            <div className="mainContainer grid">
                 {
                    Posts.map((single_blog)=>{
                        return(
                            <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid"  onClick={()=>{ props.setFocusBlog(single_blog);  props.setSectionIndex(SINGLEBLOGPAGE);}}>
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
                            <a data-aos="fade-up" data-aos-duration="4000" href="#" className="flex">
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
           
             </>
    )
}

export default BlogPage