import React from "react";
import styled from 'styled-components';
import { Button,Spinner } from "react-bootstrap";


const CustomButton=styled(Button)`
text-transform:uppercase;
font-size:20px;
letter-spacing:2px;
padding: 5px 10px;
border:2px solid #fff;
background-color:transparent;

&:hover{
background-color:rgba(0,0,0,0.6);
}
`;



const SwapInterfaceButton = (props)=> {
    return ( 
        <>
        <div className="d-grid gap-1" style={{paddingTop:"1rem"}}>
                <CustomButton
                  variant="primary"
                  disabled={props.isLoading||props.is_disabled}
                  onClick={!props.isLoading ? props.handleSwapButtonClick : null}
                  size="lg"
                >
                  {props.isLoading ? (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : null}
                  {props.isLoading ? " Loading…" : props.text}
                </CustomButton>
              </div>
        </>
     );
}

export default SwapInterfaceButton;