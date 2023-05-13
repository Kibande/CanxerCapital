import React from "react";
import styled, { useTheme } from "styled-components";
import { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";
const WrappingContainer = styled.div`
  padding: 0.5rem;
  margin: 0;
`;


const SwapInterfaceHeader = (props) => {
  const theme = useTheme();
  return (
    <WrappingContainer>
      <Stack direction="horizontal" gap={3}>
        <strong>Swap</strong>
        <div
          className="ms-auto"
          onClick={() => {
            props.setShowSettingsModal(true);
          }}
        >
         
          <Button className="small">
          &#9881;
          </Button>
        </div>
      </Stack>
    </WrappingContainer>
  );
};

export default SwapInterfaceHeader;
