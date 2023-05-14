import React from 'react'
import { Container,Row } from 'react-bootstrap';
import styled  from 'styled-components';
import PersonProfile from '../subComponents/PersonProfile';
import steveDp from "../assets/Images/steve.jpg";
import cathyDP from "../assets/Images/cathy.jpg";
import mandeDp from "../assets/Images/mande.jpg";

const Wrapper = styled.div`
width:80%;
height:100%;
overflow:scroll;
text-align:center;
position: absolute;
left: 20%;
top: 10%;
z-index: 3;
font-size: calc(0.5rem + 1.5vw);
font-weight: 300;
`;

const HeaderText=styled.h3`
align-self:center;
padding:20px;
position:relative;
left:-10%;
color:white;
`;

const Spacer = styled(Container)`
height:100px;
background-color:transparent;
position:relative;

`;
const Team = (props) =>{
    return(
        <>
        <Wrapper>
<Container>
<HeaderText>Team members</HeaderText>
<Row xl={3} sm={1} lg={3}>
<PersonProfile about="Kibande Steven is a Software and Systems Engineer Graduate from Mbarara University of Science and Technology with 2 years of web3 programming. Software Engineer | Full-Stack Developer | FinTech | Web3 | Solidity" name="STEVEN KIBANDE" dp={steveDp} githubLink="https://github.com/Kibande" twitterLink="https://twitter.com/stevenkibande" linkedInLink="https://www.linkedin.com/in/kibande-steven-23389a178" />
<PersonProfile about="Project Development Manager at Canxer Capital. My excellent communication and interpersonal skills have enabled me to collaborate effectively with stakeholders, build consensus, and manage project risks effectively. " name="CATHY LUMBERWOOD" dp={cathyDP} githubLink="" twitterLink="https://twitter.com/" linkedInLink="https://www.linkedin.com/in/cathy-lumberwood-339936263" />
<PersonProfile about="Ambitious professional with Canadian Securities Course accreditation and a track record in generating sales and investments. Stephenson has a plethora of experience and knowledge trading CFDs, precious metals, stock futures and crypto currency futures. As the assets management specialist he leads the team in sourcing business opportunites and following up on leads while actively employing technical strategies to maintain the liquidity pool of the decentralized peer to peer exchange " name="STEPHENSON MANDE" dp={mandeDp} githubLink="" twitterLink="https://twitter.com/" linkedInLink="https://www.linkedin.com/in/stephenson-mande" />
</Row>
</Container>
<Spacer></Spacer>

        </Wrapper>
        </>
    )
}

export default Team;