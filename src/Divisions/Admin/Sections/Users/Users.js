import React from "react";
import styled from "styled-components";
import './users.css';
import { BiSearch } from "react-icons/bi";

import img from '../../../../Assets/Kruger National Park.jpg'
import { users } from "../../../../Utilis/data";

const Container = styled.div`
width:100%;
height:20%;
display: flex;
justify-content: center;
align-items: center;
`;


const Users = (props) => {
    return (
        <>


            <div className="users">
                <Container>
                    {/* <PostEditor/> */}
                    <div className="header flex">

                        <h1>User Accounts </h1>

                        <div className="searchBar flex">
                            <input type="text" placeholder="Search user" />
                            <BiSearch className="icon" />
                        </div>

                    </div>



                </Container>

                <div className="customers flex">

                    <div className="allUsersSection">


                        <div className="secContainer grid">
                        {
                            users.map((user)=>{
                                return(
                                    <div className="singleCustomer flex">
                                    <img src={user.dpImage} alt="Customer Image" />
                                    <div className="customerDetails">
                                        <span className="name">{user.userFirstName} {user.userSecondName}</span>
                                        <small>Status: <span>{user.userLevel}</span></small>
                                    </div>
                                    <div className="duration">
                                        {user.lastSeen} ago
                                    </div>
                                </div>
                                )
                            })
                        }
                        
                        </div>
                    </div>
                    <div className="focusUserSection">
                        <div className="top">
                            <img src={img} alt="Customer Image" />
                            <div className="customerData">
                                <h4 >Name: </h4>
                                <p>Kibande Steven</p>
                            </div>

                            <div className="customerData">
                                <h4 >Email: </h4>
                                <p>kibandesteven@gmail.com</p>
                            </div>

                        </div>


                        <div className="bottom">
                            <div className="customerData">
                                <h4 >Account Type: </h4>
                                <select className="selectionInput">
                                    <option>User</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                        </div>


                    </div>
                </div>


            </div>


        </>
    )
}

export default Users;