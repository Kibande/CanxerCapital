import React, { useState, useEffect, useMemo } from "react";
import { useMoralis, useTokenPrice,useOneInchTokens } from "react-moralis";
import useInchDex from "../hooks/useInchDex";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Form, Container} from "react-bootstrap";
import SwapInterfaceHeader from "./SwapInterfaceHeader";
import SwapInterfaceFooter from "./SwapInterfaceFooter";
import SwapInterfaceBody from "./SwapInterfaceBody";
import SwapInterfaceButton from "./SwapInterfaceButton";
import { tokenValue } from "../utilis/formatters";
import { getWrappedNative } from "../utilis/networks";
import TokensModal from "./TokensModal";
import SettingsModal from "./SettingsModal";

const SubBox = styled.div`
  width: ${(props) => (props.show_mobile_display ? "100%" : "50%")};
  position: relative;
  display: flex;
  background-color: transparent;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: rgba(${(props) => props.theme.bodyRgba}, 0.6);
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const DexInterface = styled(Container)`
  height: 100%;
`;

// function simulateNetworkRequest() {
//   return new Promise((resolve) => setTimeout(resolve, 2000));
// }

const nativeAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

const chainIds = {
  "0x1": "eth",
  "0x38": "bsc",
  "0x89": "polygon",
};

const getChainIdByName = (chainName) => {
  for (let chainId in chainIds) {
    if (chainIds[chainId] === chainName) return chainId;
  }
};

const IsNative = (address) =>
  address === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

function SwapInterface({ chain, customTokens,show_mobile_display,set_alert_data,set_alert_visbility}) {
  const { trySwap, getQuote } = useInchDex(chain);

  const { Moralis, isInitialized, chainId ,isAuthenticated,isAuthUndefined} = useMoralis();
  const [showFromTokenListModal, setFromShowTokenListModal] = useState(false);
  const [showToTokenListModal, setToShowTokenListModal] = useState(false);
  const [fromToken, setFromToken] = useState();
  const [toToken, setToToken] = useState();
  const [fromAmount, setFromAmount] = useState();
  const [quote, setQuote] = useState();
  const [currentTrade, setCurrentTrade] = useState();
  const { fetchTokenPrice } = useTokenPrice();// get the token value in terms of the native token and USD
  const [tokenPricesUSD, setTokenPricesUSD] = useState({});// the to and from token USD values
 
 
  const [isSwapLoading, setIsSwapLoading] = useState(false);
  const [refreshTokenList, setRefreshTokenList] = useState(false);
  const [showSettingModal, setShowSettingsModal] = useState(false);
  const [slippage,setSlippage]=useState(50);





  const { getSupportedTokens, data, isFetching, isLoading, error } =
      useOneInchTokens({ chain: chain });

      useEffect(()=>{
        if(refreshTokenList){
          console.log("refreshing token list");
          getSupportedTokens({chain:chain}).catch((e)=>{
            console.log("getSupported Tokens errored with ",e);
          });
          setRefreshTokenList(false);
        }
      },[refreshTokenList,chain,setRefreshTokenList,getSupportedTokens]);
      
      useEffect(()=>{
        // should switch to this way of loading tokens , its cleaner 
        if(isFetching && isLoading){
          console.log("loading tokens ....");
        }
        if(error){
          console.log("Error while loading tokens ",error);
        }

        if(data){
          console.log("Tokens loaded ",data);
        }
      },[isFetching,isLoading,data,error]);

  const tokens = useMemo(() => {
    var combinded_token_list ={ ...customTokens, ...data?.tokens};
    return combinded_token_list;
  }, [customTokens, data]);
  
  const fromTokenPriceUsd = useMemo(
    () =>
      tokenPricesUSD?.[fromToken?.["address"]]
        ? tokenPricesUSD[fromToken?.["address"]]
        : null,
    [tokenPricesUSD, fromToken],
  );

  const toTokenPriceUsd = useMemo(
    () =>
      tokenPricesUSD?.[toToken?.["address"]]
        ? tokenPricesUSD[toToken?.["address"]]
        : null,
    [tokenPricesUSD, toToken],
  );

  const fromTokenAmountUsd = useMemo(() => {
    if (!fromTokenPriceUsd || !fromAmount) return null;
    return `~$ ${(fromAmount * fromTokenPriceUsd).toFixed(4)}`;
  }, [fromTokenPriceUsd, fromAmount]);

  const toTokenAmountUsd = useMemo(() => {
    if (!toTokenPriceUsd || !quote) return null;
    return `~$ ${(
      Moralis?.Units?.FromWei(quote?.toTokenAmount, quote?.toToken?.decimals) *
      toTokenPriceUsd
    ).toFixed(4)}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toTokenPriceUsd, quote]);

  // tokenPrices
  useEffect(() => {
    if (!isInitialized || !fromToken || !chain) return null;
    const validatedChain = chain ? getChainIdByName(chain) : chainId;
    const tokenAddress = IsNative(fromToken["address"])
      ? getWrappedNative(validatedChain)
      : fromToken["address"];
    fetchTokenPrice({
      params: { chain: validatedChain, address: tokenAddress },
      onSuccess: (price) =>
        setTokenPricesUSD({
          ...tokenPricesUSD,
          [fromToken["address"]]: price["usdPrice"],
        }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chain, isInitialized, fromToken]);

  useEffect(() => {
    if (!isInitialized || !toToken || !chain) return null;
    const validatedChain = chain ? getChainIdByName(chain) : chainId;
    const tokenAddress = IsNative(toToken["address"])
      ? getWrappedNative(validatedChain)
      : toToken["address"];
    fetchTokenPrice({
      params: { chain: validatedChain, address: tokenAddress },
      onSuccess: (price) =>
        setTokenPricesUSD({
          ...tokenPricesUSD,
          [toToken["address"]]: price["usdPrice"],
        }),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chain, isInitialized, toToken]);

  useEffect(() => {
    if (!tokens || fromToken) return null;
    setFromToken(tokens[nativeAddress]);
  }, [tokens, fromToken]);

  const ButtonState = useMemo(() => {
    if (chainIds?.[chainId] !== chain)
      return { isActive: false, text: `Switch to Supported Chain` };

    if (Number(fromAmount) <= 0)
      return { isActive: false, text: "Invalid amount" };
    if (!fromAmount) return { isActive: false, text: "Enter an amount" };
    if(!isAuthenticated || isAuthUndefined|| !chainId) return  { isActive: false, text: "Connect Wallet" };
    if (fromAmount && currentTrade) return { isActive: true, text: "Swap" };
    return { isActive: false, text: "Select tokens" };
  }, [fromAmount, currentTrade, chainId, chain]);

  useEffect(() => {
    if (fromToken && toToken && fromAmount)
      setCurrentTrade({ fromToken, toToken, fromAmount, chain });
  }, [toToken, fromToken, fromAmount, chain]);

  useEffect(() => {
    if (currentTrade) getQuote(currentTrade).then((quote) => setQuote(quote));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrade]);

  const PriceSwap = () => {
    const Quote = quote;
    if (!Quote || !tokenPricesUSD?.[toToken?.["address"]]) return null;
    if (Quote?.statusCode === 400) return <>{Quote.message}</>;
    const { fromTokenAmount, toTokenAmount } = Quote;
    const { symbol: fromSymbol } = fromToken;
    const { symbol: toSymbol } = toToken;
    const pricePerToken = parseFloat(
      tokenValue(fromTokenAmount, fromToken["decimals"]) /
        tokenValue(toTokenAmount, toToken["decimals"])
    ).toFixed(6);
    return (
      <SwapInterfaceFooter
        show_mobile_display={show_mobile_display}
        estimated_gas={quote?.estimatedGas}
        from_symbol={fromSymbol}
        to_symbol={toSymbol}
        price_per_token={pricePerToken}
      />
    );
  };

  function handleSwitchInputFieldsController(){
    var old_from_token = fromToken;
    var old_to_token = toToken;
    var old_to_amount = quote
    ? parseFloat(
        Moralis?.Units?.FromWei(
          quote?.toTokenAmount,
          quote?.toToken?.decimals
        )
      ).toFixed(6)
    : 0.0;


    setFromToken(old_to_token);
    setFromAmount(old_to_amount);
    setToToken(old_from_token);
  }
  function handleSwapButtonClick() {
    setIsSwapLoading(true);
    trySwap(currentTrade).then((result)=>{
      console.log("button press result wwas; ",result);
      if(result?.allowance_error_message){
      if(result?.allowance_error_message.includes("Missing")){
        set_alert_data([
          "warning",
          "Error",
          "Refresh Wallet Credentials by reconnecting wallet"]
        );
      }else{
        set_alert_data([
          "danger",
          "Error",
          result?.allowance_error_message]
        );
      }

 
        set_alert_visbility(true);
      }else if(result?.swap_error_message){
        set_alert_data([
          "danger",
          result?.swap_error_message?.error_title,
          result?.swap_error_message?.well_formatted_error
        ]);
        set_alert_visbility(true);
      }else if(result?.transaction_receipt){
        if(result?.transaction_receipt?.message.includes("Missing")){
          set_alert_data([
            "warning",
            "Error",
            "Refresh Wallet Credentials by reconnecting wallet"
          ]);
        }else{
          set_alert_data([
            "success",
            "Compelete",
            result?.transaction_receipt?.message
          ]);
        }
        
        set_alert_visbility(true);
      }else{
        set_alert_data([
          "success",
          "Complete",
          "Transaction was successful"
        ]);
      }
      setIsSwapLoading(false);
      
    })
  }
  return (
    <>
      {/* Settings Modal */}

      <SettingsModal showSettingModal={showSettingModal} setShowSettingsModal={setShowSettingsModal} slippage={slippage} setSlippage={setSlippage} />
      <TokensModal
        show_mobile_display={show_mobile_display}
        show_token_list_modal={showFromTokenListModal}
        set_show_token_list_modal={setFromShowTokenListModal}
        tokens={tokens}
        set_token={setFromToken}
        refresh_token_list={setRefreshTokenList}
        refreshing_token_list={refreshTokenList}
      />
      <TokensModal
        show_mobile_display={show_mobile_display}
        show_token_list_modal={showToTokenListModal}
        set_show_token_list_modal={setToShowTokenListModal}
        tokens={tokens}
        set_token={setToToken}
        refresh_token_list={setRefreshTokenList}
        refreshing_token_list={refreshTokenList}

      />

      {show_mobile_display ? null : (
        <SubBox show_mobile_display={show_mobile_display}>
          <Text>
            <h1>Zero Governance.</h1>
            <h3>Trade with no limits.</h3>
            <h6>let's keep wining.</h6>
          </Text>
        </SubBox>
      )}

      <SubBox show_mobile_display={show_mobile_display}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <DexInterface>
            <Form>
              <SwapInterfaceHeader
                show_mobile_display={show_mobile_display}
                setShowSettingsModal={setShowSettingsModal}
              />
              <SwapInterfaceBody
                show_mobile_display={show_mobile_display}
                setShowFromTokenListModal={setFromShowTokenListModal}
                setShowToTokenListModal={setToShowTokenListModal}
                from_on_change={setFromAmount}
                handle_switch_input_field_func={handleSwitchInputFieldsController}
                from_value={fromAmount}
                from_amount_usd={fromTokenAmountUsd}
                from_token_img_url={
                  fromToken?.logoURI ||
                  "https://etherscan.io/images/main/empty-token.png"
                }
                from_token_symbol={
                  fromToken?.symbol ? fromToken.symbol : "Select"
                }
                to_value={
                  quote
                    ? parseFloat(
                        Moralis?.Units?.FromWei(
                          quote?.toTokenAmount,
                          quote?.toToken?.decimals
                        )
                      ).toFixed(6)
                    : 0.0
                }
                to_amount_usd={toTokenAmountUsd}
                to_token_img_url={
                  toToken?.logoURI ||
                  "https://etherscan.io/images/main/empty-token.png"
                }
                to_token_symbol={toToken?.symbol ? toToken.symbol : "Select"}
              />
              <PriceSwap />
              <SwapInterfaceButton
                isSwapLoading={isSwapLoading}
                handleSwapButtonClick={handleSwapButtonClick}
                text={ButtonState.text}
                is_disabled={!ButtonState.isActive}
              />
            </Form>
          </DexInterface>
        </motion.div>
      </SubBox>
    </>
  );
}

export default SwapInterface;
