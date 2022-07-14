import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const WrappedPresale = styled.div`
  position: relative;
  //display: block;
  padding-left: 30px;
  padding-right: 30px;
  //max-width: 1300px;
  padding: 0 30px;
  justify-content: center;
  text-align: -webkit-center;

  //   @media (min-width: 360px) {
  //     height: 60vh;
  //   }

  //   @media (min-width: 410px)  {
  //     height: 70vh;
  // }

  //   @media (min-width: 767px)  {
  //     height: 80vh;
  // }
`;
export const WrappedPresaleBackground = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
`;

export const WrappedPresaleBackground1 = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 45%;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
  display: flex;
  justify-content: center;
`;

export const WrappedC = styled.div`
--bs-gutter-x: 1.5rem;
--bs-gutter-y: 0;
width: 100%;
display: flex;
flex-wrap: wrap;
margin-top: calc(-1 * var(--bs-gutter-y));
margin-right: calc(-.5 * var(--bs-gutter-x));
margin-left: calc(-.5 * var(--bs-gutter-x));
`;

export const PresaleContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  margin-top: 50px
`;

export const PresaleContainerL = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding-left: 5px;
  padding-right: 15px;
`;

export const PresaleContainerR = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding-left: 15px;
`;

export const WrappedExchangeStarted = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 7px;
`;

export const WrappedExchangeStartedItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const ExchangeStartedTitle = styled.h1`
  color: rgb(213, 240, 79);
  text-align: center;
  font-size: 32px;
  letter-spacing: 0px;
  font-weight: 500;
  margin-bottom: 20px;
  text-transform: uppercase;
  @media screen and (min-width: 576px) {
    font-size: 56px;
    letter-spacing: 3px;
  }
`;

export const ExchangeStartedCountDown = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 5px;
  @media screen and (min-width: 576px) {
    gap: 20px;
  }
`;

export const WrappedCountDownNumber = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
`;

export const CountDownNumber = styled.div`
  color: rgb(206, 216, 239);
  font-size: 36px;
  padding: 15px 11px;
  background: rgba(22, 70, 136, 0.83);
  border-radius: 1px;
  margin-bottom: 15px;
  @media screen and (min-width: 576px) {
    font-size: 48px;
    padding: 20px 17px;
  }
`;
export const CountDownItemLabel = styled.p`
  color: rgb(213, 240, 79);
  font-size: 12px;
  letter-spacing: 0px;
  text-transform: uppercase;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    letter-spacing: 2px;
  }
`;

export const SectionSwap = styled.div`
width: 100%;
margin-top: 0px;
margin-bottom: 30px;
padding: 20px 30px;
border-radius: 20px;
background-color: #2f3556;
text-align: center;
position: relative;
`;

export const SectionSwapL = styled.div`
  width: 100%;
  margin-top: 0px;
  margin-bottom: 30px;
  padding: 20px 30px;
  border-radius: 20px;
  background-color: #2f3556;
  text-align: center;
  position: relative;
  height: 600px;
`;
export const SectionSwapR = styled.div`
  width: 100%;
  margin-top: 0px;
  margin-bottom: 30px;
  padding: 20px 30px;
  border-radius: 20px;
  background-color: #2f3556;
  text-align: center;
  position: relative;
`;

export const WrappedCol = styled.div`
  flex: 1 0;
`;
export const MinWapper = styled.div`
margin-top: 30px;
`;

export const MinContent = styled.div`
position: relative;
display: inline-flex;
vertical-align: middle;
width: 100%;
    margin-bottom: 30px;
`;


export const MinBtn = styled.div`
width: 100%;
width: calc(100% - 60px);
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%, -50%);
`;

export const Input = styled.input`
position: absolute;
clip: rect(0,0,0,0);
pointer-events: none;
`;


