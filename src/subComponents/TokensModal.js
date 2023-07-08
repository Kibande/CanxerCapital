import React, { useState, useRef } from 'react';
import { Modal, Form, FormControl, Container, Button, OverlayTrigger, Tooltip, Stack, Spinner } from 'react-bootstrap';

import TokenListItem from './TokenListItem';
import styled from 'styled-components';
const SelectableTokensWindow = styled(Container)`
height: 60vh;
overflow: scroll;
`;
const LoadingStateComponent = styled.div`
align-Items: center;
display:flex;
justify-content:center;
`;

const LoadingStateContents = styled.div`align-self: center;`;
const ModalTitle = styled(Modal.Title)`
width:100%;
display:flex;
justify-content:space-around;
`;
const TokensModal = (props) => {
  const [searchText, setSearchText] = useState("");
  const search_ref = useRef();
  return (
    <>
      <Modal
        show={props.show_token_list_modal}
        onHide={() => props.set_show_token_list_modal(false)}
        centered
      >
        <Modal.Header closeButton>
          <ModalTitle>
            Select Token
            <OverlayTrigger
              key='bottom'
              placement='bottom'
              overlay={
                <Tooltip >
                  Refresh Token list
                </Tooltip>
              }
            >
              <Button className="small" onClick={() => { props.refresh_token_list(true) }}>
                &#8635;
              </Button>
            </OverlayTrigger>

          </ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={() => { setSearchText(search_ref.current.value); }}
              ref={search_ref}
            />
          </Form>
          <hr />
          <SelectableTokensWindow>

            {
              props.refreshing_token_list ?


                <LoadingStateComponent>

                  <Stack direction='vertical'>

                    <LoadingStateContents>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Loading...
                    </LoadingStateContents>
                  </Stack>
                </LoadingStateComponent>
                :



                !props.tokens || props.tokens.length === 0 
                  ? <LoadingStateComponent>

                  <Stack direction='vertical'>

                    <LoadingStateContents>
                      Token list is empty.
                    </LoadingStateContents>
                  </Stack>
                </LoadingStateComponent>
                  : Object.keys(props.tokens).map((token, index) => (
                    searchText === "" || props.tokens[token].symbol.toLowerCase().includes(searchText.toLowerCase()) || props.tokens[token].address.toLowerCase().includes(searchText.toLowerCase()) || props.tokens[token].name.toLowerCase().includes(searchText.toLowerCase()) ?
                      <TokenListItem
                        key={index}
                        show_mobile_display={props.show_mobile_display}
                        token_image_source={props.tokens[token]?.logoURI}
                        token_symbol={props.tokens[token]?.symbol}
                        token_name={props.tokens[token]?.name}
                        on_token_select={
                          () => {
                            props.set_token(props.tokens[token]);
                            props.set_show_token_list_modal(false)
                          }
                        }
                      /> : null
                  ))}
          </SelectableTokensWindow>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default TokensModal;


