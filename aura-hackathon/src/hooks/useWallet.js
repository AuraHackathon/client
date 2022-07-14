import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import {
  injected,
  resetWalletConnector,
  walletconnect,
} from "../utils/connector";
import { UserRejectedRequestError as injectedUserRejectRequestError } from "@web3-react/injected-connector";
import { useCallback, useEffect } from "react";

const localStorage = window.localStorage;

const handleError = (error) => {
  if (error instanceof injectedUserRejectRequestError) {
    // Handle Error
    return;
  }

  if (error instanceof UnsupportedChainIdError) {
    // Handle Error
  }
};

/**
 * * Split logic connect and error handling
 * @returns connect function
 */
const useWallet = () => {
  const { activate, active, library, account, connector, deactivate } =
    useWeb3React();

  const InjetedConnect = async () => {
    await activate(injected, (error) => handleError(error));
    localStorage.setItem("isMetamask", "Metamask");
    if (localStorage.getItem("isWalletConnect")) {
      localStorage.removeItem("isWalletConnect");
    }
  };

  const WalletConnect = useCallback(() => {
    activate(walletconnect, undefined, true).catch((err) => {
      // console.error(`Failed to activate account using walletConnect`, err);
      resetWalletConnector(walletconnect);
      // if (err instanceof NoEthereumProviderError) {}
    });
    localStorage.setItem("isWalletConnect", "WalletConnect");
    if (localStorage.getItem("isMetamask")) {
      localStorage.removeItem("isMetamask");
    }
  }, [activate]);

  // Refresh connection if already connected
  useEffect(() => {
    const { ethereum, localStorage } = window;
    if (ethereum && localStorage) {
      (async () => {
        try {
          localStorage.getItem("isMetamask") &&
            localStorage.removeItem("isMetamask");
          localStorage.getItem("isWalletConnect") &&
            localStorage.removeItem("isWalletConnect");
          const web3 = new Web3(
            ethereum.currentProvider || window.web3.currentProvider
          );
          const accounts = await web3.eth.getAccounts();
          if (accounts.length > 0) {
            if (localStorage.getItem("isMetamask") == "Metamask") {
              await activate(injected, (error) => handleError(error));
            } else if (
              localStorage.getItem("isWalletConnect") == "WalletConnect"
            ) {
              await activate(walletconnect, (error) => handleError(error));
            }
          }
        } catch (err) {
          // Handle Error
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    WalletConnect,
    InjetedConnect,
    active,
    library,
    account,
    connector,
    deactivate,
  };
};

export default useWallet;
