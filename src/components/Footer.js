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

                <Row gutter={[24, 24]}>

                    <Col sm={24} md={8} lg={8}>
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


                    <Col sm={24} md={8} lg={8}>
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


                    <Col sm={24} md={8} lg={8}>
                        <div className={" last"}>
                            <span><a href={"avis-legal"}>Avis legal</a> / <a href={"politica-privacitat"}>Política de privacitat</a></span>
                            <div className={"social"}>
                                <img src={"/facebook_icon.png"}/>
                                <img src={"/instagram_icon.png"}/>
                            </div>

                        </div>
                    </Col>
                </Row>


            </div>
        </MaxWidthContainer>

    );

};


export default Footer;



