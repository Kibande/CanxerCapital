import React from 'react'
import { Card,Nav} from 'react-bootstrap';
import styled  from 'styled-components';
import { Twitter,LinkedIn} from "../utilis/AllSvgs";
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    z-index: 3;
    position:relative;
    height: 10vh; 
`;

const Icon =styled.div`
margin: 10px 5px;
position:relative;
align-self: center;
position:relative;
cursor: pointer;
`;

const Wrappper = styled.div`
margin:10px;
width:300px;
height: auto;
padding:1rem;
background-color: rgba(0, 0, 0, 0.299);

`;

const NameTag=styled.h3`
height:10vh;
text-align: center;
color:white;
padding:1rem;
`;

const About=styled.div`
font-size:14px;
height:20vh;
text-overflow: ellipsis;
overflow: scroll;
color:rgb(210, 210, 210);
::-webkit-scrollbar{
    display:none;
}
scrollbar-width:none;
-ms-overflow-style:none;
`;


const PersonProfile = (props) => {
     
    return (
        <Wrappper>
            <Card.Img variant="top" src={props.dp}  />
            <NameTag>{props.name}</NameTag>
            <About>
                {props.about}
            </About>

            <Icons>
            <Icon>
            <Nav.Link href={props.twitterLink} target='_blank'>
            <Twitter width={25} height={25} fill={'rgb(210, 210, 210)'} />
            </Nav.Link>
            </Icon>

            <Icon>
            <Nav.Link href={props.linkedInLink} target='_blank'>
            <LinkedIn width={25} height={25} fill={'rgb(210, 210, 210)'} />
            </Nav.Link>
            </Icon>
            </Icons>

      </Wrappper>
    );
};

export default PersonProfile;
