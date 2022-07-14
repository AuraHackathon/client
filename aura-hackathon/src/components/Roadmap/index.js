import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";
import {
  RoadmapBody,
  RoadmapBodySubtitle,
  RoadmapBodyTitle,
  RoadmapContainer,
  RoadMapTimeline,
  StyledVerticalTimeline,
  WrappedRoadmapContainer,
} from "./RoadmapElement";

const data = [
  {
    title: "Q4.2021",
    content: ["Market Research", "Game R&D", "Technology R&D"],
  },
  {
    title: "Q1.2022",
    content: [
      "Conceptualization",
      "Business Model",
      "Private sales",
      "Public sales",
    ],
  },
  {
    title: "Q2.2022",
    content: [
      "Build Staking - Farming",
      "Build NFT & NFT Marketplace",
      "Publish Game: Alpha test, Beta test",
      "Listing Pancake"
    ],
  },
  {
    title: "Q3.2022",
    content: [
      "Game Official Launch",
      "Game Protocol",
      "Game System",
      "Listing MEXC Global"
    ],
  },
  {
    title: "Q4.2022",
    content: [
      "Gameplay upgrade metarverse",
      "Game Version Upgrade",
      "Multiverse",
      "Listing gate.io"
    ],
  },
  {
    title: "Q1.2023",
    content: [
      "Decentralized Exchanges develop",
      "Listing Binance"
    ],
  },
];

export default function Roadmap() {
  AOS.init();
  return (
    <WrappedRoadmapContainer id='roadMap'>
      <RoadmapContainer data-aos='zoom-in'>
        <RoadmapBody>
          <RoadmapBodyTitle>ROADMAP</RoadmapBodyTitle>
          <RoadmapBodySubtitle>
            This timeline details our funding and development goals
          </RoadmapBodySubtitle>
        </RoadmapBody>
      </RoadmapContainer>
      <RoadMapTimeline>
        <StyledVerticalTimeline data-aos='zoom-in'>
          {data.map((item, key) =>
            key % 2 === 0 ? (
              <VerticalTimelineElement key={key}>
                <div className="roadmap-title-left">{item.title}</div>
                {item.content.map((cont, key) => (
                  <div className="roadmap-content-left" key={key}>{cont}</div>
                ))}
              </VerticalTimelineElement>
            ) : (
              <VerticalTimelineElement key={key}>
                <div className="roadmap-title-right">{item.title}</div>
                {item.content.map((cont, key) => (
                  <div className="roadmap-content-right" key={key}>{cont}</div>
                ))}
              </VerticalTimelineElement>
            )
          )}
        </StyledVerticalTimeline>
      </RoadMapTimeline>
    </WrappedRoadmapContainer>
  );
}