export const LabelR = styled.label`
  width: 100%;
  height: 60px;
  font-weight: 600;
  // border-width: 2px;
  // border-style: solid;
  background-color: ${({checked}) => (checked ? '#2ac6ea':'#404a72')};
  color: #f2eeeb;
  opacity: 70%;

  //margin: 0.1rem;
  cursor: pointer;
  padding-top: 17px;
  border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

  font-family: inherit;
  &:active {
    background-color: #2ac6ea !important;
    color: #2f3556 !important;
    box-shadow: none !important;
    outline: 0 !important;
  }
  &:hover {
    opacity: 0.65;
  }
`;
export const LabelL = styled.label`
background-color: ${({checked}) => (checked ? '#2ac6ea':'#404a72')};
  width: 100%;
  height: 60px;
  font-weight: 600;
  // border-width: 2px;
  // border-style: solid;
  //background-color: #404a72;
  color: #f2eeeb;
  opacity: 70%;

  //margin: 0.1rem;
  cursor: pointer;
  padding-top: 17px;
  // border-radius: 1.85rem;
  border-top-right-radius: 0;
  order-bottom-right-radius: 0;

  border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

  font-family: inherit;
  &:active {
    background-color: #2ac6ea !important;
    color: #2f3556 !important;
    box-shadow: none !important;
    outline: 0 !important;
  }
  &:hover {
    opacity: 0.65;
  }
`;

export const MinLinkBtn = styled.label`
width: 100%;
height: 60px;
font-weight: 600;
background-color: #404a72;
color: #f2eeeb;
opacity: 70%;
cursor: pointer;
padding-top: 17px;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  //border-color: none;

font-family: inherit;
&:active {
    background-color: #2ac6ea !important;
    color: #2f3556 !important;
    box-shadow: none !important;
    outline: 0 !important;
}
&:hover {
  opacity: 0.65;
}
`;

export const LinkRef = styled.div`
  color: #fff;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 10px;
  @media (max-width: 414px) {
    font-size: 13px;
  }
`;
export const LinkRefContent = styled.div`
  color: #fff;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 10px;
  @media (max-width: 414px) {
    font-size: 12px;
  }
`;

export const ArrowRight = styled(FaArrowRight)`
  margin-left: 10px;
  font-size: 18px;
`;

export const RefLinkToClaim = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
  @media (max-width: 414px) {
    margin-top: 40px;
  },
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const LinkToClaim = styled(LinkR)`
  color: #fff;
  font-size: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background: linear-gradient(to right, #3814e8 0%, #fc0ef8 100%);
  &:hover {
    opacity: 0.65;
    background: #fc0ef8;
  }
`;
export const WrappedSwap = styled.div`
  position: absolute;
  max-width: 436px;
  width: 100%;
  z-index: 5;
  background: #171f31;
  border-radius: 10px;
  box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px,
    rgb(25 19 38 / 5%) 0px 1px 1px;
  color: rgb(241, 215, 163);
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    top: 0px;
  }
`;

export const SwapContainer = styled.div`
  position: relative;
`;

export const WrappedHeadSwap = styled.div`
  border-bottom: 1px solid rgb(82, 75, 99);
  padding: 24px;
`;
export const HeadSwapContainer = styled.div``;

export const HeadTextSubtitle = styled.div`
  color: rgb(206, 216, 239);
  font-weight: 400;
  line-height: 1.5;
  margin-top: 5px;
  font-size: 14px;
  font-family: Kanit;
`;
export const HeadTextContent = styled.div`
  color: rgb(241, 215, 163);
  font-weight: 400;
  line-height: 1.5;
  font-size: 17px;
  font-family: Kanit;
`;
export const WrappedBodySwap = styled.div`
  padding: 24px;
`;
export const BodySwapContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  row-gap: 12px;
`;
export const WrappedBodySwapPrice = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 20px;
  background-color: rgb(8, 45, 93);
  z-index: 1;
`;
export const BodySwapPriceContainer = styled.div`
  border-radius: 2px;
  background-color: rgba(19, 48, 84, 0.85);
  box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
`;

export const WrappedBodySwapPriceTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(241, 215, 163);
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0px;
  font-family: "Kanit";
`;

export const ContainerBodySwapPriceTitle = styled.div`
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
`;

export const BodySwapPriceTitle = styled.div`
  color: rgb(241, 215, 163);
  font-weight: 400;
  line-height: 1.5;
  font-size: 14px;
`;

export const WrappedSwapPrice = styled.div`
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  padding: 0.75rem 0.5rem 0.75rem 1rem;
`;

export const SwapPriceInput = styled.input`
  color: rgb(241, 215, 163);
  width: 0px;
  position: relative;
  font-weight: 500;
  outline: none;
  border: none;
  flex: 1 1 auto;
  background-color: transparent;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0px;
  appearance: textfield;
`;
export const WrappedLogoPrice = styled.button`
  -webkit-box-align: center;
  align-items: center;
  height: 34px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  color: rgb(241, 215, 163);
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  user-select: none;
  border: none;
  padding: 0px 0.5rem;
`;

export const ContainerLogoPrice = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const LogoPrice = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  max-width: 100%;
`;
export const PriceLabel = styled.div`
  color: rgb(241, 215, 163);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  font-family: "Kanit";
`;
export const WrappedSwapLogo = styled.div`
  display: grid;
  grid-auto-rows: auto;
`;

export const ContainerSwapLogo = styled.div`
  padding: 0px 1rem;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  display: flex;
  padding: 0px;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
`;

export const SwapLogo = styled.div`
  padding: 2px;
`;
export const SwapLogoWrappedImg = styled.button`
  -webkit-box-align: center;
  align-items: center;
  border: 0px;
  border-radius: 2px;
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
  background-color: rgb(15, 33, 33);
  box-shadow: none;
  color: rgb(31, 199, 212);
  padding: 0px;
  width: 32px;
  border-radius: 50%;
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const SwapLogoImg = styled(FaArrowDown)``;

export const WrappedBtnSwap = styled.div`
  margin-top: 1rem;
`;

export const BtnSwap = styled.button`
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
  height: 48px;
  padding: 0px 24px;
  background-color: rgb(31, 199, 212);
  color: white;
  width: 100%;
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const WrappedWithdraw = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  right: 0;
  width: 30%;
  @media (max-width: 1200px) {
    width: 100%;
    position: relative;
    justify-content: space-around;
  }
  @media (max-width: 540px) {
    margin-top: -250px;
  }
  @media (max-width: 414px) {
    margin-top: -200px;
  }
`;
export const StartClaim = styled.div`
  color: rgb(241, 215, 163);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  font-family: "Kanit";
  display: flex;
  align-items: center;
`;

export const WidthdrawBtn = styled.button`
  width: 190px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 50, 9, 1) 0%,
    rgba(233, 218, 111, 1) 0%,
    rgba(223, 180, 114, 1) 51%,
    rgba(255, 130, 176, 0.9612219887955182) 92%
  );
  color: #bf5ba9;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.65;
  }
  &:active {
    opacity: 0.85;
    -webkit-transform: translateY(1px);
    -ms-transform: translateY(1px);
    transform: translateY(1px);
    box-shadow: none;
  }
`;

export const WrappedListWithdraw = styled.div`
  width: 100%;
  max-height: 10vh;
  position: absolute;
  background: inherit;
  margin-top: 70px;
`;

export const WrappedListWithdrawLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ListWithdrawItemContainerLabel = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ListWithdrawItemLabel = styled.div`
  color: #d5f04f;
  font-size: 16px;
`;

export const SectionListWithdrawContent = styled.div`
  max-height: 400px;
  overflow: scroll;
`;

export const WrappedListWithdrawContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListWithdrawItemContainerContent = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ListWithdrawItemContent = styled.div`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
