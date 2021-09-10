import React from 'react';

import styled from 'styled-components';

const Head = styled.h1`
    margin: 0 0 40px 0;
    padding: 0;
    font-size: 30px;
    text-decoration: none;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        font-size: 40px;
    }
`;

const Heading1 = ({ text, className }) => {
    return (
        <Head className={className}>
            {text}
        </Head>
    );
};

export default Heading1;