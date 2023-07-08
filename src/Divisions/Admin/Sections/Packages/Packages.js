import React, { useState } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { BsEye, BsPen, BsPlus, BsTrash } from "react-icons/bs";
import Modal from '../../../Components/Modal/Modal';
import './packages.css';
import { ADMINEDITPACKAGEINDEX, ADMINNEWPACKAGEINDEX, ADMINVIEWPACKAGEINDEX, PackagesData } from "../../../../Utilis/data";
import { MdLocationOn, MdTimer } from "react-icons/md";
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

const Packages = (props) => {

    const [deletePackageModal, setDeletePackageModal] = useState(false);



    return (
        <>
            {

                deletePackageModal && <Modal setOpenModal={setDeletePackageModal} >
                    <>
                        <h3 className="title">Delete Package</h3>

                        <DeleteInfo>

                            <h4>{props.focusPackage.title}</h4>

                            <br />

                           <h5>Post: ID  {props.focusPackage.id}</h5> 

                        </DeleteInfo>

                        <button className="btn">Delete</button>
                    </>
                </Modal>
            }
            <div className="adminPackage">
                <Container>
                    {/* <PostEditor/> */}
                    <div className="header flex">

                        <h1>Packages </h1>

                        <div className="searchBar flex">
                            <input type="text" placeholder="Search Packages" />
                            <BiSearchAlt className="icon" />
                        </div>
                        <button className="btn flex" onClick={() => {
                            props.setSectionIndex(ADMINNEWPACKAGEINDEX);
                        }}>
                            Add <BsPlus className="icon" />
                        </button>

                    </div>



                </Container>

                <div className="secContainer flex">
                    {
                    PackagesData.map((single_Package) => {
                            return (
                                <div className="flex packageBasket">
                                    <div className="singleItem">
                                     <div className="packagedetails">
                                        <img src={single_Package.img} alt="Image Name" />
                                        <p>{single_Package.title}</p>
                                     </div>
                                      
                                    <div className="controls">
                                        <ControlBtn className="controlBtn" onClick={() => {
                                            props.setFocusPackage(single_Package);
                                            props.setSectionIndex(ADMINVIEWPACKAGEINDEX);
                                        }}><BsEye className="icon" /></ControlBtn>
                                        <ControlBtn  className="controlBtn"  onClick={() => {
                                            props.setFocusPackage(single_Package);
                                            setDeletePackageModal(true);
                                        }}><BsTrash className="icon" /></ControlBtn>
                                        <ControlBtn  className="controlBtn"  onClick={() => {
                                            props.setFocusPackage(single_Package);
                                            props.setSectionIndex(ADMINEDITPACKAGEINDEX);
                                        }}><BsPen className="icon" /></ControlBtn>
                                    </div>
                                 
                                    </div>

                                    <div className="amenities flex">
                                            <div className="singleAmenity flex">
                                                <MdLocationOn className="icon" />
                                                <small> {single_Package.country} </small>
                                            </div>

                                            <div className="singleAmenity flex">
                                                <MdTimer className="icon" />
                                                <small> {single_Package.days.length} Days</small>
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

export default Packages;