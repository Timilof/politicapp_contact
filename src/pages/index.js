import React, { useState, useEffect } from 'react';

import axios from "axios";

import Layout from "../components/layout"
import SEO from "../components/seo"
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';

import gif from "../images/3posters-v1.gif";
import arrow from "../images/polygon_1.svg";

const Head = styled.h1`
    margin: 26px 0 20px 0;
    padding: 0;
    font-size: 36px;
    font-weight: 400;
    text-decoration: none;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        font-size: 40px;
    }
`;

const Styledtext = styled.p`
    font-size: 16px;
    text-decoration: none;
    @media (${({ theme }) => theme.respondTo.tablet}) {
        font-size: 20px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 40px 0;
`;

const Submit = styled.button`
    color: #fff;
    background: #1552f0;
    border: none;
    border-radius: 20px;
    padding: 8px 50px 8px 30px;
    font-weight: 900;
    letter-spacing: 1px;
    margin: 20px 0;
    position: relative;

    &::before{
      content: '';
      width: 24px;
      height: 40px;
      background-image: url(${arrow});
      position: absolute;
      right: 18px;
      top: 7px;
      border: none;
      background-repeat: no-repeat;
      background-size: contain;
      transition: .2s ease;
  }
`;

const Input = styled.input`
    border: none;
    background: #eee;
    padding: 8px;
    margin: 8px 0;
    width: 100%;
    font-size: 20px;
    text-decoration: none;
    margin: 10px 0;
`;

const Label = styled.label`
    font-size: 16px;
    margin: 0 0 10px;
`;

const Green = styled.p`
    color: ${(({ theme }) => theme.green)};
    display: inline;
`;

const Expander = styled.button`
    font-size: 14px;
    text-decoration: underline;
    background: transparent;
    border: none;
    margin: 0;
    padding: 0;
    width: fit-content;
    pointer-events: all;
    color: ${(({ theme }) => theme.green)};
    @media (${({ theme }) => theme.respondTo.tablet}) {
        display: none;
    }
`;

const Wrapper = styled(animated.div)`
    overflow: hidden;
    max-height: initial;
`;


const IndexPage = () => {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/207ab951-0e49-4cde-8354-c2e43bc98a8a",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
        console.log("it was a success.. ",form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  const [expanded, setExpanded] = useState(false);

    const expandText = useSpring({ config: { duration: 300 },
        maxHeight: expanded ? '800px' : '55px',
    })

    function expand(){
        setExpanded(!expanded);
    }

    useEffect(() =>{
        let isMobile = window.innerWidth < 550 ? true : false;
        if (!isMobile) {
        setExpanded(true)
        }else{
        setExpanded(false)
        }
    },[])

  return(
    <>
    <Layout isHomepage={"yes"}>
      <SEO title="Politicapp home" />
      <img src={gif} alt="some posters we made, but then rotated"/>
      <Head>We are PoliticApp</Head>
      <Wrapper style={expandText}>
        <Styledtext>You might have experienced a loss of control and a lack of understanding about contemporary complex social and political issues. Not to mention, the division of societies that affects even our personal and familiar environment. Deeply concerned about this polarisation we find ourselves discussing innovations that could potentially work against this development. Democracy implies the rule of the people which should enable different opinions and political affiliations to peacefully live together in a society. In order to guarantee this ideal political pluralism, it is important to stay informed and listen to each other's opinions.</Styledtext>
        <Styledtext>That's why we're setting up PoliticApp. We want to give a space to the people and groups who actually make politics (in the local and global scope) far more accessible to people here, in Amsterdam.</Styledtext>
        <Styledtext>We're currently constructing the platform and speaking with a number of venues and organisers of events in the city. Leave your contact information below and we'll reach out to you with something you'll really want to use.</Styledtext>
      </Wrapper>      
      <Expander onClick={e => expand()}>{expanded ? "Show less":"Read more"}</Expander>
      <Form onSubmit={handleOnSubmit} accept-charset="UTF-8" action="https://getform.io/f/207ab951-0e49-4cde-8354-c2e43bc98a8a" method="POST">
        <Label htmlFor="info">Fill in your handle and we’ll reach out to you when we <Green>go live!</Green></Label>
        <Input name="info" id="info" placeholder="E-mail or instagram" type="text"/>
        <Submit type="submit">Send info</Submit>
      </Form>
    <div>
      <Styledtext>Mail us at 
        <a href="mailto:polticapp@gmail.com"> polticapp@gmail.com</a>
      </Styledtext>
      <Styledtext>Follow us on instagram @
        <a target="_blank" href="https://www.instagram.com/politicapp_nl">Politicapp</a>
      </Styledtext>
    </div>

    </Layout>
    </>
  );
}

export default IndexPage
