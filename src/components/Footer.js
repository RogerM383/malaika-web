import React, {useContext, useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {header_styles} from "../styles/HeaderStyles";
import Image from "../../package/components/Image";
import Menu from "./Menu";
import {footer_styles} from "../styles/FooterStyles";
import MaxWidthContainer from "./MaxWidthContainer";

const Footer = ({img = true, children, ...props}) => {

    const router = useRouter();
    return (
        <MaxWidthContainer>
            <div css={footer_styles}>
                <p className={"info fs-14 sbold"}>Informació de contacte </p>
                <div className={"row fs-12"}>

                    <div className={"contact"}>
                        <span>c/Enric granados 114. 1-2B 08008 BARCELONA</span>

                        <div className={"phone"}>
                            <img src={"/phone_icon.png"}/>
                            <span className={"db"}>645 35 35 35</span>
                        </div>

                        <a> aayats@malaikaviatges.com </a>
                    </div>

                    <div className={"contact"}>
                        <span>c/Horts, 817124 Llofriu, Girona</span>
                        <div className={"phone"}>
                            <img src={"/phone_icon.png"}/>
                            <span className={"db"}> +34 930 011 176 </span>
                        </div>

                        <a> aayats@malaikaviatges.com </a>
                    </div>

                    <div className={"contact"}>
                        <span>Avis legal / Política privacitat</span>
                        <div className={"social"}>
                            <img src={"/facebook_icon.png"}/>
                            <img src={"/instagram_icon.png"}/>
                        </div>

                    </div>

                </div>

            </div>
        </MaxWidthContainer>

    );

};


export default Footer;



