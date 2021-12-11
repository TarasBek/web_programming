import React from "react";
import Lviv from "D:/programming/web_labs/6_lab/src/Icons/lviv.png";
import { Wrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase } from "./Footer.styled";
import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    AliwangwangOutlined
    } from "@ant-design/icons";

    const Footer = () => {
    return (
        <Wrapper>
        <LogoWrapper>
            <img alt="Logo" src={Lviv} style={{ width: "50px" }}/>
            <h1 >The best pools in Lviv</h1>
        </LogoWrapper>
        <VerticalLine />
        <IconsWrapper>
            <IconBase component={YoutubeOutlined} color='#FF0000'/>
            <IconBase component={TwitterOutlined} color='#03A9F4' />
            <IconBase component={LinkedinOutlined} color='#007AB9'/>
            <IconBase component={InstagramOutlined} color='#3A9F4'/>
        </IconsWrapper>
        <VerticalLine />
        <StyledText>© all rights reserved</StyledText>
        </Wrapper>
    );
};

export default Footer;
