import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SocialIcons from "../subComponents/SocialIcons";
import { breakPointObserver } from "../utilis/breakPointObserver";
import CustomAlert from "../subComponents/CustomAlert";
import DexStateDetails from "../subComponents/DexStateDetails";
import Swap from "../components/Swap";
import BubblesParticleComponent from "../subComponents/BubblesParticleComponent";
import { Nav, Navbar, Container } from 'react-bootstrap';
import About from "../components/About";
import NFTMarketPlace from "../components/NFTMarketPlace";
import { CanxerCapitalGradientLogo } from '../utilis/AllSvgs'
import Wallet from "../components/Wallet";
import Fiat from "../components/Fiat";
import Team from "../components/Team";
import Balances from "../components/Balances";

var show_mobile_display = false;


const MainContainer = styled.div`
  --background: ${(props) => props.theme.body};
  width: 100vw;
  height: 120vh;
  overflow: hidden;

  position: relative;
  transition: all 1s ease;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }

  background:linear-gradient(-45deg,#EE7752,#E73C7E,#23A605,#23D5AB);
  background-size:400%,400%;
  position:relative;
  animation:change 10s ease-in-out infinite;

  @keyframes change {
    0%{
        background-position:0 50%;
    }
    50%{
      background-position:100% 50%;
    }
    100%{
        background-position:0 50%;
    }
  }
`;


const NavbarWrapper = styled(Navbar)`
position:absolute;
z-index:4;
width:100%;
`;

const breakPoints = {
  mobile: "(max-width:600px)",
  tablet: "(min-width:600px) and (max-width:768px)",
  laptop: "(min-width:769px) and (max-width:1024px)",
  desktop: "(min-width:1024px)",
};

const Main = () => {
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [alertData, setAlertData] = useState(["danger", "Heading", "Body"]);
  const [breakPoint, setBreakPoint] = useState();
  const [sectionIndex, setSectionIndex] = useState(0);
  const [activeChain, setActiveChain] = useState("eth");
  useEffect(() => {
    breakPointObserver(breakPoints, setBreakPoint);
 
  }, [breakPoint]);

  if (breakPoint === "mobile" || breakPoint === "tablet") {
    show_mobile_display = true;
  } else {
    show_mobile_display = false;
  }


  const sections = [
    <About
      show_mobile_display={show_mobile_display}
      set_alert_data={setAlertData}
      set_alert_visbility={setShowErrorAlert}
    />,
    <Team  show_mobile_display={show_mobile_display}
    set_alert_data={setAlertData}
    set_alert_visbility={setShowErrorAlert}
  />,
    <Wallet  show_mobile_display={show_mobile_display}
    set_alert_data={setAlertData}
    set_alert_visbility={setShowErrorAlert}
  />,
    <Swap
      active_chain={activeChain}
      show_mobile_display={show_mobile_display}
      set_alert_data={setAlertData}
      set_alert_visbility={setShowErrorAlert}
    />,
    <Fiat  show_mobile_display={show_mobile_display}
    set_alert_data={setAlertData}
    set_alert_visbility={setShowErrorAlert}
  />,
  <Balances  
  active_chain={activeChain}
  show_mobile_display={show_mobile_display}
      set_alert_data={setAlertData}
      set_alert_visbility={setShowErrorAlert}
    />,
    <NFTMarketPlace
      show_mobile_display={show_mobile_display}
      set_alert_data={setAlertData}
      set_alert_visbility={setShowErrorAlert}
    />
  ]
  return (
    <MainContainer>
      <NavbarWrapper collapseOnSelect expand="lg" bg={show_mobile_display?'dark':'transparent'} variant="dark">
        <Container>
          <Nav.Link href="#about" onClick={() => setSectionIndex(0)}>
            <CanxerCapitalGradientLogo height={'30'} />

          </Nav.Link>
          <Navbar.Brand href="#home" >CanxerCapital</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about" onClick={() => setSectionIndex(0)}>About</Nav.Link>
              <Nav.Link href="#team" onClick={() => setSectionIndex(1)}>Team</Nav.Link>
              <Nav.Link href="#wallet"onClick={() => setSectionIndex(2)}>Wallet</Nav.Link>
              <Nav.Link href="#swap" onClick={() => setSectionIndex(3)}>Swap</Nav.Link>
              <Nav.Link href="#fiat"onClick={() => setSectionIndex(4)}>Fiat</Nav.Link>
              <Nav.Link href="#Balances"onClick={() => setSectionIndex(5)}>Balances</Nav.Link>
              <Nav.Link href="#nft_market_place" onClick={() => setSectionIndex(5)}>NFT Market Place</Nav.Link>
            </Nav>
            <Nav>
              <DexStateDetails show_mobile_display={show_mobile_display} set_show_alert={setShowErrorAlert} set_alert_data={setAlertData} active_chain={activeChain} set_active_chain={setActiveChain} />

            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavbarWrapper>
      <BubblesParticleComponent show_mobile_display={show_mobile_display} />
      <SocialIcons show_mobile_display={show_mobile_display} />
      <CustomAlert showErrorAlert={showErrorAlert} setShowErrorAlert={setShowErrorAlert} variant={alertData[0]} heading={alertData[1]} body={alertData[2]} />
      {sections[sectionIndex]}
    </MainContainer>
  );
};

export default Main;
