import React from "react";
import HeroImage from "../../Components/HeroImage/HeroImage";
import headerImage from '../../../../Assets/pexels-steward-masweneng-14074141.jpg';
import { DayaToDaySafarisLegal } from "../../../../Utilis/data";




const TermsAndConditions =(props) => {

    return (
             <>
            <HeroImage title={"Tearms And Conditions"} subtitle={""}  image_url={headerImage} height={'40vh'}/>
            <section className="container section" dangerouslySetInnerHTML={{ __html: DayaToDaySafarisLegal.termsandConditions}}>

     
</section>
             </>
    )
}

export default TermsAndConditions
