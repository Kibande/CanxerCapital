/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect} from "react";
import './footer.css';
import { SiFacebook, SiWhatsapp } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";

import {FloatingWhatsApp} from 'react-floating-whatsapp';
import Aos from "aos";
import 'aos/dist/aos.css';
import Logo from "../../../../Utilis/logo";
import { FooterInfoLinks,FooterHelpfulLinks, CompanyTel, CompanyEmail, WHATSAPP_CONTACT } from "../../../../Utilis/data";
import ChatPopup from "../ChatPopUp/ChatPopUp";
import dp from '../../../../Assets/dp.png';

const Footer =(props) => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    
    return (
        <>
        <FloatingWhatsApp phoneNumber={WHATSAPP_CONTACT} accountName="Customer Care" statusMessage="Typically replies within 20 minutes" avatar={dp} />
        <ChatPopup modalLoginRegisterUser={props.modalLoginRegisterUser} setModalLoginRegisterUser={props.setModalLoginRegisterUser} chatPopUpExpanded={props.chatPopUpExpanded} setChatPopUpExpanded={props.setChatPopUpExpanded}/>
        <div className="footer">
            <div className="secContainer container grid">
                <div className="logoDiv">
                    <div className="footerLogo">
                        <a data-aos="fade-up" data-aos-duration="2000" href="#" className="logo flex">
                            <h1 className="flex"> <Logo className="icon customLogo"/> Day to day safaris</h1> 
                        </a>
                    </div>

                    
                <div  className="socials flex">
                    <SiWhatsapp  className="icon"/>
                    <SiFacebook  className="icon"/>
                    <SiTwitter className="icon"/>
                    <SiInstagram  className="icon"/>
                </div>

                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
                    <span className="linkTitle">
                        Info links
                    </span>
                        {
                            FooterInfoLinks.map(({title,pageIndex})=>{
                                        return(
                                        <li>
                                            <a href="#" className={props.sectionIndex===pageIndex?"active":""}  onClick={()=>{props.setSectionIndex(pageIndex)}}>{title}</a>
                                        </li>
                                        )
                            })
                        }
                </div>

              
                <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
                    <span className="linkTitle">
                    Helpful links
                    </span>
                        {
                            FooterHelpfulLinks.map(({title,pageIndex})=>{
                                        return(
                                        <li>
                                            <a href="#" className={props.sectionIndex===pageIndex?"active":""} onClick={()=>{props.setSectionIndex(pageIndex)}}>{title}</a>
                                        </li>
                                        )
                            })
                        }

                </div>

                <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
                    <span className="linkTitle">
                       Contact Us
                    </span>
                    <span className="phone">{CompanyTel}</span>
                    <span className="email">{CompanyEmail}</span>
                    <div  className="priceDiv">
                            <input type="text" placeholder="Subscribe to our news letter"/>
                        </div>   

                        <button className="btn" style={{color:'white'}}>Subscribe</button> 
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;