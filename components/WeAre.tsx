
import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 1);
  font-family: 'Quicksand', sans-serif;
  font-family: 'Roboto Mono', monospace;

`;

const StyledInnerContainer = styled.div`
  background-color: rgba(8, 8, 8, 1);
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;

  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const StyledContentContainer = styled.div`
  display: flex;
  width: 805px;
  max-width: 100%;
  flex-direction: column;
  margin: 125px 0 111px;

  @media (max-width: 991px) {
    margin: 40px 0;
  }
`;

const StyledTitle = styled.div`
  color: #fff;
  font: 700 100px Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
`;

const StyledDescription = styled.div`
  color: #fff;
  margin-top: 100px;
  padding: 0 1px 0 79px;
  font: 700 20px Inter, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    padding-left: 20px;
    margin-top: 40px;
  }
`;

const StyledImage = styled.img`
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

`;

function WeAreComponent() {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledContentContainer>
          <StyledTitle>WE ARE B64</StyledTitle>
          <StyledDescription>
          Somos um estúdio de desenvolvimento sem fronteiras e misterioso, criado por apaixonados por tecnologia e artistas.
          </StyledDescription>
        </StyledContentContainer>
        <StyledImage
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2baa6b08ab17c6bba192ebc743bd3ddfa25d553b1e6010aeb97b0b956347bcc7?apiKey=ed7f45803d864cc6bc12114b73d5e994&"
        />
      </StyledInnerContainer>
    </StyledContainer>
  );
}

export default WeAreComponent;