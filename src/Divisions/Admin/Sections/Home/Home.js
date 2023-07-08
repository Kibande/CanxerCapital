import React from "react";
import './home.css';
import Top from './Components/Top Section/Top'
import Listing from './Components/Listing Section/Listing'
import Activity from './Components/Activity Section/Activity'

const Home =() =>{
    return (
        <div className="mainContent">
            <Top/>
            <div className="bottom flex">
                {/* <Listing/>
                <Activity/> */}
            </div>
        </div>
    );
}

export default Home;