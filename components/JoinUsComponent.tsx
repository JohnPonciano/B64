import * as React from "react";
import styled from "styled-components";

function JoinUsComponent() {
  return (
    <JoinUs>
      <ContentContainer maxWidth={1200} lazyLoad={false}>
        <Section>
          <TitleContainer>
            <h1>
              <strong>WE ARE HIRING</strong>
            </h1>
          </TitleContainer>
          <JobContainer>
            <Column>
              <Title>
                <h1>
                  <strong>JOIN US</strong>
                </h1>
              </Title>
              <Description>
                <p>
                  Are you excited to see where this journey will lead us as we
                  work together on an all-new IP?
                </p>
                <p>Are you ready to bring shape to the B64?</p>
                <p>
                  Our goal at B64 is to combine exciting world building,
                  engaging gameplay and impressive visual quality into focused
                  and unique experiences.
                </p>
              </Description>
            </Column>
            <Column>
              <Image
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68"/>
            </Column>
          </JobContainer>
        </Section>
      </ContentContainer>
    </JoinUs>
  );
}

const JoinUs = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  background-color: rgba(29, 29, 29, 1);
  margin-bottom: -1px;
  padding-bottom: 2px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 33px;
  min-height: 0px;
  padding: 0 20px 20px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 33px;
  min-height: 0px;
  padding: 0 20px 20px;
  width: 100%;
  align-self: stretch;
  flex-grow: 1;
  max-width: ${(props) => props.maxWidth}px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleContainer = styled.div`
  position: relative;
  margin-top: 20px;
  height: auto;
  font-size: 30px;
  color: rgba(255, 255, 255, 1);
`;

const JobContainer = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Title = styled.div`
  position: relative;
  margin-top: 20px;
  height: auto;
  color: rgba(238, 73, 73, 1);
  font-size: 100px;
`;

const Description = styled.div`
  position: relative;
  height: auto;
  font-size: 15px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;

const Image = styled.img`
  aspect-ratio: 1.32;
  object-fit: contain;
  object-position: center;
  width: 100%;
  margin-top: 20px;
  min-height: 20px;
  min-width: 20px;
  overflow: hidden;
`;

export default JoinUsComponent;