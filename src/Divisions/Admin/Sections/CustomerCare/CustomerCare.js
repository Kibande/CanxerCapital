import React from "react";
import styled from "styled-components";
import './customercare.css'

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



const CustomerCare = () => {
    return (



        <div className="chat">
            <Container>
                {/* <PostEditor/> */}
                <div className="header flex">
                    <h1>Chats </h1>
                    <div className="searchBar flex">
                        <input type="text" placeholder="Search chats" />
                        <BiSearch className="icon" />
                    </div>

                </div>



            </Container>

            <div className="customers flex">

                <div className="allChatSection">


                    <div className="secContainer grid">
                    {
                            users.map((user)=>{
                                return(
                                    <div className="singleCustomer flex">
                                    <img src={user.dpImage} alt="Customerdp" />
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
                    <div className="chat-section">
                        <div className="chat-header">
                            <div className="singleCustomer flex">
                                <img src={img} alt="Customer dp" />
                                <div className="customerDetails">
                                    <span className="name">{users[0].userFirstName} {users[0].userSecondName}</span>
                                    <small>Status: User</small>
                                </div>
                                <div className="duration">
                                    2 min ago
                                </div>
                            </div>
                        </div>
                        <div className="chat-messages">
                            <div className="chat-message received">
                                <p>Hello! How can I assist you today?</p>
                            </div>
                            <div className="chat-message sent">
                                <p>I have a question about your tour packages.</p>
                            </div>
                            <div className="chat-message received">
                                <p>Sure, I'll be happy to help. What would you like to know?</p>
                            </div>
                            <div className="chat-message sent">
                                <p>Are there any discounts available for group bookings?</p>
                            </div>
                        </div>
                        <div className="chat-input">
                            <input type="text" placeholder="Type your message" />
                            <button>Send</button>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default CustomerCare;