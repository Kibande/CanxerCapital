import React from "react";
import SwapContainer from "../subComponents/SwapContainer";
const Swap =(props)=>{
 return (
     <>
      {
            props.active_chain ==="eth"?<SwapContainer
            show_mobile_display={props.show_mobile_display}
            set_alert_data={props.set_alert_data}
            set_alert_visbility={props.set_alert_visbility}
            chain="eth" customTokens={{}}
            />:props.active_chain ==="bsc"?<SwapContainer
            show_mobile_display={props.show_mobile_display}
            set_alert_data={props.set_alert_data}
            set_alert_visbility={props.set_alert_visbility}
            chain="bsc" customTokens={{}}
            />:props.active_chain ==="polygon"?<SwapContainer
            show_mobile_display={props.show_mobile_display}
            set_alert_data={props.set_alert_data}
            set_alert_visbility={props.set_alert_visbility}
            chain="polygon" customTokens={{}}
            />:null
            // <SwapContainer
            // show_mobile_display={props.show_mobile_display} // a since this still gets rejected up the hiracy
            // set_alert_data={props.set_alert_data}           // a better approach would be to display a custom
            // set_alert_visbility={props.set_alert_visbility} // modal here
            // chain={props.active_chain} customTokens={{}}
            // />
        }
     </>
 );
}

export default Swap;