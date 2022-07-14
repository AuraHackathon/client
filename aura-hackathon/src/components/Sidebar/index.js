import React from "react";
import useWallet from "../../hooks/useWallet";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBarBtnWrap,
  SideBarWalletConnectBtn,
  SidebarLinkR
} from "./SidebarElements";

const SideBar = ({ isOpen, toggle, displayWalletConnect, hideNav}) => {
  const { active, account, deactivate } = useWallet();

  const convertMiddleEllipseText = (accountName) => {
    return (
      accountName.substr(0, 4) +
      "..." +
      accountName.substr(accountName.length - 4, accountName.length)
    );
  };

  const DisconectWallet = () => {
    deactivate();
  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} hideNav = {hideNav}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/">HOME</SidebarLink>
          <SidebarLinkR to="/play" >PLAY</SidebarLinkR>
          <SidebarLinkR to="/marketplace" > MARKETPLACE </SidebarLinkR>
          <SidebarLinkR to="/changelog" > CHANGELOG</SidebarLinkR>
          <SidebarLink  onClick={() => window.open("https://opensea.io/collection/housegame", "_blank")}> OPENSEA</SidebarLink>

          <SideBarBtnWrap>
            <SideBarWalletConnectBtn onClick={displayWalletConnect}>
              {account ? convertMiddleEllipseText(account) : "Connect"}
            </SideBarWalletConnectBtn>
          </SideBarBtnWrap>
          {active && (
            <SideBarBtnWrap>
              <SideBarWalletConnectBtn onClick={DisconectWallet}>
                Disconect
              </SideBarWalletConnectBtn>
            </SideBarBtnWrap>
          )}
        </SidebarMenu>
        
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
