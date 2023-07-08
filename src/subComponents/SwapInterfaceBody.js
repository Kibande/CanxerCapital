import React from "react";
import SwapBox from "./SwapBox";

import SwitchInputFieldsControlContainer from "./SwitchInputFieldsControlContainer";
const SwapInterfaceBody = (props) => {
  return (
    <>
      <SwapBox
        show_mobile_display={props.show_mobile_display}
        setShowTokenListModal={props.setShowFromTokenListModal}
        on_change={props.from_on_change}
        value={props.from_value}
        token_amount_in_usd={props.from_amount_usd}
        token_img_url={props.from_token_img_url}
        token_symbol={props.from_token_symbol}
        read_only={false}
      />
      <SwitchInputFieldsControlContainer
        show_mobile_display={props.show_mobile_display}
        handle_switch_input_field_func={props.handle_switch_input_field_func}
      />
      <SwapBox
         show_mobile_display={props.show_mobile_display}
         setShowTokenListModal={props.setShowToTokenListModal}
         value={props.to_value}
         token_amount_in_usd={props.to_amount_usd}
         token_img_url={props.to_token_img_url}
         token_symbol={props.to_token_symbol}
         read_only={true}
      />

    </>
  );
};

export default SwapInterfaceBody;
