import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: ${({ hideNav }) =>
    hideNav ? "none" : "grid"};
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-1000%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarLink = styled(LinkS)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none,
transition: 0.2s ease-in-out;
textDecoration: none;
color: #fff;
cursor: pointer;

&:hover{
color: #01bf71; 
transition: 0.2s ease-in-out;
};
`;

export const SidebarLinkR = styled(LinkR)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none,
transition: 0.2s ease-in-out;
textDecoration: none;
color: #fff;
cursor: pointer;

&:hover{
color: #01bf71;
transition: 0.2s ease-in-out;
};
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(10, 60px);
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(10, 60px);
  }
`;

export const SideBarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

export const SideBarWalletConnectBtn = styled.button`
  width: 150px;
  height: 45px;
  border-radius: 50px;
  background: #fbcd4f;
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.65;
    color: #010606;
  }
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;
