import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
export const WrappedWalletConnect = styled.div`
  display: ${({ openWallet, active }) => ((openWallet) ? "flex" : "none")};
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  inset: 0px;
  z-index: 99;
`;

export const WrappedWalletConnectBackground = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(69, 42, 122);
  transition: opacity 0.4s ease 0s;
  opacity: 0.6;
  z-index: 10;
  pointer-events: initial;
`;

export const WalletConnectContainer = styled.div`
  overflow: hidden;
  background: #171f31;
  box-shadow: rgb(14 14 44 / 10%) 0px 20px 36px -8px,
    rgb(0 0 0 / 5%) 0px 1px 1px;
  border: 1px solid rgb(82, 75, 99);
  border-radius: 2px;
  width: 100%;
  z-index: 100;
  @media screen and (min-width: 370px) {
    width: auto;
    min-width: 320px;
    max-width: 100%;
  }
`;
export const WalletConnectHeader = styled.div`
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border-bottom: 1px solid rgb(82, 75, 99);
  display: flex;
  padding: 12px 24px;
`;

export const WalletConnectHeaderWrapTitle = styled.div`
  display: flex;
`;
export const WalletConnectHeaderTitle = styled.h2`
  color: rgb(241, 215, 163);
  font-size: 16px;
  font-weight: 600;
  font-weight: 600;
  line-height: 1.1;
  @media screen and (min-width: 968px) {
    font-size: 20px;
  }
`;
export const WalletConnectClose = styled.button`
  align-items: center;
  border: 0px;
  border-radius: 2px;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 48px;
  background-color: transparent;
  color: rgb(31, 199, 212);
  box-shadow: none;
  padding: 0px;
  width: 48px;
  & svg {
    align-self: center;
    color: rgb(31, 199, 212);
    flex-shrink: 0;
  }
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;
export const CloseIcon = styled(FaTimes)``;

export const WrappedWalletConnectBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

export const WalletConnectBtn = styled.button`
  align-items: center;
  border: 0px;
  border-radius: 2px;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: space-between;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 48px;
  padding: 0px 24px;
  background: linear-gradient(to right,#3814e8 0%,#fc0ef8 100%);
  box-shadow: none;
  color: rgb(31, 199, 212);
  width: 100%;
  margin-bottom: 8px;
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const WalletConnectLabel = styled.div`
  color: rgb(31, 199, 212);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin-right: 16px;
`;

export const WalletConnectLogo = styled.img`
  width: 31px;
`;
