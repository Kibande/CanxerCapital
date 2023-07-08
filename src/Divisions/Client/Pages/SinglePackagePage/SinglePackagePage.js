import { MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn } from "react-icons/md";
import { BsArrowLeft, BsArrowRight, BsChat, BsWifiOff } from "react-icons/bs";
import React, { useState } from "react";

import HeroImage from "../../Components/HeroImage/HeroImage";
import './singlepackagepage.css'
import { useCookies } from 'react-cookie';
import { FaWifi } from "react-icons/fa";
import { CURRENT_USER_COOKIE_NAME, PackagesInfo } from "../../../../Utilis/data";
import headerImage from '../../../../Assets/pexels-steward-masweneng-14074141.jpg';

const SinglePackagePage = (props) => {
    const [cookies] = useCookies([CURRENT_USER_COOKIE_NAME]);
    const [packageDayIndex, setPackageDayIndex] = useState(0);

    return (
        <>
            <HeroImage title={"Package Review"} image_url={headerImage} subtitle={"Hand crafted to ensure that you enjoy"} />
            <div className=" container section">

                <div className="secContainer">

                    <h2 className="secTitle">{props.focusPackage.title}</h2>

                    <div className="package-page">
                        <div className="package-details">
                            <div className="day">
                                <div className="image">
                                    <img src={props.focusPackage.days[packageDayIndex].img} alt="The day's activities" />
                                </div>
                                <div className="description">
                                    <div className="flex" style={{paddingBottom:'1rem'}}>

                                    <h3 className="daysTitle">
                                        {props.focusPackage.days[packageDayIndex].title}
                                    </h3>

                                    <div className="daysNavigationArrows">
                                        <BsArrowLeft className="icon" onClick={() => {
                                            setPackageDayIndex(packageDayIndex > 0 ? packageDayIndex - 1 : packageDayIndex);
                                        }} />
                                        <BsArrowRight className="icon" onClick={() => {
                                            setPackageDayIndex(packageDayIndex < props.focusPackage.days.length - 1 ? packageDayIndex + 1 : packageDayIndex);
                                        }} />

                                    </div>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: props.focusPackage.days[packageDayIndex].description}}></div>
                                </div>

                                <hr />
                                <div style={{paddingBottom:'1rem'}}></div>

                            </div>
         

                            <h3>Price Includes: </h3>
                            <div className="includes"  dangerouslySetInnerHTML={{ __html: props.focusPackage.includes}}></div>
                            <h3>Price Excludes: </h3>
                            <div className="includes"  dangerouslySetInnerHTML={{ __html: props.focusPackage.excludes}}></div>

                            <br/>
                            <div className="includes"  dangerouslySetInnerHTML={{ __html: props.focusPackage.avaliablity}}></div>


                            <br/>
                            <div className="includes"  dangerouslySetInnerHTML={{ __html: PackagesInfo.reserve}}></div>

                            <br/>
                        </div>


                        <div className="package-purchase ">
                        <div className="flex">

                        <button className="btn flex" onClick={() => {

                        !cookies[CURRENT_USER_COOKIE_NAME]['userSecondName'] ? props.setModalLoginRegisterUser(true) : props.setChatPopUpExpanded(true);
                        }}>
                        Chat
                        <BsChat className="icon" />
                        </button>
                        <span style={{'padding':'1rem'}}>

                        </span>

                        </div>


                            <>
                                <h2>Accomodation</h2>
                                <div className="singleAccomodation">
                                    <div className="destImage">
                                        <img src={props.focusPackage.accomodation.imgSrc} alt={props.focusPackage.accomodation.title} />
                                        <span className="discount">
                                            30% off
                                        </span>
                                    </div>

                                    <div className="AccomodationBody">
                                        <div className="price flex">
                                            <div className="location flex">
                                                <MdLocationOn className="icon" />
                                                <small>{props.focusPackage.accomodation.location}</small>
                                            </div>
                                            <span className="status">
                                                Available
                                            </span>
                                        </div>

                                        <div className="amenities flex">
                                            <div className="singleAmenity flex">
                                                <MdKingBed className="icon" />
                                                <small> {props.focusPackage.accomodation.beds} Beds</small>
                                            </div>

                                            <div className="singleAmenity flex">
                                                <MdBathtub className="icon" />
                                                <small> {props.focusPackage.accomodation.bath} Bath</small>
                                            </div>


                                            <div className="singleAmenity flex">
                                                {
                                                    props.focusPackage.accomodation.wifi ? <FaWifi className="icon" /> : <BsWifiOff className="icon" />
                                                }
                                                <small> Wi-Fi</small>
                                            </div>
                                            {
                                                props.focusPackage.accomodation.shuttle ? <div className="singleAmenity flex">
                                                    <MdAirportShuttle className="icon" />
                                                    <small>Shuttle</small>
                                                </div> : <></>
                                            }

                                            {
                                                props.focusPackage.accomodation.description
                                            }

                                        </div>
                                    </div>
                                </div>

                            </>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SinglePackagePage



