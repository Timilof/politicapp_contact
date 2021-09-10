import React from 'react';
import styled from 'styled-components';

import MainText from "./Maintext";


const Linkage = styled.a`
    color: #000;
    text-decoration: underline;
    font-size: 16px;
    display: inline;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        font-size: 20px;
    }
`;

const StyledText = styled(MainText)`
    display: inline;
    margin: 0;
    padding: 0;
    display: ${props => (props.regel === "nieuwe regel" ? "block" : "inline")};
    font-size: ${props => (props.sizing === "big" ? "21px" : "initial")};
    font-weight: ${props => (props.sizing === "big" ? "800" : "initial")};
`;

const Spacer = styled.div`
    margin: 20px 0 0 0;
    padding: 0;
`;

const TextLinkBlock = ({item}) => {
    if (item.text_link_of_space === "" || item.text_link_of_space == undefined) {
        return <></>;
    }

    let element;
    if(item.text_link_of_space === "text"){
        element = <StyledText sizing={item.font_grootte} regel={item.style} text={`${item.context.text} `} />
    }else if(item.text_link_of_space === "link"){
        element = <Linkage regel={item.style} href={`${item.type_link}${item.content.text}`}>{item.content.text}</Linkage>
    }else{
        element = <Spacer/>
    }
    
    return (
        <>
            {element}
        </>
    );
};

export default TextLinkBlock;