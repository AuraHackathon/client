import React, { useEffect, useState } from "react";
import useWallet from "../../hooks/useWallet";
import { isMobile, isAndroid } from 'mobile-device-detect';
import {
  ArrowRight,
  BoxReferral,
  LinkRef,
  LinkRefContent,
  LinkToClaim,
  PresaleContainer,
  ReferralLinkBtn,
  ReferralLinkLabel,
  RefLinkToClaim,
  SectionSwap,
  SwapContainer,
  WrappedPresale,
  WrappedPresaleBackground,
  WrappedPresaleBackground1,
  PresaleContainerL,
  PresaleContainerR,
  SectionSwapL,
  SectionSwapR,
  WrappedCol,
  WrappedC,
  MinWapper,
  MinContent,
  Input,
  LabelL,
  LabelR,
  MinLinkBtn
} from "./PresaleElement";
import { getContract } from "../../utils/getContract";

export default function Presale(props) {
  const { account, active, connector } = useWallet();
  const [isCopied, setIsCopied] = useState(false);
  const [isDisplayClaim, setIsDisplayClaim] = useState(false);
  const refactRefLink = (refLink) => {
    for (let i = 0; i <= refLink.length; i++) {
      if (refLink[i] === "?") {
        refLink = refLink.substr(0, i);
      }
    }
    return refLink;
  };

  useEffect(async () => {
    try {
      if (connector) {
        const { tokenContract } = await getContract(connector);
        const tokenBalance = await tokenContract.methods
          .balanceOf(account)
          .call();
        if (tokenBalance > 0) {
          setIsDisplayClaim(true);
        } else {
          setIsDisplayClaim(false);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, [account]);

  const coppyToClipBoard = () => {
    navigator.clipboard
      .writeText(`${refactRefLink(window.location.href)}?address=${account}`)
      .then(() => {
        setIsCopied(true);
      }).catch(() => {
        setIsCopied(false);
      });
  };

  return (
    <WrappedPresale id="play">
      <WrappedPresaleBackground>
        <PresaleContainer>
          <SectionSwap>
          <WrappedC>
            <WrappedCol>
              <h3 >CLAIMABLE</h3>
              <div >0 $CASH</div>
            </WrappedCol>
            <WrappedCol >
              <h3 >DAILY YIELD</h3>
              <div >0 $CASH</div>
            </WrappedCol>
            <WrappedCol>
              <h3 >BALANCE</h3>
              <div>0 $CASH</div>
            </WrappedCol>
            </WrappedC>
          </SectionSwap>
        </PresaleContainer>
      </WrappedPresaleBackground>

      <WrappedPresaleBackground1>
        <PresaleContainerL>
          <SectionSwapL>
            <WrappedC>
              <WrappedCol>
                <h3 >MINT</h3>
              </WrappedCol>
            </WrappedC>

            <MinWapper>
              <MinContent id="type-group" role="group">
                <Input name="radio" type="radio" autocomplete="off" disabled="" id="radio-0" value="1" checked={true}></Input>
                  <LabelL tabindex="0" for="radio-0" checked={true}>HOUSE</LabelL>
                <Input name="radio" type="radio" autocomplete="off" disabled="" id="radio-1" value="2"></Input>
                  <LabelR tabindex="0" for="radio-1" >UTILITY BUILDING</LabelR>
              </MinContent>

              <MinContent id="type-group" role="group">
                <Input name="radio" type="radio" autocomplete="off" disabled="" id="radio-0" value="1" checked={true}></Input>
                  <LabelL tabindex="0" for="radio-0" >QUANTITY</LabelL>
                <Input name="radio" type="radio" autocomplete="off" disabled="" id="radio-1" value="2"></Input>
                  <LabelR tabindex="0" for="radio-1" >-</LabelR>
              </MinContent>


              <MinContent id="type-group" role="group">
                <Input name="radio" type="radio" autocomplete="off" disabled="" id="radio-0" value="1" checked={true}></Input>
                  <LabelL tabindex="0" for="radio-0">STAKE</LabelL>
                <Input name="radio" type="radio" autocomplete="off" disabled="" id="radio-1" value="2"></Input>
                  <LabelR tabindex="0" for="radio-1" checked={true}>DON'T STAKE</LabelR>
              </MinContent>



              <MinContent style={{"padding-top": "155px"}}>
                <MinLinkBtn>MINT</MinLinkBtn>
              </MinContent>
            </MinWapper>

          </SectionSwapL>
        </PresaleContainerL>

        <PresaleContainerR>
          <SectionSwapL>
            <h3 style={{"top": "calc(50%)"}} >CONNECT YOUR METAMASK WALLET</h3>
          </SectionSwapL>
        </PresaleContainerR>
      </WrappedPresaleBackground1>

    </WrappedPresale>
    
  );
}
