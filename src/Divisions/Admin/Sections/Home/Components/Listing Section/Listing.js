/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './listing.css';
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

import img from '../../../../../../Assets/pexels-engin-akyurt-2771935-min.jpg'
import img1 from '../../../../../../Assets/pexels-alex-boikiv-14795630-min.jpg'
import img2 from '../../../../../../Assets/pexels-asad-photo-maldives-240512-min.jpg'
import img3 from '../../../../../../Assets/pexels-luis-quintero-2111757-min.jpg'


const Listing =() =>{
    return (
       <div className="listingSection">
        <div className="heading flex">
            <h1>My Listing</h1>
            <button className="btn flex">
                See All <BsArrowRightShort className="icon" />
            </button>
        </div>

        <div className="secContainer flex">
            <div className="singleItem">
                <AiFillHeart className="icon" />
                <img src={img} alt="Image Name" />
                <h3>Annual Vince</h3>
            </div>

            <div className="singleItem">
                <AiFillHeart className="icon" />
                <img src={img1} alt="Image Name" />
                <h3>Annual Vince</h3>
            </div>

            <div className="singleItem">
                <AiFillHeart className="icon" />
                <img src={img2} alt="Image Name" />
                <h3>Annual Vince</h3>
            </div>

            <div className="singleItem">
                <AiFillHeart className="icon" />
                <img src={img3} alt="Image Name" />
                <h3>Annual Vince</h3>
            </div>
        </div>

        <div className="sellers flex">
            <div className="topSellers">
                <div className="heading flex">
                    <h3>Top Sellers</h3>
                    <button className="btn flex">
                    See All <BsArrowRightShort className="icon" />
                    </button>
                </div>

                <div className="card flex">
                    <div className="users">
                        <img src={img} alt="User Image" />
                        <img src={img} alt="User Image" />
                        <img src={img} alt="User Image" />
                        <img src={img} alt="User Image" />
                    </div>

                    <div className="cardText">
                        <span>
                            14.556 Plant sold <br/>
                            <small>
                                21 Sellers <span className="date">
                                    7 Days
                                </span>
                            </small>
                        </span>
                    </div>
                </div>
            </div>

            <div className="featuredSellers">
                <div className="heading flex">
                    <h3>Featured Sellers</h3>
                    <button className="btn flex">
                    See All <BsArrowRightShort className="icon" />
                    </button>
                </div>

                <div className="card flex">
                    <div className="users">
                        <img src={img} alt="User Image" />
                        <img src={img} alt="User Image" />
                        <img src={img} alt="User Image" />
                        <img src={img} alt="User Image" />
                    </div>

                    <div className="cardText">
                        <span>
                            14.556 Plant sold
                            <br/>
                            <small>
                                21 Sellers <span className="date">
                                    31 Days
                                </span>
                            </small>
                        </span>
                    </div>
                </div>
            </div>

        </div>
       </div>
    );
}

export default Listing;