import React, { useEffect, useState } from "react";
import { useChain,useMoralis } from 'react-moralis';
import { BSCLogo, ETHLogo, PolygonLogo, AvaxLogo } from "../utilis/AllSvgs";
import {Stack,NavDropdown, Spinner,Button} from 'react-bootstrap';
import UnSupportedChainAlert from "./UnSupportedChainAlert";
export const selectableChains = [
    {
      key: "0x1",
      value: "Ethereum",
      native: "ETH",
      identifer: 'eth',
      icon: <ETHLogo height={'25px'} />,
    },
    {
      key: "0x539",
      value: "Local Chain",
      icon: <ETHLogo height={'25px'} />,
    },
    {
      key: "0x3",
      value: "Ropsten Testnet",
      native: "ETH",
      icon: <ETHLogo height={'25px'} />,
    },
    {
      key: "0x4",
      value: "Rinkeby Testnet",
      native: "ETH",
      icon: <ETHLogo height={'25px'} />,
    },
    {
      key: "0x2a",
      value: "Kovan Testnet",
      native: "ETH",
      icon: <ETHLogo height={'25px'} />,
    },
    {
      key: "0x5",
      value: "Goerli Testnet",
      native: "ETH",
      icon: <ETHLogo height={'25px'} />,
    },
    {
      key: "0x38",
      value: "Binance",
      native: "BNB",
      identifer: 'bsc',
      icon: <BSCLogo height={'25px'} />,
    },
    {
      key: "0x61",
      value: "Smart Chain Testnet",
      native: "BNB",
  
      icon: <BSCLogo height={'25px'} />,
    },
    {
      key: "0x89",
      value: "Polygon",
      native: "MATIC",
      identifer: 'polygon',
      icon: <PolygonLogo height={'25px'} />,
    },
    {
      key: "0x13881",
      native: "MATIC",
      value: "Mumbai",
      icon: <PolygonLogo height={'25px'} />,
    },
    {
      key: "0xa86a",
      value: "Avalanche",
      native: "AVAX",
      icon: <AvaxLogo height={'25px'} />,
    },
    {
      key: "0xa869",
      native: "AVAX",
      value: "Avalanche Testnet",
      icon: <AvaxLogo height={'25px'} />,
    },
  ];
  

const Chain = (props)=>{
    const [isSwitchingNetworks,SetIsSwitchingNetworks]=useState(false);
    
    const { switchNetwork, chainId} = useChain();
    useEffect(() => {
      if (!chainId) return null;
      const newSelected = selectableChains.find((item) => item.key === chainId);
      SetIsSwitchingNetworks(false);
      props.set_active_chain(newSelected?.identifer);
    }, [chainId, props,SetIsSwitchingNetworks]);
  
    const handleMenuClick = (e) => {



      switchNetwork(e.key).then(()=>{SetIsSwitchingNetworks(true)}).catch ((error) =>{

        if(error?.message.toLowerCase().includes("missing")){
          props.set_alert_data(['info','Error','Please connect your wallet to be able to switch networks']);
        }else{
          props.set_alert_data(['danger','Error',error?.message]);
        }
        props.set_show_alert(true);
        SetIsSwitchingNetworks(false);
      });
    };

    return(
        <>
 
        { chainId && selectableChains.find((item) => item.key === chainId)?.icon === undefined && selectableChains.find((item) => item.key === chainId)?.value === undefined   ? <UnSupportedChainAlert/>:null}
        <Stack direction="horizontal"  >
        <div>
          {isSwitchingNetworks? 
  <Button variant="primary" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Switching...
  </Button> :selectableChains.find((item) => item.key === chainId)?.icon}
        </div>
        <div>

          <NavDropdown
            title={isSwitchingNetworks?null:selectableChains.find((item) => item.key === chainId)?.value !== undefined?  selectableChains.find((item) => item.key === chainId)?.value:"Select Network"}
          >
            {selectableChains.map((item) => (
              <NavDropdown.Item href="#eth" onClick={() => { handleMenuClick(item) }}>

                <Stack direction="horizontal"  >
                  {item.icon}
                  <div style={{ marginLeft: "5px" }}>
                    {item.value}
                  </div>
                </Stack>

              </NavDropdown.Item>
            ))}


          </NavDropdown>
        </div>
      </Stack>
      </>
    );
}


export default Chain;