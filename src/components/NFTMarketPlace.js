import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.div`
width:50%;
height:50%;
text-align:center;
position: absolute;
left: 25%;
top: 25%;

z-index: 3;

font-size: calc(0.5rem + 1.5vw);
font-weight: 300;
`;

const NFTMarketPlace = (props) =>{
    return(
        <>
        <Wrapper>
            NFTS Coming Soon
        </Wrapper>
        </>
    )
}

export default NFTMarketPlace;