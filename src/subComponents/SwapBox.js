import React, { useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { Col, Row, Ratio, Form, InputGroup, Button } from 'react-bootstrap'

const WrappingContainer = styled.div`
  margin: 0.1rem 0;
  padding: 1rem;
  width: 100%;
  background-color:${props=>props.theme.cardBackgroundColor};
`;


const TokenNameContainer =styled(Col)`
align-Items: center;
display: flex;
cursor: pointer;


`;
const TokenName = styled.div`
color:white;
align-self: center;
font-size:14px;
`;

const TokenDetails = styled(Row)`
  cursor: pointer;
  &:hover {
    background-color:rgba(255, 255, 255, 0.2);
  }
  ${props => props.show_mobile_display ? " padding:1rem;" : null}
`;

const MaxButton = styled(Button)`
text-decoration:none;
`

const CustomInputField = styled(Form.Control)`
border-radius:0;
border:none;
padding:auto;
font-size:auto;

`;
const SwapBox = (props) => {
  const theme = useTheme();

  const amount_ref = useRef();
  return (
    <>
      <WrappingContainer theme={theme}>
        <Row>
          <Col sm={props.show_mobile_display ? "12" : "4"}>
            <TokenDetails
              onClick={() => {
                props.setShowTokenListModal(true);
              }}
              show_mobile_display={props.show_mobile_display}
            >
              <Col>
                <div style={{ width: "40px", height: "auto", margin: 'auto' }}>
                  <Ratio aspectRatio="1x1">
                    <img src={props.token_img_url} alt="Token Icon" />
                  </Ratio>
                </div>
              </Col>
              <TokenNameContainer>
                <TokenName>{props.token_symbol}</TokenName>
              </TokenNameContainer>
            </TokenDetails>
          </Col>
          <Col>
            <InputGroup>
              <CustomInputField placeholder="Amount" inputMode='decimal' value={props.value} onChange={props.on_change ? () => { props.on_change(amount_ref.current.value) } : () => { }} ref={amount_ref} readOnly={props.read_only} />
              {props.read_only ? null : <MaxButton size="sm">Max</MaxButton>}
            </InputGroup>
          </Col>
        </Row>
      </WrappingContainer>
    </>
  );
}


export default SwapBox;