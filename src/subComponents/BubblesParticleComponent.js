import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

//particle config files
import config  from '../config/particlesjs-config.json';
const Box = styled.div`
position:absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`;


const BubblesParticleComponent = (props) =>{
        return (
            <Box show_mobile_display={props.show_mobile_display}>
                <Particles params={config} height={'100vh'} width={'100vw'}/>
            </Box>
        )
}

export default BubblesParticleComponent;

