import React, {useContext, useState, useEffect} from 'react';
import {useRouter} from "next/router";
import {header_styles} from "../styles/HeaderStyles";
import Image from "../../package/components/Image";
import Menu from "./Menu";
import {footer_styles} from "../styles/FooterStyles";
import MaxWidthContainer from "./MaxWidthContainer";
import {Col, Row} from "antd";
import 'antd/dist/antd.css';

const Footer = ({img = true, children, ...props}) => {

    const router = useRouter();
    return (
        <MaxWidthContainer>
            <div css={footer_styles}>
                <p className={"info_contact fs-14 sbold"}>Informació de contacte </p>

                <Row gutter={[24, 24]} justify={"space-between"}>

                    <Col sm={24} md={6} lg={6}>
                        <div className={"contact"}>
                            <span className={"address"}>Carrer de París, 209, Pral 2a</span>
                            <span className={"address"}>08008 BARCELONA</span>

                            <div className={"phone"}>
                                <img src={"/phone_icon.png"}/>
                                <span className={"db"}>+34 930 011 176</span>
                            </div>

                            <a>aayats@malaikaviatges.com</a>
                        </div>

                    </Col>


                    <Col sm={24} md={6} lg={6}>
                        <div className={"contact"}>
                            <span  className={"address"}>Camí dels Horts, 8</span>
                            <span  className={"address"}>17124 Llofriu, Girona</span>
                            <div className={"phone"}>
                                <img src={"/phone_icon.png"}/>
                                <span className={"db"}>+34 872 503 266</span>
                            </div>

                            <a>mtribulietx@malaikaviatges.com</a>
                        </div>
                    </Col>

                    <Col sm={24} md={6} lg={6}>
                        <div className={"avasa"}>
                            <a target={"_blank"} href={"https://www.grupoavasa.com/"}><Image className={"avasa_logo"} src={"/avasa-logo.jpg"}></Image> </a>
                        </div>

                    </Col>


                    <Col sm={24} md={6} lg={6}>
                        <div className={" last"}>
                            <span className={"politicas"}><a target={"_blank"} href={"avis-legal"}>Avís legal</a> / <a target={"_blank"} href={"condicions-generals"}>Condicions generals</a></span>
                            <div className={"social"}>
                                <a target={"_blank"} href={"https://www.facebook.com/malaikaviatges"}><img src={"/facebook_icon.png"}/></a>
                                <a target={"_blank"} href={"https://www.instagram.com/malaikaviatges/"}><img src={"/instagram_icon.png"}/></a>
                            </div>

                        </div>
                    </Col>
                </Row>


            </div>
        </MaxWidthContainer>

    );

};


export default Footer;



