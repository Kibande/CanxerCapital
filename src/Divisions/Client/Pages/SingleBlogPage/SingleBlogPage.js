/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import HeroImage from "../../Components/HeroImage/HeroImage";
import './singleblogpage.css'
import headerImage from '../../../../Assets/pexels-nubia-navarro-1522182.jpg';


const SingleBlogPage = (props) => {

    return (
        <>
            <HeroImage image_url={headerImage} height={'30vh'} />
        <div className="singleBlogPage">


            <div className=" container section">

                <div className="secContainer">


                    <h2 className="secTitle">{props.focusBlog.title}</h2>
                    <div className="blogImage">
                        <img src={props.focusBlog.postImage} alt="Image Name" />
                    </div>

                    <div className="secIntro">
                       
                        <p className="blogsummary">
                            {props.focusBlog.summary}
                        </p>
                    </div>

                    <div className="blogdetails">
                    <p>
                                            {props.focusBlog.body}
                                        </p>
                    </div>
                   

                </div>
            </div>

        </div>

        </>
    )
}

export default SingleBlogPage