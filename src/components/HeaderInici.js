import React, {useContext, useState, useEffect, useRef} from 'react';
import {useRouter} from "next/router";
import {header_styles} from "../styles/HeaderStyles";
import Image from "../../package/components/Image";
import Menu from "./Menu";
import MaxWidthContainer from "./MaxWidthContainer";
import {Carousel, Col, InputNumber, Row} from "antd";
import {css} from "@emotion/react";
import {header_inici_styles} from "../styles/HeaderIniciStyles";


const HeaderInici = ({img , title = false, children, ...props}) => {



    const router = useRouter();

    debugger

    const carrosusel = (theme) => {
        const style = css`

            img {
                width: 100%;
                height: 100vh;
                object-fit: cover;
                }
            button{
                z-index: 100000000;
            }

        `;
        return [style];
    }


    const settings = {
        dots: false,
        infinite: true,
        //arrows: true
    };

    const slider = useRef();
    const [slide, setSlide] = useState(0);
    return (
        <div css={[header_inici_styles]}>


            <MaxWidthContainer>
                <div className={"topRow"}>
                    <Row align={"middle"}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}    >
                            <a className={'logo'} href={"/inici"}>
                                <Image alt={'Malaika'} src={"/logo.png"}/>
                            </a>
                        </Col>


                        <Col xs={24} sm={12} md={12} lg={12} xl={12} >
                            <Row  align={"middle"}>
                                <Col span={12} className={"contact"}>
                                    <Image className={"icons"} src={"/phone_icon.png"}/>
                                    <a className={"phone"} href="tel:34930011176">+34 930 011 176</a>
                                    <Image  className={"icons"} src={"/mail_icon.png"}/>
                                </Col>

                                <Col span={12} className={"language"}>
                                    <span>Català</span> / <span>Castella</span>
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                </div>

                <div className={"title"}>
                    {title}
                </div>
            </MaxWidthContainer>

            { Array.isArray(img) &&
                img.length > 1 &&
                <div className={"arrows"}>
                    <p onClick={e => { setSlide(e); slider.current.next(); }}><i className="fas fa-chevron-left"></i></p>
                    <p onClick={e => { setSlide(e); slider.current.prev(); }}><i className="fas fa-chevron-right"></i></p>
                </div>
            }


            <Carousel
                {...settings}
                ref={ref => {console.log(ref); slider.current = ref; }}
             /*   dotPosition={'right'}*/
                css={carrosusel}
                effect="fade">

                { Array.isArray(img) &&
                    img.map((im)=>{
                        return(
                            <div>
                                <Image src={im}/>
                            </div>
                        )
                    })
                }

                {
                    !Array.isArray(img) &&
                    <div>
                        <Image src={img}/>
                    </div>
                }


        {/*        <div>
                    <Image src={"/foto1.png"}/>
                </div>
                <div>
                    <Image src={"/foto2.png"}/>
                </div>
                <div>
                    <Image src={"/foto3.png"}/>
                </div>
                <div>
                    <Image src={"/foto4.png"}/>
                </div>*/}


            </Carousel>


            <Menu/>




        </div>
    );
};


export default HeaderInici;



