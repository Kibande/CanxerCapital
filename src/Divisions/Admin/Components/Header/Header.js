/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './header.css';
import { TbMessageCircle } from "react-icons/tb";

import { MdOutlineNotificationsNone, MdSettings } from "react-icons/md";

import img from '../../../../Assets/customer.jpg';

const Header = () => {
    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to the Admin Panel</h1>
                    <p>Hello Steve, Welcome back!</p>
                </div>

            

                <div className="adminDiv flex">
                    <TbMessageCircle className="icon" style={{'cursor':'pointer'}}/>
                    <MdOutlineNotificationsNone className="icon" style={{'cursor':'pointer'}}/>
                    <MdSettings className="icon" style={{'cursor':'pointer'}}/>
                    <div className="adminImage">
                        <img src={img} alt="Admin Image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;