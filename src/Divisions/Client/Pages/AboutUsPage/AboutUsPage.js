import React from "react";
import HeroImage from "../../Components/HeroImage/HeroImage";
import styled from "styled-components";
import headerImage from '../../../../Assets/pexels-steward-masweneng-14074141.jpg';

const Paragraph=styled.p`

padding-top:1rem;
padding-bottom:1rem;

`;


const AboutUsPage =(props) => {

    return (
             <>
            <HeroImage title={"About Us"} subtitle={""}  image_url={headerImage} height={'30vh'}/>
            <section className="container section">
                <Paragraph>
            We are a team of passionate travel enthusiasts who have come together to create an unforgettable experience for our clients. Our goal is to provide unique and exciting travel options to people from all walks of life.
            </Paragraph>

            <Paragraph>
Our team consists of experienced travel professionals who are dedicated to providing you with exceptional service from the moment you book your trip until you return home. We take pride in creating customized itineraries that are tailored to meet your specific needs and preferences.
</Paragraph>
<Paragraph>
At our company, we believe that travel should be an enriching and transformative experience. That's why we work hard to ensure that our trips are not only enjoyable but also educational and culturally immersive. We believe that travel has the power to bring people together, promote understanding and tolerance, and broaden our perspectives on the world.
</Paragraph>
<Paragraph>
Whether you are looking for an adventure-packed trip or a relaxing getaway, we have something for everyone. Our destinations are carefully chosen to offer a unique and unforgettable experience. We strive to create trips that allow you to connect with nature, explore different cultures, and create lasting memories.
</Paragraph>
<Paragraph>
Thank you for choosing us as your travel partner. We look forward to helping you plan your next adventure!
</Paragraph>     
</section>
             </>
    )
}

export default AboutUsPage