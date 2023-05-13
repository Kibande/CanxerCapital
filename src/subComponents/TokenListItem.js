import React from "react";
import styled from 'styled-components'
import {Row,Col,Ratio,Form,Container, Stack} from'react-bootstrap';
const WrapperContainer = styled(Container)`
  cursor: pointer;
  width: 100%;

`;
const TokenListTokenName = styled(Stack)`
  color: ${(props) => props.theme.text};
`;


const TokenListItem = (props) =>
{
    return (
        <div onClick={props.on_token_select}>
        <WrapperContainer>
          
        {props.show_mobile_display ? (
          <Row>
            <Col>
              <div style={{ width: 40, height: 40 }}>
                <Ratio aspectRatio="1x1">
                  <img src={props.token_image_source} alt="Token Icon" />
                </Ratio>
              </div>
            </Col>
            <Col>
            <TokenListTokenName direction='vertical'>
              <div>{props.token_symbol}</div>
              <div><small> {props.token_name}</small></div>
              </TokenListTokenName>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col sm={2}>
              <div style={{ width: 40, height: 40 }}>
                <Ratio aspectRatio="1x1">
                  <img src={props.token_image_source} alt="Token Icon" />
                </Ratio>
              </div>
            </Col>
            <Col sm={8}>
              <TokenListTokenName direction='vertical'>
              <div>{props.token_symbol}</div>
              <div><small> {props.token_name}</small></div>
              </TokenListTokenName>
            </Col>
          </Row>
        )}
        <hr/>
      </WrapperContainer>
      </div>
    );
}

export default TokenListItem;