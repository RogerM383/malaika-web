import React, {useContext, useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {header_styles} from "../styles/HeaderStyles";
import Image from "../../package/components/Image";
import Menu from "./Menu";
import {footer_styles} from "../styles/FooterStyles";

const Footer = ({img = true, children, ...props}) => {

    const router = useRouter();
    return (
        <div className={"container"} css={footer_styles}>
            <p className={"info"}>Informació de contacte </p>
            <div className={"row row-center"}>

                <div className={"contact"}>
                    <p>c/Enric granados 114. 1-2B 08008 BARCELONA</p>
                    <p><img src={"/phone_icon.png"}/> 645 35 35 35</p>
                    <a> aayats@malaikaviatges.com </a>
                </div>

                <div className={"contact"}>
                    <p>c/Enric granados 114. 1-2B 08008 BARCELONA</p>
                    <p><img src={"/phone_icon.png"}/> 645 35 35 35</p>
                    <a> aayats@malaikaviatges.com </a>
                </div>

                <div className={"contact"}>
                    <p>Avis legal / Política privacitat</p>
                    <div className={"social"}>
                        <img src={"/facebook_icon.png"}/>
                        <img src={"/instagram_icon.png"}/>
                    </div>

                </div>

            </div>

        </div>
    );

};


export default Footer;



