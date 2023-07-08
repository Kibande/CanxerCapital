import React from "react";
import './top.css';

import vid from '../../../../../../Assets/pexels-andres-segura-15937905-640x360-30fps.mp4';
import { BsArrowRightShort, BsQuestionCircle } from "react-icons/bs";
import Logo from "../../../../../../Utilis/logo";
const Top = () => {
    return (
        <div className="topSection">
   
            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Streamline your operations with our powerful admin interface</h1>
                    <p>Your one-stop solution for effortless management!</p>

                    <div className="buttons flex">
                        <button className="btn">View Packages</button>
                        <button className="btn transparent">Top Destinations</button>
                    </div>


                    <div className="videoDiv">
                        <video src={vid} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">

                    <div className="imgDiv">
                            <Logo className="img"/>
                        </div>
                        
                        <div className="textDiv">
                            <h1>Stats</h1>

                            <div className="flex">
                                <span>
                                    Today <br /> <small> 4 Blogs</small>
                                </span>
                                <span>
                                    This Month <br />  <small> 12 Blogs</small>
                                </span>
                            </div>

                            <span className="flex link">
                                Go to Blogs <BsArrowRightShort className="icon" />
                            </span>
                        </div>


                  


                        <div className="sideBarCard">
                            <BsQuestionCircle className="icon" />
                            <div className="cardContent">
                                <div className="circle1"></div>
                                <div className="circle2"></div>

                                <h3>Help Center</h3>
                                <p>Having trouble with the Admin Panel, please contact us for support</p>
                                <button className="btn">Go to help center</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top;