import VerticalTimeline from "react-vertical-timeline-component/dist-modules/VerticalTimeline";
import styled from "styled-components";

export const WrappedRoadmapContainer = styled.div``;

export const RoadmapContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  //padding: 110px 16px 300px;
  margin: 0px auto;
  @media (min-width: 900px) {
    padding: 110px 10px 130px;
  }
`;

export const RoadmapBody = styled.div``;
export const RoadmapBodyTitle = styled.h2`
  color: rgb(0, 255, 216);
  font-family: Kanit;
  font-weight: bold;
  font-size: 30px;
  line-height: 130%;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
  @media (min-width: 900px) {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;
export const RoadmapBodySubtitle = styled.div`
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin: auto auto 60px;
  text-align: center;
  max-width: 300px;
  @media (min-width: 900px) {
    font-size: 18px;
    max-width: 100%;
  }
`;

export const RoadMapTimeline = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const StyledVerticalTimeline = styled(VerticalTimeline)`
  display: flex;
  flex-direction: column;

  & .vertical-timeline-element-content {
    box-shadow: none;
    background: none;
  }
  .roadmap-title-left {
    @media (min-width: 900px) {
      font-size: 30px;
    }
    @media (max-width: 1170px) {
      text-align: left;
    }
    color: rgb(248, 203, 99);
    font-size: 20px;
    line-height: 1.5;
    font-weight: bold;
    font-family: Kanit;
    text-align: right;
  }
  .roadmap-title-right {
    @media (min-width: 900px) {
      font-size: 30px;
    }
    color: rgb(248, 203, 99);
    font-size: 20px;
    line-height: 1.5;
    font-weight: bold;
    font-family: Kanit;
  }
  .roadmap-content-left {
    @media (min-width: 900px) {
      font-size: 20px;
    }
    @media (max-width: 1170px) {
      text-align: left;
    }
    color: rgb(255, 255, 255);
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 5px;
    text-align: right;
  }
  .roadmap-content-right {
    @media (min-width: 900px) {
      font-size: 20px;
    }

    color: rgb(255, 255, 255);
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 5px;
  }
  .vertical-timeline-element-icon {
    width: 15px;
    height: 15px;
    left: 52%;
    margin-left: -30px;
    transform: rotate(45deg);
    border-radius: 0px;
    background: #c9c922;
    box-shadow: 0 0 0 4px #576812, inset 0 2px 0 rgb(0 0 0 / 8%),
      0 3px 0 4px rgb(0 0 0 / 5%);
    @media (max-width: 1170px) {
      left: 0;
      margin-left: 12px;
    }
  }
  .vertical-timeline-element-content {
    padding: 0;
  }
  .vertical-timeline-element:first-child {
    margin-top: -40px;
  }

  .vertical-timeline-element-content-arrow {
    display: none;
  }
  &.vertical-timeline:before {
    width: 3px;
    height: 100%;
    @media only screen and (min-width: 1170px) {
      margin-left: -1px;
    }
  }
`;
