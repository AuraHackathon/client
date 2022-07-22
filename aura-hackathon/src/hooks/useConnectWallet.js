import { SigningCosmosClient } from "@cosmjs/cosmwasm-stargate";
import { GasPrice, SigningStargateClient } from "@cosmjs/stargate";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { GAS_PRICE } from "../utils/constants";
// import { useChainInfo } from "./useChainInfo";
import chainInfo from "../../public/chain_info.testnet.json";
export const useConnectWallet = (mutationOptions) => {
  const [status, setWalletState] = useState("");
  // const [chainInfo] = useChainInfo();

  console.log("useConnectWallet", chainInfo);
  const mutation = useMutation(async () => {
    if (window && !window?.keplr) {
      alert("Please install Keplr extension and refresh the page.");
      return;
    }
    console.log("connecting");
    setWalletState("connecting");
    localStorage.setItem("state", "connecting");
    localStorage.setItem("client", null);
    window.client = null;

    if (window.keplr.experimentalSuggestChain) {
      try {
        await window.keplr.experimentalSuggestChain(chainInfo);
        await window.keplr.enable(chainInfo.chainId);

        const offlineSigner = await window.getOfflineSignerAuto(
          chainInfo.chainId
        );

        const wasmChainClient = await SigningStargateClient.connectWithSigner(
          chainInfo.rpc,
          offlineSigner
        );
        console.log("wasmChainClient", wasmChainClient);
        const [{ address }] = await offlineSigner.getAccounts();
        const key = await window.keplr.getKey(chainInfo.chainId);

        /* successfully update the wallet state */
        localStorage.setItem("key", key);
        localStorage.setItem("address", address);
        localStorage.setItem("state", "connected");
        localStorage.setItem("client", wasmChainClient);
        window.client = wasmChainClient;
        setWalletState("connected");
        console.log("connected");
      } catch (e) {
        /* set the error state */
        localStorage.setItem("key", null);
        localStorage.setItem("address", "");
        localStorage.setItem("state", "error");
        localStorage.setItem("client", null);
        window.client = "";
        setWalletState("error");
        console.log("error", e);
        /* throw the error for the UI */
        throw e;
      }
    }

    await window.keplr.enable(chainInfo.chainId);
    const offlineSigner = window.getOfflineSigner(chainInfo.chainId);
    console.log("'offlineSigner", offlineSigner);
    // You can get the address/public keys by `getAccounts` method.
    // It can return the array of address/public key.
    // But, currently, Keplr extension manages only one address/public key pair.
    // XXX: This line is needed to set the sender address for SigningCosmosClient.
    const accounts = await offlineSigner.getAccounts();
    console.log("accounts", accounts);
    // Initialize the gaia api with the offline signer that is injected by Keplr extension.
    const cosmJS = new SigningCosmosClient(
      "https://rpc.serenity.aura.network",
      accounts[0].address,
      offlineSigner
    );
    console.log("cosmJS", cosmJS);
    await window.keplr.experimentalSuggestChain(chainInfo);
  }, mutationOptions);

  useEffect(
    function restoreWalletConnectionIfHadBeenConnectedBefore() {
      /* restore wallet connection if the state has been set with the */
      if (chainInfo?.rpc && status === "restored") {
        mutation.mutate(null);
        console.log("restored");
      }
    }, // eslint-disable-next-line
    [status, chainInfo?.rpc]
  );

  useEffect(
    function listenToWalletAddressChangeInKeplr() {
      function reconnectWallet() {
        if (status === "connected") {
          mutation.mutate(null);
          console.log("connected");
        }
      }

      window.addEventListener("keplr_keystorechange", reconnectWallet);
      return () => {
        window.removeEventListener("keplr_keystorechange", reconnectWallet);
      };
    },
    // eslint-disable-next-line
    [status]
  );

  return mutation;
};
