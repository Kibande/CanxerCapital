import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import './offer.css';
import {MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn} from 'react-icons/md';
import {FaWifi} from 'react-icons/fa';
import { BsArrowRightShort } from "react-icons/bs";

import offer1 from '../../../../Assets/pexels-pixabay-258154-min.jpg'
import offer2 from '../../../../Assets/pexels-konstantinos-eleftheriadis-2034335-min.jpg'
import offer3 from '../../../../Assets/pexels-luis-quintero-2111757-min.jpg'

const Offers =[
    {
        id:1,
        imgSrc:offer1,
        destTitle:'Abas Motel',
        location:'Tanzania',
        price: '$452'
    },
    {
        id:2,
        imgSrc:offer2,
        destTitle:'Jonies Spot',
        location:'Uganda',
        price: '$552'
    },
    {
        id:3,
        imgSrc:offer3,
        destTitle:'Villa',
        location:'Kenya',
        price: '$652'
    }
]
const Offer =() => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, []);

    return (
        <section className="offer container section">
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="2500" className="secIntro">
                    <h2 className="secTitle">
                        Special Offers
                    </h2>
                    <p>
                    Rest easy in our cozy accommodations and wake up ready for your next adventure!
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className="mainContent grid">
                       {
                        Offers.map(({id,imgSrc,destTitle,location,price})=>{
                            return(
                                <div className="singleOffer">
                                <div className="destImage">
                                    <img src={imgSrc} alt={destTitle}/>
                                    <span className="discount">
                                        30% off
                                    </span>
                                </div>
    
                                <div className="offerBody">
                                    <div className="price flex">
                                        <h4>
                                           {price}
                                        </h4>
                                        <span className="status">
                                                For Rent
                                        </span>
                                    </div>
    
                                    <div className="amenities flex">
                                        <div className="singleAmenity flex">
                                            <MdKingBed className ="icon"/>
                                            <small> 2 Beds</small>
                                        </div>
    
                                        <div className="singleAmenity flex">
                                            <MdBathtub className ="icon"/>
                                            <small> 1 Bath</small>
                                        </div>
    
    
                                        <div className="singleAmenity flex">
                                            <FaWifi className ="icon"/>
                                            <small> Wi-Fi</small>
                                        </div>
    
                                        <div className="singleAmenity flex">
                                            <MdAirportShuttle className ="icon"/>
                                            <small>Shuttle</small>
                                        </div>
                                    </div>
    
    
                                    <div className="location flex">
                                        <MdLocationOn className="icon"/>
                                        <small>{location}</small>
                                    </div>
    
                                    <button className="btn flex">
                                        View Details
                                    <BsArrowRightShort className="icon" />
                                    </button>
    
                                </div>
                            </div>
                            );
                        })
                       }
                </div>

            </div>
        </section>
    )
}

export default Offer;