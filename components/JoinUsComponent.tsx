import * as React from "react";
import styled from "styled-components";

function JoinUsComponent() {
  return (
    <JoinUs>
      <ContentContainer>
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
                  Você está animado para ver para onde esta jornada nos
                   levará enquanto trabalhamos juntos em noso Projetos?
                </p>
                <br></br>
                <p>Você está pronto para dar forma a B64?</p>
                <br></br>
                <p>
                Nosso objetivo na B64 é combinar a emocionante construção de mundos, design envolvente com qualidade visual impressionante em experiências focadas e únicas.
                </p>
              </Description>
            </Column>
            <Column>
              <Image
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fed7f45803d864cc6bc12114b73d5e994%2F490dcc4ecebb41ca969376b835253c68" />
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
  font-family: 'Quicksand', sans-serif;

`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 33px;
  min-height: 0px;
  padding: 0 20px 20px;
  font-family: 'Quicksand', sans-serif;

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
  margin-left: auto;
  margin-right: auto;
  font-family: 'Quicksand', sans-serif;
`;

const TitleContainer = styled.div`
  position: relative;
  margin-top: 20px;
  height: auto;
  font-size: 50px;
  color: rgba(255, 255, 255, 1);
  font-family: 'Quicksand', sans-serif;

`;

const JobContainer = styled.div`
  gap: 20px;
  display: flex;
  font-family: 'Quicksand', sans-serif;
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
  font-family: 'Quicksand', sans-serif;
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
  font-size: 150px;
  font-family: 'Quicksand', sans-serif;

`;

const Description = styled.div`
  position: relative;
  height: auto;
  font-size: 20px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  font-family: 'Quicksand', sans-serif;
  

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