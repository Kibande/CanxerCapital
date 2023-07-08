import SideBar from './SideBar Section/Sidebar';
import Accomodation from './Sections/Accomodation/Accomodation';
import Analytics from './Sections/Analytics/Analytics';
import Blogs from './Sections/Blogs/Blogs';

import Bookings from './Sections/Bookings/Bookings';
import CustomerCare from './Sections/CustomerCare/CustomerCare';
import DashBoard from './Sections/DashBoard/DashBoard';
import Destinations from './Sections/Destinations/Destinations';
import Home from './Sections/Home/Home';
import Packages from './Sections/Packages/Packages';
import Payments from './Sections/Payments/Payments';
import Security from './Sections/Security/Security';
import Users from './Sections/Users/Users';
import WebsiteInfo from './Sections/WebsiteInfo/WebsiteInfo';
import React,{useState} from "react";
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import Header from './Components/Header/Header';
import NewBlog from './Sections/Blogs/NewBlog';
import ViewBlog from './Sections/Blogs/ViewBlog';
import EditBlog from './Sections/Blogs/EditBlog';
import NewPackage from './Sections/Packages/NewPackage';
import EditPackage from './Sections/Packages/EditPackage';
import ViewPackage from './Sections/Packages/ViewPackage';
import Login from './Login/Login';
import { CURRENT_USER_COOKIE_NAME } from '../../Utilis/data';
import './app.css';



const AdminStyling =styled.div`
width: 82%;
height: 100%;
padding: 2rem;
overflow: auto;
`;



const Admin =() => {

    const [sectionIndex, setSectionIndex] = useState(0);
    const [focusBlog, setFocusBlog] = useState({});
    const [focusPackage, setFocusPackage] = useState({});

    const sections=[
        <Accomodation sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>,
        <Analytics sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>,
        <Blogs sectionIndex={sectionIndex} setSectionIndex={setSectionIndex} focusBlog={focusBlog} setFocusBlog={setFocusBlog}/>,
        <Bookings sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>,
        <CustomerCare sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>,
        <DashBoard sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>,
        <Destinations sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>,
        <Home sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>,
        <Packages sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}  focusPackage={focusPackage} setFocusPackage={setFocusPackage}/>,
        <Payments sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>,
        <Security sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>,
        <Users sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>,
        <WebsiteInfo sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>,
        <NewBlog sectionIndex={sectionIndex} setSectionIndex={setSectionIndex} focusBlog={focusBlog} setFocusBlog={setFocusBlog}/>,
        <ViewBlog sectionIndex={sectionIndex} setSectionIndex={setSectionIndex} focusBlog={focusBlog} setFocusBlog={setFocusBlog}/>,
        <EditBlog sectionIndex={sectionIndex} setSectionIndex={setSectionIndex} focusBlog={focusBlog} setFocusBlog={setFocusBlog}/>,
        <NewPackage sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}  focusPackage={focusPackage} setFocusPackage={setFocusPackage}/>,
        <EditPackage sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}  focusPackage={focusPackage} setFocusPackage={setFocusPackage}/>,
        <ViewPackage sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}  focusPackage={focusPackage} setFocusPackage={setFocusPackage}/>
        ]
        const [cookies, setCookies] = useCookies([CURRENT_USER_COOKIE_NAME]);


    return (
        <>
     {true ? <div className='container'>
            <SideBar sectionIndex={sectionIndex} setSectionIndex={setSectionIndex}/>
            <AdminStyling>
                <Header/>
                {sections[sectionIndex]}
            </AdminStyling>
     </div>:<Login/>}
     </>
    )
}

export default Admin