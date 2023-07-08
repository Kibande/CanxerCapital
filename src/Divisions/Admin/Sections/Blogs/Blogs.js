import React, { useState } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { BsEye, BsPen, BsPlus, BsTrash } from "react-icons/bs";
import Modal from '../../../Components/Modal/Modal';
import './blogs.css';
import { ADMINEDITBLOGINDEX, ADMINNEWBLOGINDEX, ADMINVIEWBLOGINFOINDEX, Posts } from "../../../../Utilis/data";
const Container = styled.div`
width:100%;
height:20%;
display: flex;
justify-content: center;
align-items: center;

`;



const ControlBtn = styled.div`

`

const DeleteInfo = styled.p`
font-family: 'Montserrat', sans-serif;
font-weight:200;
padding:1rem;
`

const Blogs = (props) => {

    const [deleteBlogModal, setDeleteBlogModal] = useState(false);



    return (
        <>
            {

                deleteBlogModal && <Modal setOpenModal={setDeleteBlogModal} >
                    <>
                        <h3 className="title">Delete Blog Post</h3>

                        <DeleteInfo>

                            <h4>{props.focusBlog.title}</h4>

                            <br />

                           <h5>Post: ID  {props.focusBlog.id}</h5> 

                        </DeleteInfo>

                        <button className="btn">Delete</button>
                    </>
                </Modal>
            }
            <div className="adminBlog">
                <Container>
                    {/* <PostEditor/> */}
                    <div className="header flex">

                        <h1>Blogs </h1>

                        <div className="searchBar flex">
                            <input type="text" placeholder="Search Blogs" />
                            <BiSearchAlt className="icon" />
                        </div>
                        <button className="btn flex" onClick={() => {
                            props.setSectionIndex(ADMINNEWBLOGINDEX);
                        }}>
                            Add <BsPlus className="icon" />
                        </button>

                    </div>



                </Container>

                <div className="secContainer flex">
                    {
                        Posts.map((single_blog) => {
                            return (
                                <div className="flex">
                                    <div className="singleItem">
                                     <div className="blogdetails">
                                        <img src={single_blog.postImage} alt="Image Name" />
                                        <p>{single_blog.title}</p>
                                     </div>
                                      
                                    <div className="controls">
                                        <ControlBtn className="controlBtn" onClick={() => {
                                            props.setFocusBlog(single_blog);
                                            props.setSectionIndex(ADMINVIEWBLOGINFOINDEX);
                                        }}><BsEye className="icon" /></ControlBtn>
                                        <ControlBtn  className="controlBtn"  onClick={() => {
                                            props.setFocusBlog(single_blog);
                                            setDeleteBlogModal(true);
                                        }}><BsTrash className="icon" /></ControlBtn>
                                        <ControlBtn  className="controlBtn"  onClick={() => {
                                            props.setFocusBlog(single_blog);
                                            props.setSectionIndex(ADMINEDITBLOGINDEX);
                                        }}><BsPen className="icon" /></ControlBtn>
                                    </div>
                                    </div>

                                </div>

                            )
                        })

                    }
                </div>

            </div>
        </>
    )
}

export default Blogs;