import styled from "styled-components";

export const SnowWrapper = styled.div`
overflow: hidden;
`

export const Snow = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;

:first-child{
    opacity: .2727;
    -webkit-transform: translate(53.7791vw,-10px) scale(.9932);
    transform: translate(53.7791vw,-10px) scale(.9932);
    -webkit-animation: fall-1 26s linear -28s infinite;
    animation: fall-1 26s linear -28s infinite;
}
`