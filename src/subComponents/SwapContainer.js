import React from "react";
import styled,{useTheme} from "styled-components";
import { motion } from "framer-motion";
import SwapInterface from "./SwapInterface";
const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 3;
`;
const MobileBox = styled(motion.div)`
  position: absolute;
  background-color:${props=>props.theme.cardBackgroundColor};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
  z-index: 3;
  
`;

const BottomSpace = styled.div`
padding:1rem;
`;

function SwapContainer(props) {
       const theme = useTheme();
  return props.show_mobile_display ? (
    <MobileBox
      initial={{height:0 }}
      animate={{ height: "auto", width: "65vw" }}
      transition={{ type:"just", duration: 2, delay: 1 }}
      theme={theme}
    >
    <SwapInterface  chain={props.chain} customTokens={props.customTokens} show_mobile_display={props.show_mobile_display} set_alert_data={props.set_alert_data} set_alert_visbility={props.set_alert_visbility} />
    <BottomSpace/>
    </MobileBox>
  ) : (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "auto" ,width:"65vw"}}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
    <SwapInterface chain={props.chain} customTokens={props.customTokens} show_mobile_display={props.show_mobile_display} set_alert_data={props.set_alert_data} set_alert_visbility={props.set_alert_visbility} />
     <BottomSpace/>
    </Box>
  );
}

export default SwapContainer;
