import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  //background: #000;
  height: 100px;
  //margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: sticky;
  top: 0;
  z-index: 10;
  position: fixed;
  left: 0px;
  transition: top 0.2s ease 0s;
  width: 100%;
  z-index: 20;
  /* transform: translate3d(0px, 0px, 0px); */
  overflow: hidden;
  padding: 20px 20px 0px;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 55px;
  z-index: 1;
  width: 100%;
  padding: 0 15px;
  max-width: 90%;

  //max-width: ${({ hideNav }) => (hideNav ? "90%" : "1210px")};
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const NavImage = styled.img`
  //width: 82px;
  //height: 82px;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    //width: 70px;
    //height: 70px;
  } 
  @media (max-width: 576px) {
    width: 200px;
    //height: 100px;
  }
  @media (max-width: 414px) {
    width: 200px;
    position: absolute;
    left: 22px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: ${({ hideNav }) => (hideNav ? "none" : "block")};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  background: ${({ scrollNav }) =>
    scrollNav ? "rgb(44, 254, 216)" : "transparent"};
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  flex-direction: row;
  //width: 90%;
  height: 58px;
  background: linear-gradient(to right,#3814e8 0%,#fc0ef8 100%);
  border-radius: 30px;
  overflow: hidden;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: rgb(4, 34, 52);
    background: rgb(44, 254, 216);
  }

  &:hover {
    color: rgb(4, 34, 52);
    background: rgb(44, 254, 216);
  }
`;

export const NavPresale = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: rgb(4, 34, 52);
    background: rgb(44, 254, 216);
  }

  &:hover {
    color: rgb(4, 34, 52);
    background: rgb(44, 254, 216);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: right;
  //padding: 0 0.5rem;
  @media screen and (max-width: 768px) {
    //display: none;
  }
`;

export const NavBtnWalletConnect = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 50px;
  background: linear-gradient(to right, #3814e8 0%, #fc0ef8 100%);
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.65;
    background: #fc0ef8;
  }
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    width: 90px;
    height: 32px;
    font-size: 15px;
    margin: 5px -24px;
  }

  @media screen and (max-width: 415px) {
    padding: 0px 0px;
    height: 23px;
    font-size: 12px;
    position: absolute;
    right: 31px;
    top: 41%;
  }
`;

export const WalletAddress = styled.h2`
  border-radius: 50px;
  background: linear-gradient(to right, #3814e8 0%, #fc0ef8 100%);
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  position: absolute;
  left: 43%;

  @media screen and (max-width: 1024px) {
    padding: 5px 10px;
    height: 33px;
    font-size: 17px;
    top: 38%;
    left: 39%;
  }

  @media screen and (max-width: 768px) {
    padding: 5px 10px;
    height: 32px;
    font-size: 15px;
    top: 38%;
    left: 39%;
  }

  @media screen and (max-width: 540px) {
    left: 32%;
  }

  @media screen and (max-width: 415px) {
    padding: 5px 10px;
    height: 20px;
    font-size: 7px;
    left: 37%;
    top: 48%;
  }

  @media screen and (max-width: 376px) {
    padding: 5px 10px;
    height: 20px;
    font-size: 7px;
    left: 35%;
    top: 48%;
  }
`;

export const WrappedConnectWallet = styled.div`
  display: ${({ hideConnect }) => (hideConnect ? "none" : "flex")};
  align-items: center;
`;

export const ConnectWallet = styled.button`
  -webkit-box-align: center;
  align-items: center;
  border: 0px;
  border-radius: 2px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: 1;
  outline: 0px;
  transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
  height: 32px;
  padding: 0px 16px;
  background-color: rgb(31, 199, 212);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
