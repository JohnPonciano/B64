
import React from "react";
import styled from "styled-components";
import TypeformEmbed from "./TypeformEmbed";

const UpdatedFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 1212px;
  width: 100%;
  justify-content: center;
  padding: 48px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Content = styled.div`
  position: relative;
  color: #fff;
  max-width: 360px;
  align-self: stretch;
  background-color: rgba(0, 0, 0, 0.26);
  margin-top: 24px;
  justify-content: center;
  align-items: start;
  padding: 50px 60px;
  font: 700 52px Quicksand, sans-serif;
  font-family: 'Quicksand', sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 40px 20px 40px 30px;
  }
`;

const CodeBlock = styled.div`
  position: relative;
  height: auto;
  margin-top: 20px;
  background-color: #636363;
  padding-top: 20px;
  font-family: 'Quicksand', sans-serif;
`;

const FooterText = styled.div`
  
  position: relative;
  height: auto;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 1);
  padding: 20px 0 27px;
  font-family: 'Quicksand', sans-serif;
`;

const SocialBox = styled.div`
  
  position: relative;
  height: auto;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.26);
  padding: 20px 0 27px;
  font-family: 'Quicksand', sans-serif;
`;

const Navigation = styled.nav`
  align-items: center;
  display: flex;
  font-size: 30px;
  
`;

const Link = styled.a`
  text-decoration: pointer;
  margin-right: 24px;
  @media (max-width: 640px) {
    font-size: 24px;
  }transition: color 0.3s ease-in-out;
  &:hover {
    color: #ff8c00;
  }
  
`;

const SocialIcon = styled.img`
  align-items: center;
  display: flex;
  font-size: 30px;
  width: 50px; /* Ajuste o tamanho do ícone conforme necessário */
  height: 50px; /* Ajuste o tamanho do ícone conforme necessário */
  padding: 10px
  
`;

function FooterComponent() {
  return (
    <UpdatedFooter id="footer">
      <Container>
        <BackgroundImage loading="lazy" srcSet="/bg3.jpeg" />
        <Content>
          <h1>WE WORK</h1>
          <p>WITHOUT</p>
          <p>BEING SEEN.</p>
        </Content>
        <CodeBlock>
          <TypeformEmbed formId="01HN0ZKXTEBR054TW0JPSQP1D2"></TypeformEmbed>
        </CodeBlock>
        <SocialBox>
        <Navigation>
      <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="/instagram.png" alt="Instagram" />
      </Link>
      <Link href="https://www.discord.com/" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="/discord.png" alt="Discord" />
      </Link>
      <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="/linkedin.png" alt="LinkedIn" />
      </Link>
      <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="/youtube.png" alt="YouTube" />
      </Link>
    </Navigation>
        </SocialBox>
        <FooterText>
          <p>2024 Beta 64 - B64</p>
        </FooterText>
      </Container>
    </UpdatedFooter>
  );
}

export default FooterComponent;