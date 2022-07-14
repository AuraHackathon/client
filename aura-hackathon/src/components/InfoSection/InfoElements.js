import styled from "styled-components";

// export const InfoContainer = styled.div`
//     color: #fff;
//     background: ${({lightBg}) => (lightBg ? '#f9f9f9':'#010606')};
// `

export const InfoWrapper = styled.div`
    //background: ${({lightBg}) => (lightBg ? '#f9f9f9':'#010606')};
    //height: 1100px;
    width: 100%;
    display: block;
    position: relative;
    background-image: url(../../images/background_mobile.svg);
    background-size: cover;
    background-position: center bottom;
    background-repeat: no-repeat;
    
    @media screen and (max-width: 1024px){
        height: 1100px;
    }

    @media screen and (max-width: 768px){
        height: 550px;
    }

     @media screen and (max-width: 375px){
        height: 500px;
        }



`

export const InfoRow = styled.div`
    width: 100%;
    max-width: 1366px;
    margin: 0px auto;
    padding: 0px 16px;
`

export const Zoom = styled.div`
    width: 100%;
    position: relative;
    height: 550px;
    @media (min-width: 900px){
        height: 110vh;
    }
    

`