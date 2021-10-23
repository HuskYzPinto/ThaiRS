import React from "react";
import styled from "styled-components";

interface Props {
  text?: string;
}

const Cover = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 35vh;
  text-align: center;
  color: black;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 0px;
  padding-right: 0px;
`;

const CoverImg = styled.img`
  border-radius: 5px;
  opacity: 80%;
  width: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  background-color: #0d1417;
`;
const OverlayText = styled.div`
  color: white;
  font-size: 58pt;
  margin-top: auto;
  margin-bottom: auto;
  font-family: "Comic Mono", "Waree";
  @media only screen and (max-width: 768px) {
    font-size: 24pt;
  }
`;

const Hero: React.FC<Props> = (props: Props) => {
  return (
    <Cover>
      <CoverImg
        alt="cover photo for ThaiRS"
        src="https://huskyzpinto.sfo2.digitaloceanspaces.com/Pics/thairs/image_2021-07-04_18-39-52.png"
      />
      <Overlay>
        <OverlayText> {props.text ? props.text : 'Thai RuneScape Community'}</OverlayText>
      </Overlay>
    </Cover>
  );
};
export default Hero;
