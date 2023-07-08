import React from "react";
import styled from 'styled-components'
import { motion } from "framer-motion";

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.text};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: rgba(${(props) => props.theme.text}, 0.6);
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Wrapper = styled(motion.div)`
--text-align:center;
position: absolute;
left: 25%;
top: 25%;
z-index: 3;

h1{
  position:relative;
  color:white;
  -webkit-text-stroke:0.01vw black;
  text-transform:uppercase;
}


h1::before
{
  content:attr(data-text);
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  color:yellow;
  -webkit-text-stroke:0 white;
  border-right:2px solid yellow;
  overflow:hidden;
  animation:animate 6s linear infinite;
}

@keyframes animate
{
  0%,10%,100%{
    width:0;
  }
  70%,90%
  {
    width:100%;
  }
}
`;


const About =(props)=>{
 return (
     <>
     <Wrapper
     
     initial={{height:0 }}
     animate={{ height: "50%", width: "50%" }}
     transition={{ type:"just", duration: 2, delay: 1 }}
     >
<Text>
           
            {/* <h1 data-text="Canxer_Capital">Canxer_Capital</h1> */}
            <h3>Trade with no limits.</h3>
            <h6>This is a peer-to-peer marketplace where users can trade cryptocurrencies in a 
              non-custodial manner without the need for an intermediary to facilitate the 
              transfer and custody of funds</h6>
          </Text>
     </Wrapper>
     </>
 );
}

export default About;