import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import routes from "../routes/indes";
import WalletConnect from "../components/WalletConnect";
import { useLocation } from "react-router-dom";
import { isMobile, isAndroid } from 'mobile-device-detect';

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const location = useLocation();
  const [hideConnect, setHideConnect] = useState(false);

  useEffect(() => {
    let visibleNav = location.pathname.includes("presale")|| location.pathname.includes("dev")
    setHideConnect(visibleNav ? true : false);
    setHideNav(visibleNav ? true : false);

  }, [location.pathname]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const displayWalletConnect = () => {
    setOpenWallet(!openWallet);
  };

  return (
    <>
      <WalletConnect
        openWallet={openWallet}
        displayWalletConnect={displayWalletConnect}
      />
      <SideBar
        isOpen={isOpen}
        toggle={toggle}
        displayWalletConnect={displayWalletConnect}
        hideNav={hideNav}
      />
      <Navbar
        toggle={toggle}
        displayWalletConnect={displayWalletConnect}
        hideNav={hideNav}
        hideConnect={hideConnect}
      />

      {routes}
    </>
  );
};

export default LandingPage;
