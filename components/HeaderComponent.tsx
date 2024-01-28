
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Link as ScrollLink } from 'react-scroll';

function HeaderComponent() {
  return (
    <Header>
      <CustomImage src="/B64-white.png" alt="" loading="lazy" 
      width={120}
      height={100}
      />
      <Navigation>
        <Link >Home</Link>
        <Link >
          <ScrollLink to="footer" smooth={true} duration={500}>
            Contact
          </ScrollLink>
          </Link>
      </Navigation>
    </Header>
  );
}

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  background-color: rgba(36, 36, 36, 1);
  font-family: 'Quicksand', sans-serif;

`;

const CustomImage = styled(Image)`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  width: 100px;
`;

const Navigation = styled.nav`
  align-items: center;
  display: flex;
  font-size: 30px;
  padding:10px

  
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


export default HeaderComponent;