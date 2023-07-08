/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './sidebar.css';

import Logo from "../../../Utilis/logo";


import { IoIosPeople, IoMdSpeedometer} from 'react-icons/io';
import { RiCustomerService2Line} from 'react-icons/ri';
import { BsQuestionCircle} from 'react-icons/bs';
import { MdBook, MdCardGiftcard, MdExplore, MdInfo,  MdAnalytics, MdPayments, MdSecurity,MdDashboard, MdHomeFilled, MdLocationPin} from 'react-icons/md';
import { ADMINQUICKMENULINKS,ADMINMANAGEMENTLINKS, ADMINHOMEINDEX, ADMINDASHBOARDINDEX, ADMINDESTINATIONSINDEX, ADMINACCOMODATIONINDEX, ADMINBLOGSINDEX, ADMINPACKAGESINDEX, ADMINWEBSITEINFOINDEX, ADMINCUSTOMERCAREINDEX, ADMINANALYTICSINDEX, ADMINPAYMENTSINDEX, ADMINBOOKINGSINDEX, ADMINUSERSINDEX, ADMINSECURITYINDEX } from "../../../Utilis/data";


function getIcon(pageIndex){
    if (pageIndex===ADMINDASHBOARDINDEX){
        return <MdDashboard className="icon"/>
    }else if (pageIndex===ADMINDESTINATIONSINDEX){
        return <MdLocationPin className="icon"/>
    }else if (pageIndex===ADMINACCOMODATIONINDEX){
        return <MdHomeFilled className="icon"/>
    }else if (pageIndex===ADMINBLOGSINDEX){
        return <MdBook className="icon"/>
    }else if (pageIndex===ADMINPACKAGESINDEX){
        return <MdCardGiftcard className="icon"/>
    }else if (pageIndex===ADMINWEBSITEINFOINDEX){
        return <MdInfo className="icon"/>
    }else if (pageIndex===ADMINCUSTOMERCAREINDEX){
        return <RiCustomerService2Line className="icon"/>
    }else if (pageIndex===ADMINANALYTICSINDEX){
        return <MdAnalytics className="icon"/>
    }else if (pageIndex===ADMINPAYMENTSINDEX){
        return <MdPayments className="icon"/>
    }else if (pageIndex===ADMINBOOKINGSINDEX){
        return <MdExplore className="icon"/>
    }else if (pageIndex===ADMINUSERSINDEX){
        return <IoIosPeople className="icon"/>
    }else if (pageIndex===ADMINSECURITYINDEX){
        return <MdSecurity className="icon"/>
    }else{
        return <IoMdSpeedometer className="icon"/>
    }
}

const SideBar =(props) =>{
    return (
        <div className="sideBar grid">
            <div className="logoDiv flex" onClick={()=>{props.setSectionIndex(ADMINHOMEINDEX);}}>
                <Logo className="img"  />
                <h2>Day to day Safaris</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>
                <ul className="menuLists grid">

                {
                    ADMINQUICKMENULINKS.map(({title,pageIndex})=>{
                                return(
                                    <li className="listItem">
                                            <a href="#"  className={props.sectionIndex===pageIndex?"menuLink flex active":"menuLink flex"} onClick={()=>{props.setSectionIndex(pageIndex);}}>
                                                {getIcon(pageIndex)}
                                                <span className="smallText">
                                                    {title}
                                                </span>
                                            </a>
                                        </li>
                                        
                                )
                    })
                }
                        



                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">
                    Management
                </h3>
                <ul className="menuLists grid">

                {
                    ADMINMANAGEMENTLINKS.map(({title,pageIndex})=>{
                                return(
                                    <li className="listItem">
                                            <a href="#"  className={props.sectionIndex===pageIndex?"menuLink flex active":"menuLink flex"} onClick={()=>{props.setSectionIndex(pageIndex);}}>
                                                {getIcon(pageIndex)}
                                                <span className="smallText">
                                                    {title}
                                                </span>
                                            </a>
                                        </li>
                                        
                                )
                    })
                }
                </ul>
            </div>

            <div className="sideBarCard">
                <BsQuestionCircle className="icon"/>
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div  className="circle2"></div>

                    <h3 style={{'color':'white'}}>Help Center</h3>
                    <p style={{'color':'white'}}>Having trouble with the Admin Panel, please contact us for support</p>
                    <button style={{'color':'black'}}className="btn">Go to help center</button>
                </div>
            </div>
        </div>
    );
}

export default SideBar;