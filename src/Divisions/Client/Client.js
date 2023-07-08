import React, {useState } from 'react';


import BlogPage from './Pages/BlogPage/BlogPage';
import HomePage from './Pages/HomePage/HomePage';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import AboutUsPage from './Pages/AboutUsPage/AboutUsPage';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions';
import Testimonals from './Pages/Testimonals/Testimonals';
import SingleBlogPage from './Pages/SingleBlogPage/SingleBlogPage';
import SinglePackagePage from './Pages/SinglePackagePage/SinglePackagePage';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import './app.css';


const Client = (props) => {
    const [sectionIndex, setSectionIndex] = useState(0);
    const [focusBlog, setFocusBlog] = useState({});
    const [focusPackage, setFocusPackage] = useState({});
    const [modalLoginRegisterUser, setModalLoginRegisterUser] = useState(false);
    const [chatPopUpExpanded, setChatPopUpExpanded] = useState(false);

    const sections = [
        <HomePage setSectionIndex={setSectionIndex} setFocusBlog={setFocusBlog} setFocusPackage={setFocusPackage} />,
        <SinglePackagePage focusPackage={focusPackage} modalLoginRegisterUser={modalLoginRegisterUser} setModalLoginRegisterUser={setModalLoginRegisterUser} chatPopUpExpanded={chatPopUpExpanded} setChatPopUpExpanded={setChatPopUpExpanded} />,
        <BlogPage setSectionIndex={setSectionIndex} setFocusBlog={setFocusBlog} />,
        <ContactUsPage />,
        <AboutUsPage />,
        <TermsAndConditions />,
        <Testimonals />,
        <SingleBlogPage focusBlog={focusBlog} image_url={'https://www.teachucomp.com/wp-content/uploads/blog-7-12-2021-createheadersandfootersinexcel-1024x576.jpg'} />

    ]


    return (

        <>
            <Navbar sectionIndex={sectionIndex} setSectionIndex={setSectionIndex} modalLoginRegisterUser={modalLoginRegisterUser} setModalLoginRegisterUser={setModalLoginRegisterUser}/>
            {sections[sectionIndex]}
            <Footer sectionIndex={sectionIndex} setSectionIndex={setSectionIndex} modalLoginRegisterUser={modalLoginRegisterUser} setModalLoginRegisterUser={setModalLoginRegisterUser} chatPopUpExpanded={chatPopUpExpanded} setChatPopUpExpanded={setChatPopUpExpanded} />
        </>

    )
}

export default Client