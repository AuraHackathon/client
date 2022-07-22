import React from "react";
import { useConnectWallet } from "../../hooks/useConnectWallet";
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
import chainInfo from "../../../public/chain_info.testnet.json";
export default function WalletConnect({ openWallet, displayWalletConnect }) {
  const { WalletConnect, InjetedConnect, active } = useWallet();
  const { mutate: connectWallet } = useConnectWallet();
  const handleConnectMetamaskWallet = async () => {
    await InjetedConnect();
    displayWalletConnect();
  };

  const handleConnectWallet = async () => {
    await window.keplr.experimentalSuggestChain(chainInfo);
    await window.keplr.enable(chainInfo.chainId);
    await WalletConnect();
    displayWalletConnect();
  };

  const handleConnectWalletKeplr = async () => {
    console.log("await connect");
    await connectWallet(null);
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
          <WalletConnectBtn onClick={handleConnectWalletKeplr}>
            <WalletConnectLabel>Wallet Connect</WalletConnectLabel>
            <WalletConnectLogo src="./images/coins/keplr.png" />
          </WalletConnectBtn>
        </WrappedWalletConnectBody>
      </WalletConnectContainer>
    </WrappedWalletConnect>
  );
}
