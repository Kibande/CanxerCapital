import React from "react";
import styled from 'styled-components'
import { Row,Col } from "react-bootstrap";


const TradeDetail = styled(Row)``;

const SwapInterfaceFooter = (props)=> {
    return (
        <>
                      <TradeDetail>
                <Col>1 {props.to_symbol}</Col>
                <Col>{props.price_per_token} {props.from_symbol}</Col>
              </TradeDetail>
              <TradeDetail>
                <Col>Gas</Col>
                <Col>{props.estimated_gas}</Col>
              </TradeDetail>
        </>

      );
}

export default SwapInterfaceFooter;