/* eslint-disable no-underscore-dangle */
export const __prod__ = process.env.NODE_ENV === "production";

export const NETWORK_CHAIN_IDS = {
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
  bsc: 97,
  bscmainnet: 56,
  localhost: 1337,
};
export const RPC_URLS = {
  1: "https://bsc-dataseed.binance.org/",
  4: "https://data-seed-prebsc-1-s1.binance.org:8545/",
};

export const GAS_PRICE = process.env.NEXT_PUBLIC_GAS_PRICE;
export const DEFAULT_REFETCH_ON_WINDOW_FOCUS_STALE_TIME = 60000; // 1 minute
