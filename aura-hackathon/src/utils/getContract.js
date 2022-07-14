/* eslint-disable import/prefer-default-export */
import Web3 from "web3";
import SaleContract from "../../../contract/artifacts/contracts/Sale.sol/Sale.json";
import TokenContract from "../../../contract/artifacts/contracts/TokenPAM.sol/TokenPAM.json";
import TreasuryContract from "../../../contract/artifacts/contracts/TreasuryVester.sol/TreasuryVester.json";
import {
  SC_SALE_CONTRACT_ADDRESS,
  SC_TOKEN_PAM_CONTRACT_ADDRESS,
  SC_TREASURYVESTER_CONTRACT_ADDRESS,
} from "../environment";

export const getContract = async (connector) => {
  if (!connector) throw Error("No connector found");
  const walletProvider = await connector.getProvider();
  const web3 = new Web3(walletProvider);

  const saleContractAbi = SaleContract.abi;
  const tokenContractAbi = TokenContract.abi;
  const treasuryContractAbi = TreasuryContract.abi;
  // TODO: Get network address whenever JSON file change
  const saleContractAddress = SC_SALE_CONTRACT_ADDRESS;
  const tokenContractAddress = SC_TOKEN_PAM_CONTRACT_ADDRESS;
  const treasuryContractAddress = SC_TREASURYVESTER_CONTRACT_ADDRESS;
  return {
    saleContract: new web3.eth.Contract(saleContractAbi, saleContractAddress),
    tokenContract: new web3.eth.Contract(
      tokenContractAbi,
      tokenContractAddress
    ),
    treasuryContract: new web3.eth.Contract(
      treasuryContractAbi,
      treasuryContractAddress
    ),
  };
};
