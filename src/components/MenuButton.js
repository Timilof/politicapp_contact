import React from 'react';
import styled from 'styled-components';

const Switch = styled.button`
    font-size: 18px;
    text-decoration: underline;
    color: #000;
    color: ${props => (props.menuOpen ? "#fff" : "#000")};
    background: transparent;
    border: none;
    z-index: 99;
    position: absolute;
    top: 36px;
    right: 20px;
    outline: #000;
    
    @media (${({ theme }) => theme.respondTo.tablet}) {
       display: none;
      }
`;

const MenuButton = ({setMenuOpen, menuOpen}) => {

    function switchMenu(){
        setMenuOpen(!menuOpen)
    }

    return (
        <Switch menuOpen={menuOpen} onClick={e => switchMenu()}>
            {menuOpen ? 'Sluiten' : 'Menu'}
        </Switch>
    );
};

export default MenuButton;