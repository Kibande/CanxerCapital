/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from "react";
import './navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import Logo from "../../../../Utilis/logo";
import { AUTH_TOKEN, CURRENT_USER_COOKIE_NAME, HeaderLinks, users } from "../../../../Utilis/data";
import Modal from '../../../Components/Modal/Modal';
import styled from "styled-components";
import { useMutation } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { LOGIN_MUTATION, SIGNUP_MUTATION, UPDATE_LAST_SEEN_MUTATION } from '../../../../Utilis/queries_and_mutations'

const Container = styled.div`
padding:1rem;
width:100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Navbar = (props) => {

    const [active, setActive] = useState('navBar');
    const [modalLoginOpen, setModalLoginOpen] = useState(false);
    const [modalSignUpOpen, setModalSignUpOpen] = useState(false);
    const [modalLogOut, setModalLogOut] = useState(false);


    const [cookies, setCookies] = useCookies([CURRENT_USER_COOKIE_NAME]);

function EmptyFun() {
    
}
    useEffect(()=>{
        const interval = setInterval(()=>{
        cookies[CURRENT_USER_COOKIE_NAME]['userSecondName'] ??updateLastSeen();
        },10000);
        return ()=>clearInterval(interval);
    },[]);

    const [signUpFormData, setSignUpFormData] = useState({
        login: true,
        userSecondName: '',
        userEmail: '',
        password: '',
        confirm_password: '',
        code: '',
    });



    // const [updateLastSeen] = useLastSeenMutation();


    const [updateLastSeen] = useMutation(UPDATE_LAST_SEEN_MUTATION,{

        onCompleted: (response)=>{
            localStorage.setItem(AUTH_TOKEN,response['updateLastSeen']);
        },
        onError: (error)=>{
            // alert(error);
            // console.log(error);

        }
    });

    const [signUpApiCall] = useMutation(SIGNUP_MUTATION, {
        variables: {
            userFirstName: 'User',
            userSecondName: signUpFormData.userSecondName,
            userEmail: signUpFormData.userEmail,
            userTel: '0000000',
            userLevel:'User',
            password: signUpFormData.password
        }, onCompleted: (response) => {
            console.log(response);
            setCookies(CURRENT_USER_COOKIE_NAME, response['registerUser'], { path: '/', secure: false });
            localStorage.setItem(AUTH_TOKEN,response['registerUser']['authToken']);
            setModalSignUpOpen(false);
        }, onError: (error) => {
            alert(error);
        }
    });

    const [loginApiCall] = useMutation(LOGIN_MUTATION, {
        variables: {
            userEmailOrTel: signUpFormData.userEmail,
            password: signUpFormData.password
        }, onCompleted: (response) => {
            console.log(response);
            setCookies(CURRENT_USER_COOKIE_NAME, response['login'], { path: '/', secure: false });
            localStorage.setItem(AUTH_TOKEN,response['login']['authToken']);
            setModalLoginOpen(false);
        }, onError: (error) => {
            alert(error);
        },

        
    });


    function submitSignUpHandler(event) {
        event.preventDefault();
        if (signUpFormData.password !== signUpFormData.confirm_password) {
            alert("Passowrds do not match!")
        } else {
            signUpApiCall();
        }
    }


    function submitLoginHandler(event) {
        event.preventDefault();
        loginApiCall();
    }
    const showNav = () => {
        setActive('navBar activeNavbar');
    }

    const removeNav = () => {
        setActive('navBar')
    }

    const [transparent, setTransparent] = useState('header');

    const addBg = () => {
        if (window.scrollY >= 10) {
            setTransparent('header activeHeader')
        } else {
            setTransparent('header');
        }
    }

    window.addEventListener('scroll', addBg);

    return (
        <>

            {
                props.modalLoginRegisterUser && <Modal setOpenModal={props.setModalLoginRegisterUser}>

                    <div className="title">
                        <p>Hello Client. </p>
                        <Container>
                            <div className="headerBtns flex" style={{ 'justifyContent': 'space-between', 'gap': '1rem'}}>


                                <button className="btn loginBtn" onClick={() => {
                                    props.setModalLoginRegisterUser(false);
                                    setModalLoginOpen(true); removeNav();
                                    setSignUpFormData({
                                        ...signUpFormData,
                                        login: true
                                    });

                                }}>
                                    <a href="#" >Login</a>
                                </button>

                                <button className="btn" onClick={() => {
                                    props.setModalLoginRegisterUser(false);
                                    setModalSignUpOpen(true); removeNav();
                                    setSignUpFormData({
                                        ...signUpFormData,
                                        login: false
                                    })
                                }}>
                                    <a href="#" >Sign Up</a>
                                </button>
                            </div>
                        </Container>
                    </div>

                </Modal>
            }
            {modalLoginOpen &&


                <Modal setOpenModal={setModalLoginOpen} >
                    <form onSubmit={submitLoginHandler} autoComplete="false"  >
                        <div className="userAuthentication">
                            <h2>Login</h2>
                            <div className="inputField">
                                <label htmlFor="Email">Email</label>
                                <input type="email" placeholder="example@gmail.com" onChange={(e) => {
                                    setSignUpFormData({
                                        ...signUpFormData,
                                        userEmail: e.target.value
                                    })

                                }} />
                            </div>

                            <div className="inputField">
                                <label htmlFor="Password">Password</label>
                                <input type="password" placeholder="Password" onChange={(e) => {
                                    setSignUpFormData({
                                        ...signUpFormData,
                                        password: e.target.value
                                    })

                                }} />
                            </div>

                            <button className="btn">Login</button>
                        </div>

                    </form>
                </Modal>
            }


            {modalLogOut &&


                <Modal setOpenModal={setModalLogOut} >

                    <div className="">
                        <p>Want to logout? </p>
                        <Container>
                            <button className="btn" onClick={() => {
                                setCookies(CURRENT_USER_COOKIE_NAME, null, { path: '/', secure: false });
                                localStorage.clear();
                                setModalLogOut(false);
                            }}>Yes</button>
                        </Container>

                    </div>


                </Modal>
            }
            {modalSignUpOpen &&


                <Modal setOpenModal={setModalSignUpOpen} >
                    <form onSubmit={submitSignUpHandler} autoComplete="false">
                        <div className="userAuthentication">
                            <h2>SignUp</h2>

                            <div className="inputField">
                                <label htmlFor="User name">User name</label>
                                <input type="text" placeholder="User name" onChange={(e) => {
                                    setSignUpFormData({
                                        ...signUpFormData,
                                        userSecondName: e.target.value
                                    })

                                }} />
                            </div>


                            <div className="inputField">
                                <label htmlFor="User email">Email</label>
                                <input type="email" placeholder="example@gmail.com" onChange={(e) => {
                                    setSignUpFormData({
                                        ...signUpFormData,
                                        userEmail: e.target.value
                                    })

                                }} />
                            </div>

                            <div className="inputField">
                                <label htmlFor="User Password">Password</label>
                                <input type="password" placeholder="Password" onChange={(e) => {
                                    setSignUpFormData({
                                        ...signUpFormData,
                                        password: e.target.value
                                    })

                                }} />
                            </div>

                            <div className="inputField">
                                <label htmlFor="Confirm Password">Confirm</label>
                                <input type="password" placeholder="Confirm Password" onChange={(e) => {
                                    setSignUpFormData({
                                        ...signUpFormData,
                                        confirm_password: e.target.value
                                    })

                                }} />
                            </div>

                            <button className="btn">Register</button>
                        </div>

                    </form>
                </Modal>
            }
            <section className="navBarSection">
                <div className={transparent}>
                    <div className="logoDiv">
                        <a href="#" className="logo">
                            <h1 className=""><Logo className="icon" /> Day to day safaris </h1>
                        </a>
                    </div>

                    <div className={active}>
                        <ul className="navLists flex">

                            {
                                HeaderLinks.map(({ title, pageIndex }) => {
                                    return (
                                        <li className="navItem">
                                            <a href="#" className={props.sectionIndex === pageIndex ? "navLink active" : "navLink"} onClick={() => { props.setSectionIndex(pageIndex); removeNav(); }}>{title}</a>
                                        </li>
                                    )
                                })
                            }

                            {
                                !cookies[CURRENT_USER_COOKIE_NAME]['userSecondName'] ? <div className="headerBtns flex">


                                    <button className="btn loginBtn" onClick={() => {
                                        setModalLoginOpen(true); removeNav();
                                        setSignUpFormData({
                                            ...signUpFormData,
                                            login: true
                                        })
                                    }}>
                                        <a href="#" >Login</a>
                                    </button>

                                    <button className="btn" onClick={() => {
                                        setModalSignUpOpen(true); removeNav();
                                        setSignUpFormData({
                                            ...signUpFormData,
                                            login: false
                                        })
                                    }}>
                                        <a href="#" >Sign Up</a>
                                    </button>
                                </div> : <div className="singleCustomer flex">
                                    {/* <img src={cookies[CURRENT_USER_COOKIE_NAME]['dpImage']} alt="Customer Image" /> */}
                                    <img src={users[0].dpImage} alt="Customer Image" />
                                    <div className="customerDetails">
                                        <span className="name">{cookies[CURRENT_USER_COOKIE_NAME]['userSecondName']}</span>
                                        <small onClick={() => {
                                            setModalLogOut(true); removeNav();
                                        }} >Logout</small>
                                    </div>

                                </div>
                            }
                        </ul>

                        <div onClick={removeNav} className="closeNavbar">
                            <AiFillCloseCircle className="icon" />
                        </div>
                    </div>

                    <div onClick={showNav} className="toggleNavbar">
                        <TbGridDots className="icon" />
                    </div>
                </div>
            </section></>
    )
}

export default Navbar;