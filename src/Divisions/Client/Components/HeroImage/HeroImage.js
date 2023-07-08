/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from "react";
import './heroimage.css';


import Aos from "aos";
import 'aos/dist/aos.css';
import styled from "styled-components";

const HeroStyling = styled.section`
        background: linear-gradient(rgba(33,33,33,0.522),rgba(33,33,33,0.522),rgba(33,33,33,0.522)),url(${props=>props.image_url});
        height: ${props=>props.height};
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        position: relative;
`

const HeroImage =(props) => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <>
        <HeroStyling className="heroImage" image_url={props.image_url} height={props.height}>
                <div className="secContainer container">
                    <div className="homeText">
                        <h1 data-aos="fade-up" className="title">
                            {props.title}
                        </h1>

                        <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
                        {props.subtitle}
                        </p>

                        {/* <button data-aos="fade-up" data-aos-duration="3000" className="btn">
                            <a href="#"> Explore Now</a>
                        </button> */}
                    </div>
                </div>
        </HeroStyling>
        </>
    )
}

export default HeroImage;