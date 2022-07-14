import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Route, Switch } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import useWallet from "../../hooks/useWallet";
import { isMobile, isAndroid } from 'mobile-device-detect';

import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavImage,
  NavBtn,
  NavBtnWalletConnect,
  WrappedConnectWallet,
  NavPresale,
  WalletAddress
} from "./NavbarElement";

const Navbar = ({ toggle, displayWalletConnect, hideNav, hideConnect }) => {
  const { active, account, deactivate } = useWallet();
  
  // const history = useHistory();

  //   const  routeChange = () =>{
  //     let path = `newPath`;
  //     this.props.history.push(path);
  //   }

  const convertMiddleEllipseText = (accountName) => {
    return (
      accountName.substr(0, 8) +
      "..." +
      accountName.substr(accountName.length - 8, accountName.length)
    );
  };

  const DisconectWallet = () => {
    deactivate();
  };

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    // return () => {
    //     cleanup
    // }
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer hideNav = {hideNav}>
            <NavLogo to="/" onClick={toggleHome}>
              <NavImage src="./images/navbar_logo.svg" />
            </NavLogo>
            <MobileIcon onClick={toggle} hideNav = {hideNav}>
              <FaBars />
            </MobileIcon>
            
              <NavMenu scrollNav={scrollNav}>
                <NavItem>
                  <NavPresale
                    to="/"
                    onClick={toggleHome}
                    smooth={true}
                    duration={0}
                    spy={true}
                    exact="true"
                    offset={-100}
                  >
                    HOME
                  </NavPresale>
                </NavItem>
                <NavItem>
                  <NavPresale to="/play" onClick={toggleHome}>
                    PLAY
                  </NavPresale>
                </NavItem>
                <NavItem>
                  <NavPresale to="/marketplace" > MARKETPLACE </NavPresale>
                </NavItem>
                <NavItem>
                  <NavPresale to="/changelog" > CHANGELOG </NavPresale>
                </NavItem>
                <NavItem>
                  <NavPresale onClick={() => window.open("https://opensea.io/collection/housegame", "_blank")}> OPENSEA </NavPresale>
                </NavItem>
                {/* <NavItem>
                  <NavLinks
                    to="pandaEsport"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-100}
                  >
                    CHANGELOG
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to="nftItems"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-100}
                  >
                    OPENSEA
                  </NavLinks>
                </NavItem> */}

              </NavMenu>
              
              <WrappedConnectWallet hideConnect={isMobile}>

                {account ? 
                            <WalletAddress>{convertMiddleEllipseText(account)}</WalletAddress> : 
                            <NavBtn>
                              <NavBtnWalletConnect onClick={displayWalletConnect}>Connect</NavBtnWalletConnect>
                            </NavBtn>
                }


                {active && (
                  <NavBtn>
                    <NavBtnWalletConnect onClick={DisconectWallet}>
                      Disconect
                    </NavBtnWalletConnect>
                  </NavBtn>
                )}
              </WrappedConnectWallet>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
