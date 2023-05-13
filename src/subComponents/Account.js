import React, { useState } from "react";
import styled, { useTheme } from 'styled-components';
import { Button, Modal, Container, Row, Col, Stack, Spinner } from 'react-bootstrap';
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "../utilis/formatters";
import { connectors } from "../config/wallet_config";
import { errorCode_0 } from "../utilis/errorCodes";
const WalletAddress = styled.div`
  color: ${props => props.theme.body};
`;
const WalletOptionsContainer = styled(Container)`
position:relative;
`;

const Connector = styled(Col)`
align-Items: center;
display: flex;
flex-direction: column;
height: auto;
justify-content: center;
margin-left: auto;
margin-right: auto;
padding: 10px 5px;
cursor: pointer;
`;

const Icon = styled.img`
align-self: center;
fill: rgb(40, 13, 95);
flex-shrink: 0;
margin-bottom: 8px;
height: 80px;
width:80px;
`
const Text = styled.div`
align-self: center;
font-size:14px;
`;

const ConnectWallet = styled.div`
padding: 10px;
display: flex;
justify-content: center;
font-weight: 700;
font-size: 20px;
`;


const Account = (props) => {
    const { authenticate, isAuthenticated, isAuthenticating, isLoggingOut, account, logout } =
        useMoralis();
    const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);

    const theme = useTheme();

    if (!isAuthenticated || !account) {
        return (
            <>
                <Button variant="success" onClick={() => setIsAuthModalVisible(true)}>

                    {isAuthenticating ? <Spinner as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true" /> : null}
                    {isAuthenticating ? " Loading.." : "Connect"}</Button>

                <Modal
                    show={isAuthModalVisible}
                    onHide={() => setIsAuthModalVisible(false)}
                    backdrop="static"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <ConnectWallet >

                                Connect Wallet
                            </ConnectWallet>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <WalletOptionsContainer>

                            <Row>
                                {connectors.map(({ title, icon, connectorId }, key) => (
                                    <Connector
                                        xl={6}
                                        key={key}
                                        onClick={async () => {
                                            try {
                                                await authenticate({ provider: connectorId }).then(function (user) {
                                                    if (user === undefined) {
                                                        props.set_alert_data(['danger', 'Error', 'Failed to Connect Wallet'])
                                                        props.set_show_alert(true);
                                                    } else {
                                                        props.set_alert_data(['success', 'Connected', 'Wallet Connected.'])
                                                        props.set_show_alert(true);
                                                    }
                                                }).catch(function (error) {
                                                    props.set_alert_data(['danger', errorCode_0, 'Failed to Connect Wallet'])
                                                    props.set_show_alert(true);
                                                    console.log(error);
                                                });
                                                window.localStorage.setItem("connectorId", connectorId);
                                                setIsAuthModalVisible(false);
                                            } catch (e) {
                                                props.set_alert_data(['danger', 'Failed', 'The event Failed.']);
                                                props.set_show_alert(true);
                                                console.error("REporting", e);
                                            }
                                        }}
                                    >
                                        <Stack direction="vertical">
                                            <Icon src={icon} alt={title} />
                                            <Text>
                                                {title}
                                            </Text>
                                        </Stack>
                                    </Connector>
                                ))}

                            </Row>
                        </WalletOptionsContainer>
                    </Modal.Body>
                </Modal>
            </>
        );
    }



    return (
        <>
            <div>
                <WalletAddress
                >
                    {getEllipsisTxt(account, 6)}
                </WalletAddress>
            </div>


            <div className="vr" style={{ color: theme.body }} />
            <div className="">
                <Button variant="danger" onClick={async () => {
                    await logout();
                    window.localStorage.removeItem("connectorId");
                }}>
                    {isLoggingOut ? <Spinner as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true" /> : null}
                    {isLoggingOut ? " Loading.." : "Disconnect"}
                </Button>
            </div>
        </>
    );
}

export default Account;