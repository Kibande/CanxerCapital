import React from 'react'
import styled,{useTheme} from 'styled-components'
import {Col,Row} from 'react-bootstrap'
import { ArrowIcon } from '../utilis/AllSvgs';
const WrappingContainer = styled(Row)`
padding-top:0.1rem;
position:relative;

`;
const SwitchInputFieldsControlIcon= styled(ArrowIcon)`
position:relative;
transform: rotate(180deg);
cursor:pointer;
`;

const SwitchInputFieldsControlContainer = (props) =>{

  const theme = useTheme();

    return (<WrappingContainer>
    
    
    <Col>
                  <hr></hr>
                </Col>
                {props.show_mobile_display ? <Col></Col> : null}
                {props.show_mobile_display ? (
                  <Col onClick={()=>props.handle_switch_input_field_func()}>
                   <SwitchInputFieldsControlIcon height={"3vh"} width={"3vh"} fill={theme.cardBackgroundColor} />
                  </Col>
                ) : (
                  <Col sm="auto"  onClick={()=>props.handle_switch_input_field_func()}>
                    
                    <SwitchInputFieldsControlIcon height={"4vh"} width={"4vh"} fill={theme.cardBackgroundColor} />
                  </Col>
                )}
                {props.show_mobile_display ? <Col></Col> : null}
                <Col>
                  <hr></hr>
                </Col>
    
    </WrappingContainer>);
}


export default SwitchInputFieldsControlContainer;