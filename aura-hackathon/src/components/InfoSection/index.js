import React from 'react';
import SnowStorm from 'react-snowstorm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    ImgBaner,
    ImgNFT1,
    ImgNFT2,
    ImgNFT3,
    Zoom,
    BanerBotoom,
    BanerWrapper,
    BanerItem1
} from './InfoElements';

const InfoSection = () => {
    
    AOS.init();

    return (
        <>
        <div id='home'>         
            <InfoWrapper>
                <SnowStorm />
                <InfoRow>
                <Zoom data-aos='zoom-in'>
                </Zoom>
                </InfoRow>
            </InfoWrapper>
            </div>
        </>
    )
}

export default InfoSection;
