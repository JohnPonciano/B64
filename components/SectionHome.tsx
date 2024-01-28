
import React, { useEffect } from "react";
import styled from "styled-components";


function SectionHome() {


  return (
    <HomeSection>
      <Container>
        <Image loading="lazy" srcSet="/BG1.jpg" />
        <ContentContainer>
          <InnerContainer>
            <Image2 loading="lazy" srcSet="/B64-white.png" />
              <Image3 
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8b1eac59c62e43c9b19e0dee34448e70488777b84a6acf2f4d410fbd60c03e2?apiKey=ed7f45803d864cc6bc12114b73d5e994&"
            />
          </InnerContainer>
        </ContentContainer>
      </Container>
    </HomeSection>
  );
}

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
  font-family: 'Roboto Mono', monospace;

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 914px;
  width: 100%;
  padding: 50px 0 3px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContentContainer = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.26);
  display: flex;
  margin-top: 24px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0px 20px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  width: 446px;
  max-width: 100%;
  flex-direction: column;
  margin: 12px 0px 329px;
  @media (max-width: 991px) {
    margin-bottom: 40px;
  }
`;

const Image2 = styled.img`
  aspect-ratio: 1.08;
  object-fit: contain;
  object-position: center;
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Image3 = styled.img`
  aspect-ratio: 1.79;
  object-fit: contain;
  object-position: center;
  width: 50px;
  overflow: hidden;
  align-self: center;
  margin-top: 75px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default SectionHome;