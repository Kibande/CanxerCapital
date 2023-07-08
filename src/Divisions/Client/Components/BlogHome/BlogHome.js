import React from "react";
import './bloghome.css';


const BlogHome =(props) => {

    return (
             <>
             <div className="blogHome">
             <div className="secContainer container">

                    <div className="blogCard grid">
                        <div  className="searchDiv">
                            <label htmlFor="tag">Looking for something particular?</label>
                            <input type="text" placeholder="Search.."/>
                        </div>   

                        <button className="btn">Search</button>                     
                    </div>
                </div>
             </div>
             </>
    )
}

export default BlogHome;