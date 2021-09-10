import React, { useState } from 'react';

import { Link } from "gatsby"
import styled from 'styled-components';

import LogoSrc from "../images/politicapp_logo.svg"

const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;    
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (${({ theme }) => theme.respondTo.tablet}) {
      flex-direction: row;
      width: 100%;
      margin: 0;
      padding: 2px 20px 2px 20px;
      // box-shadow: 0 2px 8px 0px rgba(0,0,0,0.1);
      // background: #fff;
    }
`;

const LogoLink = styled(Link)`
    position: absolute;
    top: 10px;
    left: 10px;
    margin: 0;
    z-index: 99;
    overflow: hidden;
    padding: 0;
    width: 140px;

    @media (${({ theme }) => theme.respondTo.tablet}) {
      align-items: baseline;
      display: flex;
      width: 140px;
      position: initial;
      margin: 0 auto 0 40px;

      &:hover{
        cursor: pointer;
      }
    }
`;

const Logo = styled.img`
    height: 50px;
    margin: 0;
    object-fit: contain;
    & > *{
      fill: ${props => (props.menuOpen ? "#fff" : `#000`)};
    }
    @media (${({ theme }) => theme.respondTo.tablet}) {
      height: 80px;
    }
`;

const Header = ({ siteTitle }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <StyledHeader>
      <LogoLink to="/">
          <Logo menuOpen={menuOpen} src={LogoSrc} alt="Go to politicapp home"/>
      </LogoLink>
    </StyledHeader>
)}

export default Header
