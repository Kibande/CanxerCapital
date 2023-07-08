/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './activity.css';
import { BsArrowRightShort } from "react-icons/bs";

import img from '../../../../../../Assets/pexels-engin-akyurt-2771935-min.jpg'

const Activity =() =>{
    return (
        <div className="activitySection">
            <div className="heading flex">
                <h1>Resent Activity</h1>
                <button className="btn flex">
                    See All 
                    <BsArrowRightShort className="icon"/>
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={img} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={img} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={img} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={img} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
                <div className="singleCustomer flex">
                    <img src={img} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;