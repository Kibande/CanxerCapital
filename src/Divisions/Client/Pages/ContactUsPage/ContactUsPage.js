import React from "react";
import HeroImage from "../../Components/HeroImage/HeroImage";
import styled from "styled-components";
import headerImage from '../../../../Assets/pexels-steward-masweneng-14074141.jpg';

const ContactUsForm = styled.div`
width:100%;
display: flex;
justify-content: center;
align-items: center;
`;

const ContactUsPage =(props) => {

    return (
             <>
             <HeroImage title={"Contact Us"} image_url={headerImage} subtitle={"Send us a message and we shall get back to you as soon as we can!"}/>
             <ContactUsForm>
             <div className="contactUsForm">
                <h4>Please fill out all fields.</h4>

                        <div className="inputField">
                            <label htmlFor="User name">Sender Name</label>
                            <input type="text" placeholder="User name"/>
                        </div>


                        <div className="inputField">
                            <label htmlFor="User email">Contact Email</label>
                            <input type="email" placeholder="example@gmail.com"/>
                        </div>

                        <div className="inputField">
                            <label htmlFor="Messaeg Topic">Topic</label>
                            <input type="text" placeholder="Topic"/>
                        </div>   

                        <div className="inputField">
                            <label htmlFor="Message body">Message</label>
                            <textarea type="text" rows={5}   placeholder="Message"/>
                        </div>  

                        <button  className="btn">Submit</button>  
            </div>
             </ContactUsForm>
             
             </>
    )
}

export default ContactUsPage