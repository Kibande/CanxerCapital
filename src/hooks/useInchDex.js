import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

const useInchDex = (chain) => {
  const { Moralis, user } = useMoralis();
  const [tokenList, setTokenlist] = useState();

  useEffect(() => {
    if (!Moralis?.["Plugins"]?.["oneInch"]) return null;
    Moralis.Plugins.oneInch
      .getSupportedTokens({ chain })
      .then((tokens) => setTokenlist(tokens.tokens));
  }, [Moralis, Moralis.Plugins, chain]);

  const getQuote = async (params) =>
    await Moralis.Plugins.oneInch.quote({
      chain: params.chain, // The blockchain  you want to use (eth/bsc/polygon)
      fromTokenAddress: params.fromToken.address, // The token you want to swap
      toTokenAddress: params.toToken.address, // The token you want to receive
      amount: Moralis.Units.Token(
        params.fromAmount,
        params.fromToken.decimals,
      ).toString(),
    });

  async function trySwap(params) {
    var allowance_error_message;
    var transaction_receipt;
    var swap_error_message;
    const { fromToken, fromAmount, chain } = params;
    const amount = Moralis.Units.Token(
      fromAmount,
      fromToken.decimals,
    ).toString();
    if (fromToken.address !== "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
      await Moralis.Plugins.oneInch
        .hasAllowance({
          chain, // The blockchain you want to use (eth/bsc/polygon)
          fromTokenAddress: fromToken.address, // The token you want to swap
          fromAddress: user.get("ethAddress"), // Your wallet address
          amount,
        })
        .then(async (allowance) => {
          //console.log(allowance);
          if (!allowance) {
            await Moralis.Plugins.oneInch.approve({
              chain, // The blockchain you want to use (eth/bsc/polygon)
              tokenAddress: fromToken.address, // The token you want to swap
              fromAddress: user.get("ethAddress"), // Your wallet address
            });
          }
        })
        .catch((e) => {allowance_error_message=e.message});
    }

    await doSwap(params)
      .then((receipt) => {
        if (receipt.statusCode !== 400) {
          console.log("Swap Complete");
        }
        transaction_receipt=receipt;
      })
      .catch((e) => {
        if(e.message?.["data"]){
          if(e.message?.["data"]?.["error"]){
            if(e.message?.["data"]?.["data"]?.description && e.message?.["data"]?.["data"]?.error){
              var error_title=e.message?.["data"]?.["data"]?.error;
              var error_body=e.message?.["data"]?.["data"]?.description;
              var well_formatted_error=String(error_body).toLowerCase().replace(String(fromToken.address).toLowerCase(),String(fromToken.symbol).toLowerCase());
              swap_error_message={error_title , well_formatted_error};
            }else if(e.message?.["data"]?.["data"]){
              var obj =JSON.parse(e.message?.["data"]?.["data"]);
              error_body = obj.message;
              error_title = "insufficient Funds"
              well_formatted_error=String(error_body).toLowerCase().replace(String(fromToken.address).toLowerCase(),String(fromToken.symbol).toLowerCase());
              swap_error_message={error_title , well_formatted_error};
              
            }
          }
        }});

      return {allowance_error_message, transaction_receipt, swap_error_message};
  }

  async function doSwap(params) {
    return await Moralis.Plugins.oneInch.swap({
      chain: params.chain, // The blockchain you want to use (eth/bsc/polygon)
      fromTokenAddress: params.fromToken.address, // The token you want to swap
      toTokenAddress: params.toToken.address, // The token you want to receive
      amount: Moralis.Units.Token(
        params.fromAmount,
        params.fromToken.decimals,
      ).toString(),
      fromAddress: user.get("ethAddress"), // Your wallet address
      slippage: 1,
    });
  }

  return { getQuote, trySwap, tokenList };
};

export default useInchDex;
