import React, { useEffect } from 'react'
import styled,{useTheme} from 'styled-components';
import { useState } from "react";
import { Card, Button, Form, Col, Row, Ratio, InputGroup } from 'react-bootstrap'
import WalletHeader from '../subComponents/WalletHeader';
import { useMoralis } from 'react-moralis';
import { useERC20Balance } from "../hooks/useERC20Balance";
import { useNativeBalance } from "react-moralis";
import { useMemo } from "react";
import { useRef } from 'react';

const WrappingContainer = styled.div`
  margin: 0.1rem 0;
  padding-bottom: 1rem;
  width: 100%;
`;


const FieldName = styled(Form.Control)`
  color: ${(props) => props.theme.cardTextColor};
  border: 0;
  
`;

const CuatomInputField = styled(Form.Control)`
border-radius:0;
border:none;
padding:auto;
font-size:auto;
`;

const CustomSelectField = styled(Form.Select)`
border-radius:0;
border:none;
padding:auto;
font-size:auto;
`;


const MaxButton = styled(Button)`
text-decoration:none;
`


const CardContainer = styled(Card)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
z-index: 3;
height: auto;
 width: ${props=>props.show_mobile_display?'70%':'30%'};
 padding:1rem;
 background-color:${props=>props.theme.cardBackgroundColor};

`;


const WalletField = (props) => {

    const value_ref = useRef();

    return (
        <WrappingContainer>
            <Row>
                <Col sm={3}>
                    <FieldName value={props.label} plaintext={true} disabled />
                </Col>
                <Col>
                    <InputGroup>
                        <CuatomInputField placeholder={props.place_holder} inputMode='text' value={props.value} onChange={props.on_change ? () => { props.on_change(value_ref.current.value) } : () => { }} ref={value_ref} readOnly={props.read_only} />
                        {props.have_max ? <MaxButton size="sm">Max</MaxButton> : null}
                    </InputGroup>
                </Col>
            </Row>
        </WrappingContainer>
    );
}

const Wallet = (props) => {
    const { Moralis } = useMoralis();
    const [receiver, setReceiver] = useState();
    const [asset, setAsset] = useState();
    const [tx, setTx] = useState();
    const [amount, setAmount] = useState();
    const [isPending, setIsPending] = useState(false);
    const { assets } = useERC20Balance();
  const theme = useTheme();

    const { data: nativeBalance, nativeToken } = useNativeBalance();
    useEffect(() => {
        asset && amount && receiver ? setTx({ amount, receiver, asset }) : setTx();
    }, [asset, amount, receiver]);


    async function transfer() {
        const { amount, receiver, asset } = tx;

        let options = {};

        switch (asset.token_address) {
            case "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee":
                options = {
                    native: "native",
                    amount: Moralis.Units.ETH(amount),
                    receiver,
                    awaitReceipt: false,
                };
                break;
            default:
                options = {
                    type: "erc20",
                    amount: Moralis.Units.Token(amount, asset.decimals),
                    receiver,
                    contractAddress: asset.token_address,
                    awaitReceipt: false,
                };
        }

        setIsPending(true);
        const txStatus = await Moralis.transfer(options);

        txStatus
            .on("transactionHash", (hash) => {
                props.set_alert_data(['success', '🔊 New Transaction', { hash }]);
                props.set_alert_visbility(true);
            })
            .on("receipt", (receipt) => {
                props.set_alert_data(['success', '📃 New Receipt', { receipt }]);
                props.set_alert_visbility(true);
                setIsPending(false);
            })
            .on("error", (error) => {
                props.set_alert_data(['danger', '📃 Error', `${error.message}`]);
                props.set_alert_visbility(true);
                setIsPending(false);
            });
    }



    const fullBalance = useMemo(() => {
        if (!assets || !nativeBalance) return null;
        return [
            ...assets,
            {
                balance: nativeBalance?.balance,
                decimals: nativeToken?.decimals,
                name: nativeToken?.name,
                symbol: nativeToken?.symbol,
                token_address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            },
        ];
    }, [assets, nativeBalance, nativeToken]);

    function handleAssetChange(value) {
        const token = fullBalance.find((token) => token.token_address === value);
        setAsset(token);
        console.log("Asset has been set to ", asset);
    }

    const asset_selector_ref = useRef();
    return (
        <>
            <CardContainer theme={theme} show_mobile_display={props.show_mobile_display}>
                <WalletHeader />
                <WalletField label={'Address '} show_mobile_display={props.show_mobile_display} have_max={false} read_only={false} on_change={setReceiver} value={receiver} place_holder={'Public Address'} />
                <WalletField label={'Amount '} show_mobile_display={props.show_mobile_display} have_max={true} read_only={false} on_change={setAmount} value={amount} place_holder={'Amount'} />
                <WrappingContainer>
                    <Row>
                        <Col sm={3}>
                            <FieldName value={'Asset '} plaintext={true} disabled />
                        </Col>
                        <Col>
                            <InputGroup>
                                {
                                    fullBalance != null ?

                                        <CustomSelectField aria-label="asset selector" ref={asset_selector_ref} onClick={() => handleAssetChange(asset_selector_ref.current?.value?asset_selector_ref.current?.value:'')}>
                                            {fullBalance &&
                                                fullBalance.map((item, index) => {
                                                    return (
                                                        <option value={item["token_address"]} key={index}>
                                                            {item.symbol}  (
                                                            {parseFloat(
                                                                Moralis?.Units?.FromWei(item?.balance?item?.balance:0, item?.decimals?item?.decimals:0),
                                                            )?.toFixed(6)}
                                                            )</option>
                                                    );
                                                }
                                                )
                                            }
                                        </CustomSelectField> : <Form.Select></Form.Select>
                                }
                            </InputGroup>
                        </Col>
                    </Row>
                </WrappingContainer>
                <Button
                    onClick={() => transfer()}
                    disabled={!tx}
                >Transfer</Button>
            </CardContainer>
        </>
    )
}

export default Wallet;

