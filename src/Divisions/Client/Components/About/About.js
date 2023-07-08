import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import './about.css';

import customer from '../../../../Assets/customer.jpg'
import security from '../../../../Assets/security.jpg'
import img1 from '../../../../Assets/pexels-pixabay-164287.jpg'
import video from '../../../../Assets/pexels-andres-segura-15937905-640x360-30fps.mp4'




const About =() => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, []);

    return (
        <section className="about section">
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="1500" className="title">
                    Why trust us?
                </div>

                <div  className="mainContent container grid">
                    <div data-aos="fade-up" data-aos-duration="2000"  className="singleItem">
                        <img src={img1} alt="Image Name"/>

                        <h3>Expertise and Experience</h3>
                        <p>
                         We pride ourselves on our team's expertise and extensive experience in the tourism industry. Our team members are passionate about travel and dedicated to providing our customers with the best possible experiences. 
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
                        <img src={customer} alt="Image Name"/>

                        <h3>Customer Satisfaction</h3>
                        <p>
                         At Day to Day Safaris, customer satisfaction is our top priority. We believe that our customers should be completely satisfied with every aspect of their trip, from the moment they first contact us until the moment they return home.
                        </p>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
                        <img src={security} alt="Image Name"/>

                        <h3>Safety and Security</h3>
                        <p>
                          We take the safety and security of our customers very seriously. We carefully select our partner accommodations, transportation providers, and tour guides to ensure that they meet our strict standards for safety and security.
                        </p>
                    </div>

                </div>

                <br/>

                <div className="videoCard container">
                    <div className="cardContent grid">
                        <div data-aos="fade-right" className="cardText">
                            <h2>Experience the adventure of a lifetime with us!</h2>
                            <p>
                            Let us take you on a journey of discovery and exploration, where every moment is an adventure and every memory is a treasure
                            </p>
                        </div>


                        <div data-aos="fade-left" className="cardVideo">
                            <video src={video} autoPlay loop muted type="video/mp4">

                            </video>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default About;