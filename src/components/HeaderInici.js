import React, {useContext, useState, useEffect, useRef} from 'react';
import {useRouter} from "next/router";
import {header_styles} from "../styles/HeaderStyles";
import Image from "../../package/components/Image";
import Menu from "./Menu";
import MaxWidthContainer from "./MaxWidthContainer";
import {Carousel, Col, InputNumber, Row, Switch} from "antd";
import {css} from "@emotion/react";
import {header_inici_styles} from "../styles/HeaderIniciStyles";
import {LaunguageContext} from "../contexts/LanguageContext";


const HeaderInici = ({img , title = false, fraseInici=false, children, ...props}) => {



    const router = useRouter();

    const [image, setImage] = useState(null);
    useEffect(() => {
        if (img) {
            setImage(img);
        }
    },[img]);

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

    const [slideNum, setSlideNum] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        //arrows: true
        beforeChange: (current, next) => {
            setSlideNum(next)
        }
    };

    const slider = useRef();
    const [slide, setSlide] = useState(0);

    const {language,setLanguage} = useContext(LaunguageContext)

    const switchLanguage = (checked) => (e) => {

        if(language.pageTranslation === null || language.pageTranslation === undefined){
            debugger
            setLanguage({...language,language: checked})
            router.push(checked === "ES" ? "/inicio" : "/inici")
        } else {
            debugger
            let data = {...language,language: checked}
            setLanguage(data);
            router.push("/"+language.pageTranslation)
        }

    }

    return (
        <div css={[header_inici_styles]}>


            <MaxWidthContainer>
                <div className={"topRow"}>
                    <Row align={"middle"}>
                        <Col xs={24} sm={15} md={15} lg={15} xl={15}    >
                            <a className={'logo'} href={"/inici"}>
                                <Image alt={'Malaika'} src={"/logo.png"}/>
                            </a>
                        </Col>

                        <Col xs={24} sm={9} md={9} lg={9} xl={9} >
                            <Row  align={"middle"}>
                                <Col span={12} className={"contact"}>
                                    <Image className={"icons"} src={"/phone_icon.png"}/>
                                    <a className={"phone"} href="tel:34930011176">+34 930 011 176</a>
                                   <a href="mailto:aayats@malaikaviatges.com"> <Image  className={"icons"} src={"/mail_icon.png"}/></a>
                                </Col>

                                <Col span={12} className={"language"}>
                                    <span onClick={switchLanguage("CA")} >Català</span> / <span onClick={switchLanguage("ES")}>Castellà </span>
                                 {/*  <p>{language.language}</p>*/}
                                      {/*  <Switch  checkedChildren="Català" unCheckedChildren="Castellano" checked={language.language === "CA"}  onChange={switchLanguage} />*/}
                                </Col>

                            </Row>
                        </Col>
                    </Row>

                </div>

                <div className={"title"}>
                    {
                        title && Array.isArray(title) ?
                        <span dangerouslySetInnerHTML={{__html: title[slideNum] }}/>
                        :
                        title &&
                        <span>{title}</span>

                    }
                    {
                        fraseInici &&
                        <div className={"subtitle"} dangerouslySetInnerHTML={{__html: fraseInici[slideNum] }} />
                    }

                </div>
            </MaxWidthContainer>
{/*

            { Array.isArray(img) &&
                img.length > 1 &&
                <div className={"arrows"}>
                    <p onClick={e => { setSlide(e); slider.current.next(); }}><i className="fas fa-chevron-left"></i></p>
                    <p onClick={e => { setSlide(e); slider.current.prev(); }}><i className="fas fa-chevron-right"></i></p>
                </div>
            }
*/}

            {
                image &&
                <Carousel
                    {...settings}
                    autoplay
                    ref={ref => {
                        /*   console.log(ref);*/
                        slider.current = ref;
                    }}
                    dotPosition={'bottom'}
                    css={carrosusel}
                    effect="fade">

                    {
                        Array.isArray(image) &&
                        image.map((im) => {
                            return (
                                <div>
                                    <Image src={im}/>
                                </div>
                            )
                        })
                    }

                    {
                        !Array.isArray(image) &&
                        <div>
                            <Image src={image}/>
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
            }


            <Menu/>




        </div>
    );
};


export default HeaderInici;



