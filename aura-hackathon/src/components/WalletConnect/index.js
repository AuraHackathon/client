import React from "react";
import useWallet from "../../hooks/useWallet";
import { CloseIcon } from "../Sidebar/SidebarElements";
import {
  WalletConnectBtn,
  WalletConnectClose,
  WalletConnectContainer,
  WalletConnectHeader,
  WalletConnectHeaderTitle,
  WalletConnectHeaderWrapTitle,
  WalletConnectLabel,
  WalletConnectLogo,
  WrappedWalletConnect,
  WrappedWalletConnectBackground,
  WrappedWalletConnectBody,
} from "./WalletConnectElement";

export default function WalletConnect({ openWallet, displayWalletConnect }) {
  const { WalletConnect, InjetedConnect, active } = useWallet();
  const handleConnectMetamaskWallet = async () => {
    await InjetedConnect();
    displayWalletConnect();
  };

  const handleConnectWallet = async () => {
    await WalletConnect();
    displayWalletConnect();
  };

  return (
    <WrappedWalletConnect openWallet={openWallet} active={active}>
      <WrappedWalletConnectBackground />
      <WalletConnectContainer>
        <WalletConnectHeader>
          <WalletConnectHeaderWrapTitle>
            <WalletConnectHeaderTitle>
              Connect to a wallet
            </WalletConnectHeaderTitle>
          </WalletConnectHeaderWrapTitle>
          <WalletConnectClose onClick={displayWalletConnect}>
            <CloseIcon />
          </WalletConnectClose>
        </WalletConnectHeader>
        <WrappedWalletConnectBody>
          <WalletConnectBtn onClick={handleConnectMetamaskWallet}>
            <WalletConnectLabel>Meta Mask</WalletConnectLabel>
            <WalletConnectLogo src="./images/coins/metamask.svg" />
          </WalletConnectBtn>
          <WalletConnectBtn onClick={handleConnectWallet}>
            <WalletConnectLabel>Wallet Connect</WalletConnectLabel>
            <WalletConnectLogo src="./images/coins/walletconnect.png" />
          </WalletConnectBtn>
        </WrappedWalletConnectBody>
      </WalletConnectContainer>
    </WrappedWalletConnect>
  );
}
