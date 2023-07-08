import React from 'react'
import styled,{useTheme} from 'styled-components'
import { CanxerCapitalGradientLogo,CanxerCapitalSingleColorLogo } from '../utilis/AllSvgs'

const Logo = styled.div`

position: fixed;
top: 4rem;
left:2rem;
z-index:1;
`


const LogoComponent = (props) => {
    const theme = useTheme();
    return (
        <Logo>
           {true?<CanxerCapitalGradientLogo width={'60'} height={'60'}/>:<CanxerCapitalSingleColorLogo width={'60'} height={'60'}  fill={theme.text}/>} 
        </Logo>
    )
}

export default LogoComponent