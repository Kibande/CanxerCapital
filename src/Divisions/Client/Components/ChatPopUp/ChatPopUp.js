import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import './chatpopup.css';
import { CURRENT_USER_COOKIE_NAME } from '../../../../Utilis/data';
import styled from 'styled-components';
import { BsBellFill } from 'react-icons/bs';



const Container =styled.div`
width:100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
gap:1rem;
flex-direction:column;
`;

const ChatPopup = (props) => {
    const [newMessage, setNewMessage] = useState(true);

    const [cookies, setCookies] = useCookies([CURRENT_USER_COOKIE_NAME]);
    const handleToggleExpand = () => {
        props.setChatPopUpExpanded(!props.chatPopUpExpanded);
    };

    return (
        <div className={`chat-popup ${props.chatPopUpExpanded ? 'expanded' : ''}`}>
            <div className="chat-header" onClick={handleToggleExpand}>

                <h3>Customer Care</h3>
                {/* {cookies[CURRENT_USER_COOKIE_NAME]['userSecondName'] && newMessage && <BsBellFill className="notification-dot" />} */}
            </div>
            {props.chatPopUpExpanded && (
                <div className="chat-body">
                    {/* {!cookies[CURRENT_USER_COOKIE_NAME]['userSecondName'] ?  */}
                    {true ? 
                    <>
                    <Container>
                        <p>
                            You must be logged in to chat with customer care.
                        </p>
                            <button className='btn' onClick={()=>{
                                props.setModalLoginRegisterUser(true);
                            }}>Click Here</button>
                    </Container>
                    </> :
                     <>   <div className="chat-messages">
                        <div className="chat-message sent">
                            <p>Hello.</p>
                        </div>
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
                        </div></>}

                </div>
            )}
        </div>
    );
};

export default ChatPopup;
