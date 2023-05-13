import React  from "react";
import styled from 'styled-components'
import { Alert } from "react-bootstrap";
import { motion } from "framer-motion";

const CustomAlertContainer = styled(motion.div)`
  position: absolute;
  right: 0;
  margin: 1rem;
  bottom: 0;
  z-index: 4;
`;


const CustomAlert = (props)=>{
    return (<>
            {props.showErrorAlert ? (
          <CustomAlertContainer
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ type: "spring", duration: 0.5, delay: 0.1 }}
          >
            <Alert
              variant={props.variant}
              onClose={() => {
                props.setShowErrorAlert(false);
              }}
              dismissible
            >
              <Alert.Heading>{props.heading}</Alert.Heading>
              <p>{props.body}</p>
            </Alert>
          </CustomAlertContainer>
        ) : null}
    </>);
}

export default CustomAlert;