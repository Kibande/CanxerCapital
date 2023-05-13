import React  from "react";
import styled from 'styled-components'
import { Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { useChain } from 'react-moralis';

const CustomAlertContainer = styled(motion.div)`
  position: absolute;
  right: 0;
  margin: 1rem;
  top: 50px;
  z-index: 4;
`;


const UnSupportedChainAlert = (props)=>{
    const {chain } = useChain();

    return (<>
            (
          <CustomAlertContainer
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
          >
            <Alert
              variant={"danger"}
            >
              <Alert.Heading>Unsupported Chain</Alert.Heading>
              <p>Please switch your network to either Etherum, Polygon or Binance</p>
              <p>{chain}</p>
            </Alert>
          </CustomAlertContainer>
        );
    </>);
}

export default UnSupportedChainAlert;