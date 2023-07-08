import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import './popular.css';
import { BsArrowRightShort, BsGiftFill } from 'react-icons/bs';
import { PackagesData, SINGLEPACKAGEPAGEINDEX } from "../../../../Utilis/data";



const Popular = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
                        <h2 className="secTitle">
                            Popular Packages
                        </h2>
                        <p>
                            From historical cities to natural specteculars, come see the best of the world!

                        </p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2500" className=" flex">
                        <BsGiftFill className="icon " />
                    </div>
                </div>

                <div data-aos="fade-up" className="mainContent grid">
                    {
                        PackagesData.map((focusPackage) => {
                            return (
                                <div className="singleDestination">
                                    <div className="destImage">
                                        <img src={focusPackage.img} alt="blog title" />

                                        <div className="overlayInfo">
                                            <h3>{focusPackage.title}</h3>
                                            <p>
                                                {focusPackage.country}
                                            </p>
                                            <BsArrowRightShort className="icon" onClick={() => {
                                                props.setSectionIndex(SINGLEPACKAGEPAGEINDEX);
                                                props.setFocusPackage(focusPackage);

                                            }} />
                                        </div>
                                    </div>

                                    <div className="destFooter">
                                        <div className="number">
                                            {focusPackage.region}
                                        </div>

                                        <div className="destText flex">
                                            <h6>{focusPackage.country}</h6>
                                            <span className="">
                                                {focusPackage.days.length} Days


                                            </span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

                <p>
                           Want something customized? reach out to us through using chat or whatsApp.
                        </p>
            </div>
        </section>
    )
}

export default Popular;