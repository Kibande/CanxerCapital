import React, { useState } from 'react'
import styled ,{useTheme}from 'styled-components';
import { Table, Card, Stack } from 'react-bootstrap';
import { useERC20Balance } from "../hooks/useERC20Balance";
import { useNativeBalance, useMoralis, useTokenPrice } from "react-moralis";
import { useMemo } from "react";

const OutterWrapper = styled(Card)`
text-align:center;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width:80%;
height:80%;


overflow:hidden;
z-index: 3;
background-color:${props=>props.theme.cardBackgroundColor};
border:none;
`;
const Wrapper = styled(Card)`
text-align:center;
position: absolute;

left: 0;
top: 0;
width:105%;
height:105%;

overflow:scroll;
z-index: 3;
background-color:${props=>props.theme.cardBackgroundColor};
border:none;
`;

const TableStyle = styled(Table)`
color: ${(props) => props.theme.cardTextColor};
font-weight:200;
border-color:rgba(0,0,0,0.4);
thead{
  position:sticky;
  top:0;
  background-color:${(props) => props.theme.primaryColor};
}
`;

function TokenPrice(props) {
  //   const { data: formattedData } = useTokenPrice(props);
  // i need to either change the limit of this or get a way of batch requesting the prices
  return (
    <span>
      {/* {formattedData? formattedData.formattedUsd:null} */}
    </span>
  );
}

const Balances = (props) => {
  const { Moralis } = useMoralis();
  const { assets } = useERC20Balance();
  const { data: nativeBalance, nativeToken } = useNativeBalance();
  const fullBalance = useMemo(() => {
    if (!assets || !nativeBalance) return null;
    return [
      ...assets,
      {
        balance: nativeBalance.balance,
        decimals: nativeToken.decimals,
        name: nativeToken.name,
        symbol: nativeToken.symbol,
        token_address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      },
    ];
  }, [assets, nativeBalance, nativeToken]);

  const theme = useTheme();

  return (
    <OutterWrapper show_mobile_display={props.show_mobile_display}>
      <Wrapper theme={theme} show_mobile_display={props.show_mobile_display}>
        <TableStyle theme={theme}  bordered responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Token Name</th>
              <th>Token Balance</th>
              <th>Token USDT</th>
              <th>Token Address</th>
            </tr>
          </thead>
          <tbody>
            {fullBalance &&
              fullBalance.map((item, index) => {
                return (<tr>
                  <td>{index}</td>
                  <td><Stack direction='vertical'>
                    <strong>{item.symbol}</strong>
                    <small>{item.name}</small>
                  </Stack></td>
                  <td>{parseFloat(
                    Moralis?.Units?.FromWei(item?.balance ? item?.balance : 0, item?.decimals ? item?.decimals : 0),
                  )?.toFixed(6)}</td>
                  <td><TokenPrice
                    address={item["token_address"]}
                    chain={props.active_chain}
                    image="https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/"
                    size="40px"
                  /></td>
                  <td>{item["token_address"]}</td>
                </tr>
                );
              }
              )
            }

          </tbody>
        </TableStyle>
      </Wrapper>
    </OutterWrapper>
  )
}

export default Balances;