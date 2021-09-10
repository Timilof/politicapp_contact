import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const LinkItem = styled(Link)`
    text-decoration: underline;
    letter-spacing: 2px;
    font-size: 38px;
    color: #000;
    text-transform: capitalize;
    line-height: 1;
    font-weight: 600;
    margin-left: 20px;
    & + & {
        margin-top:20px;
    }
    
    @media (${({ theme }) => theme.respondTo.tablet}) {
        font-size: 50px;
    }
    @media (${({ theme }) => theme.respondTo.desktop}) {
        text-decoration: none;
        font-weight: 200;
        letter-spacing: 2px;
        font-size: 20px;
        &:hover{
            text-decoration: underline;
        }
    
        & + & {
            margin: 0 0 0 82px;
        }
    }
`;
const MenuItem = ({ linkData }) => {
    
    if(linkData.where_to){
        return (
            <LinkItem to={`${linkData.where_to}`}>
                {linkData.link_name.text}
            </LinkItem>
        );
    }
    else{
        return(
            <>
            </>
        )
    }
};

export default MenuItem;