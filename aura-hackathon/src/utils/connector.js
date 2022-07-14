/* eslint-disable import/prefer-default-export */
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { NETWORK_CHAIN_IDS, RPC_URLS } from "./constants";

export const injected = new InjectedConnector({
  supportedChainIds: Object.values(NETWORK_CHAIN_IDS),
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 56: RPC_URLS[1], 97: RPC_URLS[4] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 12000
});

export const resetWalletConnector = (connector) => {
  if (connector && connector instanceof WalletConnectConnector) {
    connector.walletConnectProvider = undefined;
  }
};
